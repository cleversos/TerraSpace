import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Mint: NextPage = () => {
  return (
    <main className="mint-page position-relative fix">
        <section className="mint-area pt-100">
            <div className="container">
                <div className="mint-wrapper">
                    <div className="row f-row-reverse ">
                        <div className="col-lg-5 col-xl-5 d-flex align-items-center pb-30">
                            <div className="mint-info">
                                <div className="mint-t pb-25">
                                    <h3 className="t-30 white-c">Mint NFT</h3>
                                </div>
                                <div className="mint-c pb-20">
                                    <p className="t-16">
                                        Generative dystopian NFTs meet utility via proof-of-staking to access analytics dashboard. Genesis collection of 777 abstract #NFTs. Powered by #NEARProtocol
                                    </p>
                                </div>
                                <div className="mint-c pb-20">
                                    <h5 className="t-20">
                                        First Landmark Project on NEAR.
                                    </h5>
                                </div>

                                <div className="mint-c pb-20">
                                    <p className="t-16">
                                        WL Mint Price: <a href="#">Check Discord</a>

                                    </p>
                                    <p className="t-16"> Mint Price: 15N</p>
                                </div>
                                <div className="mint-c ">
                                    <h5 className="t-20">
                                        0/777 Minted
                                    </h5>
                                </div>
                                <div className="d-inline-block pt-45">
                                    <button className="cmn-btn redius-12 f-18">
                                        <span>Connect Wallet</span>
                                        <img src="assets/img/icons/Wallet1.svg" alt="wallet"/>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7 col-xl-6 offset-xl-1  text-center pb-30">
                            <div className="stak-img text-center">
                                <img src="assets/img/mint/mint.png" alt="mint" loading="lazy"/>
                                <div className="stak-img-abs">
                                    <img src="assets/img/vector/vector2.png" alt="Vector" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vector-abs">
                <img src="assets/img/vector/Vector.png" alt="Vector" loading="lazy"/>
            </div>
        </section>
    </main>
  )
}

export default Mint
