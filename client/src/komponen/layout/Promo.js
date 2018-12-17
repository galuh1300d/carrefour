import React from 'react'
import { Link } from 'react-router-dom'

const Promo = () => {
  return (
    // <div>
    //   <div className="d-flex justify-content-center mt-5">
    //     <img src={'/assets/PROMO TRANSMART-11.png'} alt="promotransmart11"/>
    //   </div>
    //   <div className="d-flex flex-row justify-content-center">
    //     <div className="p-3">
    //       <Link to='/promoakhirpekan' target="_blank">
    //         <img src={'/assets/akhir pekan_promo.png'} alt="akhirpekanpromo"/>
    //       </Link>
    //       <b className="d-flex justify-content-center">
    //         <Link to='/promoakhirpekan' target="_blank" >
    //           PROMO AKHIR PEKAN
    //         </Link>
    //       </b>
    //     </div>
    //     <div className="p-3">
    //       <Link to='/promofresh' target="_blank">
    //         <img src={'/assets/ACTION-SPOT-FRESH.jpg'} alt="ActionSpotFresh"/>
    //       </Link>
    //       <Link to='/promofresh' className="d-flex justify-content-center" target="_blank"><b>PROMO FRESH AKHIR PEKAN</b></Link>
    //     </div>
    //     <div className="p-3">
    //       <Link to='/promoedlp' target="_blank">
    //         <img src={'/assets/GROSERI.jpg'} alt="GROSERI.jpg"/>
    //       </Link>
    //       <b className="d-flex justify-content-center"><Link to='/promoedlp' target="_blank">PROMO KEBUTUHAN RUMAH TANGGA</Link></b>
    //     </div>     
    //   </div>
    //   <div className="d-flex flex-row justify-content-center">
    //     <div className="p-3">
    //       <Link to='/promodeptstore' target="_blank">
    //         <img src={'/assets/dept store_promo.png'} alt="dept store_promo.png"/>
    //       </Link>
    //       <b className="d-flex justify-content-center"><Link to='/promodeptstore' target="_blank">PROMO DEPARTMENT STORE</Link></b>
    //     </div>
    //     <div className="p-3">
    //       <Link to='/promoelektronik' target="_blank">
    //         <img src={'/assets/PROMO ELEKTRONIK-01 REV.jpg'} alt="PROMO ELEKTRONIK-01"/>
    //       </Link>
    //       <b className="d-flex justify-content-center"><Link target="_blank" to='/promoelektronik'>PROMO ELEKTRONIK</Link></b>
    //     </div>
    //     <div className="p-3">
    //       <Link to='/promopalingmurah' target="_blank">
    //         <img src={'/assets/Untitled-2-01.jpg'} alt="untitled201"/>
    //       </Link>
    //       <Link className="d-flex justify-content-center" to='/promopalingmurah' target=""><b>PROMO PALING MURAH</b></Link>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div>
      <div className="d-flex justify-content-center my-5">
        <div className="card-deck w-75">
          <div className="card">
            <img style={{width: 135}} className="card-img-top align-self-center pt-4" src="/assets/promoakhirpekan1.jpg" alt="MegaZIP"/>
            <div className="card-body">
              <h5 className="card-title text-center">Promo Akhir Pekan</h5>
              <p className="card-text text-justify"></p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-dark btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: 'black'}} to="/promoakhirpekan">
            Selengkapnya
            </Link>
            </button>
            </div>
          </div>
          <div className="card">
            <img style={{width: 120}} className="card-img-top align-self-center pt-4"  src="/assets/promofresh1.jpg" alt="promofresh"/>
            <div className="card-body">
              <h5 className="card-title text-center">Promo Fresh</h5>
              <p className="card-text text-justify"></p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-dark btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: 'black'}} to="/promofresh">
            Selengkapnya
            </Link>
            </button>
          </div>
          </div>
          <div className="card">
            <img style={{width: 120}} className="card-img-top align-self-center pt-4"  src="assets/promoelektronik1.jpg" alt="HonestBee"/>
            <div className="card-body">
              <h5 className="card-title text-center">Promo Elektronik</h5>
              <p className="card-text text-justify"></p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-dark btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: 'black'}} to="/promoelektronik">
            Selengkapnya
            </Link>
            </button>
          </div>
        </div>
      </div>
      </div>



      <div className="d-flex justify-content-center my-5">
        <div className="card-deck w-75">
          <div className="card">
            <img style={{width: 130,}} className="card-img-top align-self-center pt-4"  src="assets/promodep1.jpg" alt="HappyFresh"/>
            <div className="card-body">
              <h5 className="card-title text-center">Promo Department Store</h5>
              <p className="card-text text-justify"></p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-dark btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: 'black'}} to="/departmentstore">
            Selengkapnya
            </Link>
            </button>
            </div>
          </div>
          <div className="card">
            <img style={{width: 120,}} className="card-img-top align-self-center pt-4"  src="/assets/translivingtc.jpeg" alt="Transhello"/>
            <div className="card-body">
              <h5 className="card-title text-center">Promo Trans Living</h5>
              <p className="card-text text-justify"></p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-dark btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: 'black'}} to="/transliving">
            Selengkapnya
            </Link>
            </button>
            </div>
          </div>
          <div className="card">
            <img style={{width: 130,}} className="card-img-top align-self-center pt-4" src="assets/ilmtc.jpeg" alt="Pulsa"/>
            <div className="card-body">
              <h5 className="card-title text-center">Promo Index Living Mall</h5>
              <p className="card-text text-justify"></p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-dark btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: 'black'}} to="/indexlivingmall">
            Selengkapnya
            </Link>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Promo
