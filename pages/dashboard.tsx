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
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
console.log(labels.map(() => 400))
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => 400),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => 400),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

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
    setCurrentCollectionId(account_id);
    getTransactionsForCollection(account_id);
  }

  const fetchCollectionList = async () => {
    const list = await getCollectionList();
    setCollectionList(list);
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
        <div className="container">
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
                          <img className="mr-8" src="assets/img/dashbaord/stakin.png" alt="stakin " />
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
                    <img src="assets/img/dashbaord/stakin-l.png " alt="stakin " loading="lazy" />
                  </div>
                  <div className="hero-description ">
                    <div className="hero-subs-t d-flex align-items-center justify-content-center ">
                      <h3 className="t-18-b white-c mr-8 ">
                        <span>{collectionMetadataList.get(currentCollectionId)?.name}</span>
                      </h3>
                      <img src="assets/img/icons/verified.svg " width="20 " height="20 " alt="verified " />
                    </div>
                    <div className="pt-1 hero-subs-s-title d-flex align-items-center justify-content-center ">
                      <p className="t-14 neutral-c mr-4 ">
                        {currentCollectionId}
                      </p>
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
              <div className="dash-cont count-parent ">
                <div className="count-s ">
                  <div className="single-text ">
                    <div className="char-c mr-12 ">
                      <img src="assets/img/icons/vol1.svg " alt="vol1 " />
                    </div>
                    <div className="mr-8 ">
                      <p className="t-14 linr-h-150 neutral-c ">
                        Floor Price
                      </p>
                      <h3 className="t-18-b white-c pt-1 ">
                        <span className="counter ">{transactionData.length > 0 ? transactionData[transactionData.length - 1].floor_price : '0'}</span>
                        <span>N</span>
                      </h3>
                    </div>
                    {/* <div className="eye-f ">
                      <img src="assets/img/icons/eye-on.svg " alt="eye " />
                    </div> */}
                  </div>
                </div>
                <div className="count-s ">
                  <div className="single-text ">
                    <div className="char-c mr-12 ">
                      <img src="assets/img/icons/vol2.svg " alt="vol1 " />
                    </div>
                    <div className="mr-8 ">
                      <p className="t-14 linr-h-150 neutral-c ">
                        Listed
                      </p>
                      <h3 className="t-18-b white-c pt-1 ">
                        <span className="counter ">{transactionData.length > 0 ? transactionData[transactionData.length - 1].total_listed : '0'}</span>
                      </h3>
                    </div>
                    {/* <div className="eye-f ">
                      <img src="assets/img/icons/eye-on.svg " alt="eye " />
                    </div> */}
                  </div>
                </div>
                <div className="count-s ">
                  <div className="single-text ">
                    <div className="char-c mr-12 ">
                      <img src="assets/img/icons/vol3.svg " alt="vol1 " />
                    </div>
                    <div className="mr-8 ">
                      <p className="t-14 linr-h-150 neutral-c ">
                        The Volume
                      </p>
                      <h3 className="t-18-b white-c pt-1 ">
                        <span className="counter ">{transactionData.length > 0 ? transactionData[transactionData.length - 1].day_volume : '0'}</span>
                        <span>N</span>
                      </h3>
                    </div>
                    {/* <div className="eye-f ">
                      <img src="assets/img/icons/eye-off.svg " alt="eye " />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="chart-b">
                <Line options={options} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mint
