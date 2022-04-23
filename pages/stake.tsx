import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Mint: NextPage = () => {
  return (
    <main className="stking-page pt-160 fix">
        <div className="home-vect-abs v-top">
            <img src="assets/img/vector/stakin-v.png" alt="stakin" loading="lazy"/>
        </div>
        <div className="stking-hero-area mb-60">
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-xl-8 col-lg-11 col-md-12">
                        <div className="top-staking">
                            <div className="stking-icon pb-20">
                                <img src="assets/img/staking/stakin-l.png" alt="powerded" loading="lazy"/>
                            </div>
                            <div className="hero-description text-center">
                                <div className="hero-subs-t d-flex align-items-center justify-content-center">
                                    <h3 className="t-18-b white-c mr-8">
                                        <span>Terraspaces</span>
                                    </h3>
                                    <img src="assets/img/icons/verified.svg" width="20" height="20" alt="verified"/>
                                </div>
                                <div className="pt-1 hero-subs-s-title d-flex align-items-center justify-content-center">
                                    <p className="t-14 neutral-c mr-4">
                                        Terraspaces.Near
                                    </p>
                                    <img src="assets/img/icons/chain.svg" width="20" height="20" alt="verified"/>
                                </div>
                                <div className="hero-d-p">
                                    <p className="t-16 neutral-c">
                                        Generative dystopian NFTs meet utility via proof-of-staking to access analytics dashboard. <br/>Genesis collection of 777 abstract #NFTs. Powered by #NEARProtocol
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="count-parent">
                            <div className="count-s">
                                <div className="single-text text-center">
                                    <p className="t-14 linr-h-150 neutral-c">
                                        Floor Price
                                    </p>
                                    <h3 className="t-20 white-c pt-1">
                                        <span className="counter">100</span>
                                        <span>N</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="count-s">
                                <div className="single-text text-center">
                                    <p className="t-14 linr-h-150 neutral-c">
                                        Listed
                                    </p>
                                    <h3 className="t-20 white-c pt-1">
                                        <span className="counter">27</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="count-s">
                                <div className="single-text sm-berore text-center">
                                    <p className="t-14 linr-h-150 neutral-c">
                                        Total Staked
                                    </p>
                                    <h3 className="t-20 white-c pt-1">
                                        <span className="counter">121</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="count-s">
                                <div className="single-text text-center">
                                    <p className="t-14 linr-h-150 neutral-c">
                                        Owned BY
                                    </p>
                                    <h3 className="t-20 white-c pt-1">
                                        <span className="counter">8</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="count-s">
                                <div className="single-text text-center">
                                    <p className="t-14 linr-h-150 neutral-c">
                                        Total Volume
                                    </p>
                                    <h3 className="t-20 white-c pt-1">
                                        <span className="counter">100</span>
                                        <span>N</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="stake-area">
            <div className="container">
                <div className="stake-wrapper">
                    <div className="navs-area">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="t-20 nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Owned</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link t-20" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Stake</button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="owned-r">
                                <div className="stake-btn stake-btn-abs d-inline-block ">
                                    <button className="cmn-btn-1 f-18 redius-12">
                                        <span> Stake All </span>
                                    </button>
                                </div>

                                <div className="navs-title ">
                                    <div className="d-flex align-items-center mb-12">
                                        <div className="stking-icon mr-12">
                                            <img src="assets/img/staking/stake.png" alt="stake" loading="lazy"/>
                                        </div>
                                        <div className="hero-subs-t d-flex align-items-center">
                                            <h3 className="t-20 white-c mr-8">
                                                <span>Terraspaces</span>
                                            </h3>
                                            <img src="assets/img/icons/verified.svg" width="20" height="20" alt="verified"/>
                                        </div>
                                    </div>
                                    <div className="floor-c d-flex">
                                        <button type="button" className="floor-btn mr-16">Floor : 100N</button>
                                        <button type="button" className="floor-btn">Total Floor Value : 800N</button>
                                    </div>
                                </div>
                                <div className="my-22 hr-line"> </div>
                                <div className="t-card-wrapper">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake1.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #11. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card stake-bt">
                                                <div className="t-card-img  mb-20">
                                                    <img className="stake-img" src="assets/img/staking/t-stake2.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #21. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake3.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #43. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake4.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #131. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake6.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #256. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake6.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #169. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake3.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #119. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake1.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #11. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Stake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="owned-r">
                                <div className="stake-btn stake-btn-abs d-inline-block ">
                                    <a href="" className="cmn-btn-1 f-18 redius-12">
                                        <span> Unstake All</span>
                                    </a>
                                </div>

                                <div className="navs-title ">
                                    <div className="d-flex align-items-center mb-12">
                                        <div className="stking-icon mr-12">
                                            <img src="assets/img/staking/stake.png" alt="stake" loading="lazy"/>
                                        </div>
                                        <div className="hero-subs-t d-flex align-items-center">
                                            <h3 className="t-20 white-c mr-8">
                                                <span>Terraspaces</span>
                                            </h3>
                                            <img src="assets/img/icons/verified.svg" width="20" height="20" alt="verified"/>
                                        </div>
                                    </div>
                                    <div className="floor-c d-flex">
                                        <button type="button" className="floor-btn mr-16">Floor : 100N</button>
                                        <button type="button" className="floor-btn">Total Floor Value : 800N</button>
                                    </div>
                                </div>
                                <div className="my-22 hr-line"> </div>
                                <div className="t-card-wrapper">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake1.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #11. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card stake-bt">
                                                <div className="t-card-img  mb-20">
                                                    <img className="stake-img" src="assets/img/staking/t-stake2.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #21. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake3.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #43. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span>Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake4.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #131. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake6.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #256. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span>Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake6.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #169. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span>Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake3.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #119. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-60">
                                            <div className="t-card">
                                                <div className="t-card-img  mb-12">
                                                    <img className="stake-img" src="assets/img/staking/t-stake1.png" alt="staking" loading="lazy"/>
                                                </div>
                                                <div className="t-card-title">
                                                    <h5 className="t-18-b white-c">Terraspaces #11. </h5>
                                                </div>
                                                <div className="stake-s-v mt-30">
                                                    <div className="d-flex align-items-center mb-12">
                                                        <div className="stking-icon mr-12">
                                                            <img src="assets/img/staking/stake-s.png" alt="stake" loading="lazy"/>
                                                        </div>
                                                        <div className="hero-subs-t d-flex align-items-center">
                                                            <h3 className="t-14 neutral-c  mr-8">
                                                                <span>Terraspaces</span>
                                                            </h3>
                                                            <img src="assets/img/icons/verified.svg" alt="verified"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stake-btn mt-20">
                                                    <a href="" className="cmn-btn-1 h-48 f-18 redius-12">
                                                        <span> Unstake</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Mint
