import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <nav 
        style={{backgroundColor: '#ffffff'}}>
        <div>
          <div className="row w-100">
            <div className="col-3 input-group ml-4 flex-row">
              <input style={{fontSize: 14}} type="text" className="form-control" placeholder="Alamat Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-dark" style={{borderRadius: 0, fontSize: 14}} type="button">Langganan</button>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <a className="text-dark" href="https://www.facebook.com/carrefour.indonesia" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook-f fa-lg mx-5"></i></a>
              <a className="text-dark" href="https://twitter.com/Transmart_IND" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter fa-lg mx-5"></i></a>
              <a className="text-dark" href="https://www.instagram.com/transmartcarrefour/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram fa-lg mx-5"></i></a>
              <a className="text-dark" href="https://www.youtube.com/user/carrefourindonesia" target="_blank" rel="noopener noreferrer" ><i className="fab fa-youtube fa-lg mx-5"></i></a>
            </div> 
          </div>
          
          {/* INFORMASI PERUSAHAAN  */}
            <div style={{fontSize: 14}} className="d-flex justify-content-center mt-5">
              <div className="row w-75">
                <div className="col justify-content-center">
                  <ul style={{listStyle: 'none'}}>
                    <li>
                      <Link style={{textDecoration: 'none', color: '#000000'}} to="/">
                      <i className="fas fa-home"></i> Home 
                      </Link>
                    </li>
                    <li>
                      <Link style={{textDecoration: 'none', color: '#000000'}} to="/tentang">
                      <i className="fas fa-building"></i> Tentang Perusahaan
                      </Link>
                    </li>
                  </ul>
                </div>
              <div className="col justify-content-center border-left border-right">
                <ul style={{listStyle: 'none'}}>
                  <li>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="/layanan">
                    <i className="fas fa-user-alt"></i> Layanan
                    </Link>
                  </li>
                  <li>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="/kebijakanprivasi">
                    <i className="fas fa-gavel"></i> Kebijakan Privasi
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col justify-content-center border-left border-right">
                <ul style={{listStyle: 'none'}}> 
                  <li>
                    <Link style={{textDecoration: 'none', color: '#000000'}} to="/voucher">
                    <i className="fab fa-cc-apple-pay"></i> Voucher Transmart
                    </Link>
                  </li>
                  <li>
                    <a style={{textDecoration: 'none', color: '#000000'}} href="https://www.kalibrr.com/c/trans-retail-indonesia/jobs"
                    target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-briefcase"></i> Karir
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col justify-content-center">
              <ul style={{listStyle: 'none'}}>
                <li>
                  <Link style={{textDecoration: 'none', color: '#000000'}} to="/contact">
                  <i className="fas fa-phone"></i> Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link style={{textDecoration: 'none', color: '#000000'}} to="/saran">
                  <i className="fas fa-question"></i> Saran dan Pertanyaan
                  </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
      {/* TENANT MITRA */}
          <div className="d-flex justify-content-center my-2">
            <a href="http://www.transstudiobandung.com" target="_blank" rel="noopener noreferrer">
              <img src="assets/transstudiomini.jpg" alt="transstudiomini" height="70"/>
            </a>
            <a href="http://www.transstudiobandung.com" target="_blank" rel="noopener noreferrer">
              <img src="assets/mami.jpg" alt="mami" height="70"/> 
            </a>
            <Link to="/cinema" target="_blank">
              <img src="assets/cinematc.jpg" alt="cinemaxxi" height="70"/>
            </Link>
            <Link to="/transliving" target="_blank">
              <img src="assets/living.jpg" alt="transliving" height="70"/>
            </Link>
            <a href="https://www.bankmega.com" target="_blank" rel="noopener noreferrer">
              <img src="assets/mega.jpg" alt="bankmega" height="70"/>
            </a>
            <a href="http://www.megasyariah.co.id" target="_blank" rel="noopener noreferrer">
              <img src="assets/megasyariah.jpg" alt="bankmegasyariah" height="70"/>
            </a>
            <Link to="/promoelektronik" target="_blank">
              <img src="assets/elecpro.jpg" alt="electronicpro" height="70"/>
            </Link>
            <Link to="/promoelektronik" target="_blank">
              < img src="assets/TRANSH.jpg" alt="transhello" height="70"/>
            </Link>
            <Link to="/breadshop" target="_blank">
              <img src="assets/bread.jpg" alt="breadshop" height="70"/>
            </Link>
            
          </div>
        </div>
      {/* BORDER TRANSRETAIL */}
        <div className="d-flex justify-content-center">
          <div 
            style={{width: '95%'}} 
            className="border-top mb-5 pt-3 d-flex flex-row"
          >
            <div className="row w-100">
              <div className="col-lg-3 col-md-6" style={{fontSize: 11}}>© 2018 Trans Retail Indonesia - Transmart Carrefour</div>
              <div className="col-lg-3 offset-lg-6 col-md-6 text-justify" style={{fontSize: 11}}>
              <i className="fas fa-briefcase"></i> Head Office : Jalan Lebak Bulus Raya No.8, RT.1/RW.10, Pondok Pinang, Kebayoran Lama, RT.1/RW.10, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310
              </div>
            </div> 
          </div>
        </div>
      </nav>
      
      <div className="fixed-bottom p-1" style={{backgroundColor: '#e21628'}}>
        <div className="text-white d-flex justify-content-center text-center" style={{fontSize: 12}} target="_blank" name="shop/layanan_antar/"> Dapatkan Tambahan Diskon 10% dengan Menggunakan Kartu Kredit Bank Mega, dan Tambahan Diskon 5% dengan Menggunakan Kartu Debit Bank Mega setiap Belanja Apa Saja di Transmart Carrefour
        </div>
      </div>
    </div>
  )
}

export default Footer
