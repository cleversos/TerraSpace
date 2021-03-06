import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { WalletContext, STAKE_CONTRACT_ID, NFT_CONTRACT_ID, MAX_GAS, NftData, NftContractMetadata, DEPOSIT } from '../contexts/wallet'
import { useCallback, useContext, useEffect, useState } from 'react'
import { parseNearAmount } from 'near-api-js/lib/utils/format'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type CollectionStat = {
  total_items: number
  total_listed: number
  total_owners: number
  floor_price: number
  floor_price_24: number
  floor_price_7: number
  total_volume: number
  instant_volume: number
  day_volume: number
}

const Mint: NextPage = () => {
  const { wallet, getNftMetadata, getCollectionList, getCollectionMetadata } = useContext(WalletContext)
  const [transactionData, setTransactionData] = useState<CollectionStat[]>([])
  const [collectionList, setCollectionList] = useState<string[]>([])
  const [currentCollectionId, setCurrentCollectionId] = useState<string>('');
  const [collectionMetadataList, setCollectionMetadataList] = useState<Map<string, any>>(new Map());
  const [chartOptions, setChartOptions] = useState<any>(undefined);
  const [chartData, setChartData] = useState<any>(undefined);
  const [dashboardEnabled, setDashboardEnabled] = useState<boolean>(false);

  const getTransactionsForCollection = async (account_id: string) => {
    const getAPI = async () => {
      const API = `http://35.75.88.169:4001/statistic_data`;
      const result = await fetch(API, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          account_id
        })
      });
      return (await result.json())
    };
    const result = await getAPI();
    setTransactionData(result);
  }

  const onSelect = async (account_id: string) => {
    await getTransactionsForCollection(account_id);
    setCurrentCollectionId(account_id);
  }

  const fetchCollectionList = async () => {
    let stakeData = await wallet?.account().viewFunction(STAKE_CONTRACT_ID,
      "get_staking_informations_by_owner_id",
      {
        account_id: wallet.getAccountId(),
        from_index: "0",
        limit: 100,
      });
    if (stakeData == undefined)
      stakeData = [];
    for (let i = 0; i < stakeData.length; i++) {
      const nft_info = await wallet?.account().viewFunction(stakeData[i].nft_contract_id,
        "nft_token",
        {
          token_id: stakeData[i].token_id,
        });

      if ((JSON.stringify(nft_info.approved_account_ids).match(STAKE_CONTRACT_ID) || []).length
        == (JSON.stringify(nft_info.approved_account_ids).match('":') || []).length) {
        setDashboardEnabled(true);
        const list = await getCollectionList();
        setCollectionList(list);
      }
    }

  }

  const fetchCollectionMetadataList = async () => {
    let list = new Map();
    for (let i = 0; i < collectionList.length; i++) {
      const data = await getCollectionMetadata(collectionList[i]);
      list.set(collectionList[i], data);
    }
    setCollectionMetadataList(list);
    if (collectionList.length > 0) {
      onSelect(collectionList[0]);
    }
  };

  const makeChartData = async () => {
    if (currentCollectionId == '' || transactionData.length == 0) {
      setChartOptions(undefined);
      setChartData(undefined);
    } else {
      let floor_data: number[] = [];
      let list_data: number[] = [];
      let volume_data: number[] = [];
      let floor_max: number = 0;
      let list_max: number = 0;
      let volume_max: number = 0;

      for (let i = 0; i < transactionData.length; i++) {
        if (transactionData[i].floor_price > floor_max)
          floor_max = transactionData[i].floor_price;
        if (transactionData[i].total_listed > list_max)
          list_max = transactionData[i].total_listed;
        if (transactionData[i].instant_volume > volume_max)
          volume_max = transactionData[i].instant_volume;
        floor_data.push(transactionData[i].floor_price)
        list_data.push(transactionData[i].total_listed)
        volume_data.push(transactionData[i].instant_volume)
      }

      if (floor_max == 0)
        floor_max = 100;
      if (list_max == 0)
        list_max = 200;
      if (volume_max == 0)
        volume_max = 100;

      let labels: string[] = [];
      let label_mins: string[] = ['00', '10', '20', '30', '40', '50'];
      for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 6; j++) {
          labels.push(i.toString() + ":" + label_mins[j]);
        }
      }
      labels.push('24:00');

      const options = {
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Line Chart - Multi Axis',
          },
        },
        scales: {
          x: {
            type: 'category',
            labels: labels
          },
          y: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
              drawOnChartArea: false,
            },
            min: 0,
            max: Math.ceil(floor_max * 1.5),
          },
          y1: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            min: 0,
            max: Math.ceil(list_max * 2),
          },
          y2: {
            type: 'linear' as const,
            display: false,
            position: 'left' as const,
            min: 0,
            max: Math.ceil(volume_max * 4),
          },
        },
      };

      const data = {
        datasets: [
          {
            type: 'line' as const,
            label: 'Floor Price ' + (transactionData.length > 0 ? transactionData[transactionData.length - 1].floor_price : '0') + 'N',
            data: floor_data,
            borderColor: 'rgb(63, 72, 204)',
            backgroundColor: 'rgba(63, 72, 204, 0.5)',
            yAxisID: 'y',
            borderWidth: 1,
            radius: 1,
          },
          {
            type: 'line' as const,
            label: 'Listed ' + (transactionData.length > 0 ? transactionData[transactionData.length - 1].total_listed : '0'),
            data: list_data,
            borderColor: 'rgb(0, 162, 232)',
            backgroundColor: 'rgba(0, 162, 232, 0.5)',
            yAxisID: 'y1',
            borderWidth: 1,
            radius: 1,
          },
          {
            type: 'bar' as const,
            label: 'Volume ' + (transactionData.length > 0 ? transactionData[transactionData.length - 1].instant_volume : '0') + 'N',
            data: volume_data,
            borderColor: 'rgb(255, 128, 192)',
            backgroundColor: 'rgba(255, 128, 192, 0.5)',
            yAxisID: 'y2',
            radius: 1,
          },
        ],
      };

      setChartOptions(options);
      setChartData(data);
    }
  }

  useEffect(() => {
    makeChartData();
  }, [currentCollectionId]);

  useEffect(() => {
    fetchCollectionMetadataList();
  }, [collectionList]);

  useEffect(() => {
    if (wallet)
      fetchCollectionList();
  }, [wallet]);

  return (
    <main className="dashboard-page position-relative pt-160 fix">
      <div className="vector-abs">
        <img src="assets/img/vector/Vector.png" alt="Vector" loading="lazy" />
      </div>
      <div className="dashboard-wrapper">
        <div className="" style={{ marginLeft: 60, marginRight: 60 }}>
          {
            dashboardEnabled == true ?
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-4 mb-25">
                  <div className="watchlist-wrapper card-bg">
                    {/* <div className="single-watchlist">
                  <div className="watch-t mb-20 d-flex align-items-center justify-content-between">
                    <h3 className="t-18-b white-c">
                      <span>Terraspaces</span>
                    </h3>
                    <div className="track-select position-relative d-inline-block">
                      <div className="dropdown">
                        <button className="btn p-o border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <img src="assets/img/icons/dots.svg" alt="" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-start" style={{ position: "absolute", inset: "0px auto auto 0px", margin: 0, transform: "translate(0px, 51px)" }}>
                          <li><a className="dropdown-item" href="#"> Edit Title</a></li>
                          <li><a className="dropdown-item" href="#"> Duplicate</a></li>
                        </ul>
                      </div>

                    </div>
                  </div> */}
                    <div className="watch-sub-f pl-20 ">
                      {
                        collectionList.map((data, key) => {
                          return (
                            <div className="watch-subs-t mb-10 d-flex align-items-center" key={key} onClick={() => { onSelect(data); }}>
                              {
                                collectionMetadataList.get(data)?.icon != undefined ?
                                  <img className="mr-8" src={collectionMetadataList.get(data).icon} alt="Icon" width={32} height={32} /> :
                                  <img className="mr-8" src="assets/img/icons/Near.png" alt="Near" width={32} height={32} />
                              }
                              <h3 className="t-14 neutral-c  ">
                                <span>{collectionMetadataList.get(data) != undefined ? collectionMetadataList.get(data).name : data}</span>
                              </h3>
                            </div>
                          )
                        })
                      }
                    </div>

                    {/* </div>
                <div className="single-watchlist">
                  <div className="watch-t mb-20 d-flex align-items-center justify-content-between">
                    <h3 className="t-18-b white-c">
                      <span>Terraspaces</span>
                    </h3>
                    <div className="track-select position-relative d-inline-block">
                      <div className="dropdown">
                        <button className="btn p-o border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <img src="assets/img/icons/dots.svg" alt="" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-start" style={{ position: "absolute", inset: "0px auto auto 0px", margin: 0, transform: "translate(0px, 51px)" }}>
                          <li><a className="dropdown-item" href="#"> Edit Title</a></li>
                          <li><a className="dropdown-item" href="#"> Duplicate</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className="watch-sub-f pl-20 ">
                    <div className="watch-subs-t mb-10 d-flex align-items-center">
                      <img className="mr-8" src="assets/img/dashbaord/stakin.png" alt="stakin " />
                      <h3 className="t-14 neutral-c  ">
                        <span>Terraspaces</span>
                      </h3>
                    </div>
                    <div className="watch-subs-t mb-10 d-flex align-items-center">
                      <img className="mr-8" src="assets/img/dashbaord/stakin.png" alt="stakin " />
                      <h3 className="t-14 neutral-c ">
                        <span>Terraspaces</span>
                      </h3>
                    </div>
                  </div>

                </div> */}
                    {/* <div className="watch-btn">
                  <button className="cmn-btn f-18 redius-12">
                    <span> Get Started</span>
                    <img src="assets/img/icons/plus.svg" alt="plus" />
                  </button>
                </div> */}
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-8">
                  <div className="dashboard-t d-lg-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center ">
                      <div className="dashboard-icon mr-12 ">
                        {
                          collectionMetadataList.get(currentCollectionId)?.icon != undefined ?
                            <img className="mr-8" src={collectionMetadataList.get(currentCollectionId).icon} alt="Icon" width={32} height={32} /> :
                            <img className="mr-8" src="assets/img/icons/Near.png" alt="Near" width={32} height={32} />
                        }
                      </div>
                      <div className="hero-description ">
                        <div className="hero-subs-t d-flex align-items-center justify-content-center ">
                          <h3 className="t-18-b white-c mr-8 ">
                            <span>{collectionMetadataList.get(currentCollectionId)?.name}</span>
                          </h3>
                          <img src="assets/img/icons/verified.svg " width="20 " height="20 " alt="verified " />
                        </div>
                        <div className="pt-1 hero-subs-s-title d-flex align-items-center justify-content-center ">
                          <a className="t-14 neutral-c mr-4 " href={'https://paras.id/collection/' + currentCollectionId} target="_blank">
                            {currentCollectionId}
                          </a>
                          <img src="assets/img/icons/chain.svg " width="20 " height="20 " alt="verified " />
                        </div>
                      </div>
                    </div>
                    {/* <div className="search-f pt-3 pt-lg-0">
                  <form action=" ">
                    <div className="d-flex justify-content-center">
                      <input type="text " name="text " id="text " placeholder="Search by Collections " />
                      <button type="submit" className="cmn-btn ">Search</button>
                    </div>

                  </form>

                </div> */}
                  </div>
                  <div className="chart-b">
                    {
                      chartOptions != undefined ?
                        <Chart type='bar' options={chartOptions} data={chartData} /> : <></>
                    }
                  </div>
                </div>
              </div>
              :
              <h3>Please Stake Terraspaces NFT or Partner NFT to Access Dashboard.</h3>
          }
        </div>
      </div>
    </main>
  )
}

export default Mint
