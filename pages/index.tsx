import type { NextPage } from 'next'
import { stringify } from 'querystring';
import { WalletContext, STAKE_CONTRACT_ID, NFT_CONTRACT_ID, MAX_GAS, NftData, NftContractMetadata, DEPOSIT } from '../contexts/wallet'
import { useCallback, useContext, useEffect, useState } from 'react'
import { parseNearAmount } from 'near-api-js/lib/utils/format'

const Home: NextPage = () => {
  const { wallet, getNftMetadata, getCollectionList, getCollectionMetadata } = useContext(WalletContext)
  const [trendingData, setTrendingData] = useState<any>({})
  const [collectionList, setCollectionList] = useState<string[]>([])
  const [collectionMetadataList, setCollectionMetadataList] = useState<Map<string, any>>(new Map());

  const getTrendingCollectionData = async () => {
    const getAPI = async () => {
      const API = `http://35.75.88.169:4001/trending_collection_data`;
      const result = await fetch(API, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
      });
      return (await result.json())
    };
    const result = await getAPI();
    console.log(result);
    setTrendingData(result);
    const list: string[] = await getCollectionList();
    let sortedList: string[] = [];
    while (list.length > 0) {
      let firstValue = list.shift();
      let insert = firstValue == undefined ? '' : firstValue;
      let index = 0;
      for (let i = 0; i < sortedList.length; i++) {
        if (result[sortedList[i]].total_volume <= result[insert].total_volume) {
          break;
        }
        index++;
      }
      sortedList.splice(index, 0, insert);
    }
    setCollectionList(sortedList);
  }

  const fetchCollectionMetadataList = async () => {
    let list = new Map();
    for (let i = 0; i < collectionList.length; i++) {
      const data = await getCollectionMetadata(collectionList[i]);
      list.set(collectionList[i], data);
    }
    setCollectionMetadataList(list);
  };

  useEffect(() => {
    fetchCollectionMetadataList();
  }, [collectionList]);

  useEffect(() => {
    if (wallet)
      getTrendingCollectionData();
  }, [wallet]);

  return (
    <>
      <main className="home-page pt-160">
        <div className="home-vect-abs v-top">
          <img src="assets/img/vector/home-t.png" alt="home" loading="lazy" />
        </div>
        <div className="hero-area">
          <div className="container">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-xl-8 col-lg-11 col-md-12">
                <div className="powered-icon">
                  <img src="assets/img/logo/powered.png" alt="powerded" />
                  <div className="position-relative">
                    <div className="popup-videos">
                      <img src="assets/img/icons/video-i.png" alt="video" loading="lazy" />
                      <div className="video-p">
                        <a className="videos-icon" href="https://www.youtube.com/watch?v=Fzu_gMLk55A">
                          <i className="fas fa-play"></i>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="hero-description">
                  <div className="hero-subs-t">
                    <span className="t-16 p1-c text-uppercase">Terraspaces</span>
                  </div>
                  <div className="hero-title">
                    <h1>Generative <span className="p1-c ">Dystopian </span> <br /> NFTs meet utility</h1>
                  </div>
                  <div className="hero-d-p">
                    <p className="t-18 neutral-c">
                      Generative dystopian NFTs meet utility via proof-of-staking to <br />access analytics dashboard. Genesis collection of 777.
                    </p>
                  </div>

                  <div className="get-button d-inline-block">
                    <button className="cmn-btn f-18 redius-12">
                      <span> Get Started</span>
                      <img src="assets/img/icons/Explore.svg" alt="get" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terraspace-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3 mb-20">
                <div className="t-single-wrapper">
                  <div className="t-single-description radius-35 radius-b-l-r border-bottom-0">
                    <p className="p1-c t-16 text-uppercase"> Terraspaces.Near</p>
                    <h2 className="t-36">Introducing Proof-Of-Staking</h2>
                    <p className="neutral-c t-16">The 1st cutting-edge analytics interface on NEAR. Access analytics dashboard for NEAR NFTs via Proof-Of-Staking.</p>
                  </div>
                  <div className="t-single-img">
                    <img className="radius-35 radius-t-l-r" src="assets/img/home/terra3.png" alt="terra3" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-6 mb-20">
                <div className="t-middle-wrapper">
                  <div className="t-middle-img radius-35">
                    <img src="assets/img/home/terra1.png" alt="terra3" />
                  </div>
                  <div className="t-middle-img radius-35">
                    <img src="assets/img/home/terra2.png" alt="terra3" />
                  </div>

                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 mb-20">
                <div className="t-single-wrapper ">
                  <div className="t-single-img">
                    <img className="radius-35 radius-b-l-r" src="assets/img/home/terra4.png" alt="terra4" loading="lazy" />
                  </div>
                  <div className="t-single-description radius-35 radius-t-l-r border-top-0">
                    <p className="p1-c t-16 text-uppercase"> Coming Soon</p>
                    <h2 className="t-36">Layer One Staking Solution</h2>
                    <p className="neutral-c t-16">Multiple collections can access Proof-Of-Staking NFT for gated analytical dashboard utility as Staking Partners.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="dasboard-wrapper sec-padding-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5 d-flex align-items-center justify-content-center mb-20">
                <div>
                  <div className="dash-des">
                    <div className="flex-d">
                      <div className="icons-f">
                        <img src="assets/img/icons/Explore.svg" alt="get-icons" />
                      </div>
                      <h5 className="t-20 white-c">Dashbaord</h5>
                    </div>
                    <div className="dash-info pt-15 pb-15">
                      <p className="t-16 neutral-c">
                        Terraspaces will enable staked owners to access the exclusive analytics dashboard; your user-friendly graphical charting tool for collections listed on Paras Marketplace providing the following data:
                      </p>
                    </div>
                    <div className="d-grid-2 before-srarting-img">
                      <ul>
                        <li>
                          Floor price change for collection.
                        </li>

                        <li>
                          Total volume change for collection.
                        </li>
                        <li>
                          Upcoming calendar. <span className="p1-c"> Coming Soon.</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Total listing change for collection.
                        </li>
                        <li>
                          New collection alert. <span className="p1-c"> Coming Soon.</span>
                        </li>
                        <li>
                          Add collections to your watchlist.
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="dash-des staking mt-40">
                    <div className="flex-d">
                      <div className="icons-f">
                        <img src="assets/img/icons/server.svg" alt="server" />
                      </div>
                      <h5 className="t-20 white-c">Staking</h5>
                    </div>
                    <div className="dash-info pt-15 pb-15">
                      <p className="t-16 neutral-c">
                        Terraspaces NFT owners will be required to stake their NFT to access the exclusive NEAR NFT analytics dashboard via Proof-Of-Staking.
                      </p>
                    </div>
                    <div className="d-grid-2 before-srarting-img">
                      <ul>

                        <li>
                          Gated analytical dashboard for NEAR collections via Proof-Of-Staking Terraspaces NFT.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Multi-collection Proof-Of-Staking to access analytical dashboard as Staking Partners.
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 col-xl-7  m-auto">
                <div className="ps-xl-4 p-0">
                  <div className="stak-img text-center">
                    <img src="assets/img/home/terra5.png" alt="terra5" loading="lazy" />
                    <div className="stak-img-abs">
                      <img src="assets/img/vector/vector2.png" alt="Vector" loading="lazy" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <div className="collecton-wrapper sec-padding-top">
            <div className="container">
                <div className="col-md-12">
                    <div className="sec-t text-center">
                        <h2 className="section-heading">
                            Most Tracked Collections
                        </h2>
                    </div>
                    <div className="tracker-wrapper  cont-top-space">
                        <div className="d-grid-5">
                            <div className="single-tracker ">
                                <a href="#">
                                    <div className="t-single-img">
                                        <img className="radius-35 radius-b-l-r" src="assets/img/home/collection1.png" alt="collection1" loading="lazy"/>
                                    </div>
                                    <div className="t-single-description radius-35 radius-t-l-r border-top-0">
                                        <h5 className="white-c t-20 text-capitalize">
                                            Ultron Apes
                                        </h5>
                                        <p className="neutral-c t-14 pt-1">
                                            482 Items
                                        </p>
                                    </div>
                                </a>

                            </div>
                            <div className="single-tracker ">
                                <a href="#">
                                    <div className="t-single-img">
                                        <img className="radius-35 radius-b-l-r" src="assets/img/home/collection2.png" alt="collection1" loading="lazy"/>
                                    </div>
                                    <div className="t-single-description radius-35 radius-t-l-r border-top-0">
                                        <h5 className="white-c t-20 text-capitalize">
                                            CyberWave
                                        </h5>
                                        <p className="neutral-c t-14 pt-1">
                                            482 Items
                                        </p>
                                    </div>
                                </a>

                            </div>
                            <div className="single-tracker ">
                                <a href="#">
                                    <div className="t-single-img">
                                        <img className="radius-35 radius-b-l-r" src="assets/img/home/collection3.png" alt="collection1" loading="lazy"/>
                                    </div>
                                    <div className="t-single-description radius-35 radius-t-l-r border-top-0">
                                        <h5 className="white-c t-20 text-capitalize">
                                            Fractalvc
                                        </h5>
                                        <p className="neutral-c t-14 pt-1">
                                            482 Items
                                        </p>
                                    </div>
                                </a>

                            </div>
                            <div className="single-tracker ">
                                <a href="#">
                                    <div className="t-single-img">
                                        <img className="radius-35 radius-b-l-r" src="assets/img/home/collection4.png" alt="collection1" loading="lazy"/>
                                    </div>
                                    <div className="t-single-description radius-35 radius-t-l-r border-top-0">
                                        <h5 className="white-c t-20 text-capitalize">
                                            Terraspaces
                                        </h5>
                                        <p className="neutral-c t-14 pt-1">
                                            482 Items
                                        </p>
                                    </div>
                                </a>

                            </div>
                            <div className="single-tracker ">
                                <a href="#">
                                    <div className="t-single-img">
                                        <img className="radius-35 radius-b-l-r" src="assets/img/home/collection5.png" alt="collection1" loading="lazy"/>
                                    </div>
                                    <div className="t-single-description radius-35 radius-t-l-r border-top-0">
                                        <h5 className="white-c t-20 text-capitalize">
                                            Octopussi
                                        </h5>
                                        <p className="neutral-c t-14 pt-1">
                                            482 Items
                                        </p>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="tranding-wrapper sec-padding-top">
          <div className="container">
            <div className="row justify-content-end align-items-center">
              <div className="col-md-12 col-lg-10">
                <div className="sec-t text-center">
                  <h2 className="section-heading">
                    Trending Collections
                  </h2>
                  {/* <div className="track-select f-right ">
                    <div className="dropdown">
                      <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Last 24 Hours
                        <img src="assets/img/icons/down-c.svg" alt="down-c" />
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#"> Last 24 Hours</a></li>
                        <li><a className="dropdown-item" href="#"> Last 7 Days</a></li>
                        <li><a className="dropdown-item" href="#"> Last 30 Days</a></li>
                      </ul>
                    </div>

                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 cont-top-space">
              <div className="tranding-table">
                <div className="table-responsive-lg">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="text-left">
                          <h5>Collections</h5>
                        </th>
                        <th scope="col">
                          <h5>Floor</h5>
                        </th>
                        <th scope="col">
                          <h5>
                            <span> 24h%</span>
                          </h5>
                        </th>
                        <th scope="col">
                          <h5> <span>7d% </span></h5>
                        </th>
                        <th scope="col">
                          <h5>Owners</h5>
                        </th>
                        <th scope="col">
                          <h5>Volume</h5>
                        </th>
                        <th scope="col">
                          <h5>1d Volume</h5>
                        </th>
                        {/* <th scope="col">
                          <h5>Watchlist</h5>
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {
                        collectionList.map((data, key) => (
                          <tr key={key}>
                            <td>
                              <div className="table-f flex-d">
                                <span>{key + 1}. </span>
                                <div className="flex-d">
                                  {
                                    collectionMetadataList.get(data)?.icon != undefined ?
                                      <img src={collectionMetadataList.get(data).icon} alt="Icon" /> :
                                      <img src="assets/img/icons/Near.png" alt="Near" />
                                  }
                                  <p>{collectionMetadataList.get(data) != undefined ? collectionMetadataList.get(data).name : data}</p>

                                </div>
                              </div>
                            </td>
                            <td>
                              {trendingData[data]?.floor_price}
                            </td>
                            <td>
                              <span className={trendingData[data].floor_price >= trendingData[data].floor_price_24 ? "success-c" : "danger-c"}>
                                {trendingData[data].floor_price >= trendingData[data].floor_price_24 ? <img src="assets/img/icons/ca-up.svg" alt="up" /> : <img src="assets/img/icons/ca-down.svg" alt="down" />}

                                {trendingData[data]?.floor_price_24 == 0 ? '-' : Math.floor((trendingData[data]?.floor_price as number) / (trendingData[data]?.floor_price_24 as number) * 100)}
                              </span>
                            </td>
                            <td>
                              <span className={trendingData[data].floor_price >= trendingData[data].floor_price_7 ? "success-c" : "danger-c"}>
                                {trendingData[data].floor_price >= trendingData[data].floor_price_7 ? <img src="assets/img/icons/ca-up.svg" alt="up" /> : <img src="assets/img/icons/ca-down.svg" alt="down" />}
                                {trendingData[data]?.floor_price_7 == 0 ? '-' : Math.floor((trendingData[data]?.floor_price as number) / (trendingData[data]?.floor_price_7 as number) * 100)}
                              </span>
                            </td>
                            <td>
                              {trendingData[data]?.total_owners}
                            </td>
                            <td>
                              <img src="assets/img/icons/volume.svg" alt="volume" />
                              {Math.floor(trendingData[data]?.total_volume)}
                            </td>
                            <td>
                              {trendingData[data]?.day_volume}
                            </td>
                            {/* <td>
                              <button type="button" className="star-btn">
                              </button>
                            </td> */}
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                {/* <div className="text-center">
                                    <div className="range-btn d-flex justify-content-center">
                                        <button type="button" className="btn  h-48 cmn-bor-btn  btn-1  border-p2 p2-c ">10 - 20</button>
                                        <button type="button" className="btn  h-48 cmn-bor-btn  btn-2 active  border-p2 p2-c  ml-20">20 - 30</button>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="partner-wrapper sec-padding-top">
          <div className="container">
            <div className="col-md-12">
              <div className="sec-t text-center">
                <h2 className="section-heading">
                  Staking Partners
                </h2>
              </div>
              <div className="partner-slider-wrapper position-relative text-center cont-top-space">
                <div className="partner-carousel position-relative">
                  <div className="partner-single">
                    <a href="#" className="image-3">
                      <img className="" src="assets/img/slider/partner3.png" alt="partner1" />
                    </a>

                  </div>
                  <div className="partner-single">
                    <a href="#" className="image-2"> <img className="" src="assets/img/slider/partner1.png" alt="partner1" /></a>
                  </div>
                  <div className="partner-single">
                    <a href="#" className="image-1">
                      <img className="" src="assets/img/slider/partner2.png" alt="partner1" />
                    </a>
                  </div>


                </div>
                <div className="row justify-content-center g-0">
                  <div className="col-xl-7 col-lg-9 col-md-11 text-center">
                    <div className="partnet-s-title">
                      <h3 className="t-30 white-c">
                        Bounty HunterSpace Guild
                      </h3>
                      <p className="t-16 neutral-c">
                        Bounty HunterSpace Guild is a collection of 5555 generate beauty hunters inspired by <br />the greatest scifi universe on the planet. Each is created through a multitude of <br />moduler parts so that no two bounty
                        hunters look the same.
                      </p>
                    </div>
                    <div className="button-nav d-flex justify-content-center">
                      <button type="button" className="button-prev mr-15">
                        <i className="fa-solid fa-arrow-left-long"></i>
                      </button>
                      <button type="button" className="button-next">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="h-circle">
            <img src="assets/img/vector/h-circle.png" alt="" />
          </div>
        </div>

        <div className="home-vect-abs v-bottom">
          <img src="assets/img/vector/home-b.png" alt="home" loading="lazy" />
        </div>
      </main>

    </>

  )
}

export default Home
