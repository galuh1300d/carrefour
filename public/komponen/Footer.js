const Footer = () => {
  return (
    <div>
      <nav 
        style={{backgroundColor: '#ffffff'}}>
        <div>
          <div className="row w-100">
            <div className="col-3 input-group ml-4 d-flex flex-row">
              <input style={{fontSize: 14}} type="text" className="form-control" placeholder="Alamat Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-dark" style={{borderRadius: 0, fontSize: 14}} type="button">Langganan</button>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <a className="text-dark" href="https://www.facebook.com/carrefour.indonesia" target="_blank"><i className="fab fa-facebook-f fa-lg mx-5"></i></a>
              <a className="text-dark" href="https://twitter.com/Transmart_IND" target="_blank"><i className="fab fa-twitter fa-lg mx-5"></i></a>
              <a className="text-dark" href="https://www.instagram.com/transmartcarrefour/" target="_blank"><i className="fab fa-instagram fa-lg mx-5"></i></a>
              <a className="text-dark" href="https://www.youtube.com/user/carrefourindonesia" target="_blank"><i className="fab fa-youtube fa-lg mx-5"></i></a>
            </div> 
          </div>
          
          {/* INFORMASI PERUSAHAAN  */}
            <div style={{fontSize: 14}} className="d-flex justify-content-center mt-5">
              <div className="row w-75">
                <div className="col justify-content-center">
                  <ul style={{listStyle: 'none'}}>
                    <li>
                      <a style={{textDecoration: 'none', color: '#000000'}} href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a style={{textDecoration: 'none', color: '#000000'}} href="/tentang">
                        Tentang Perusahaan
                      </a>
                    </li>
                  </ul>
                </div>
              <div className="col justify-content-center border-left border-right">
                <ul style={{listStyle: 'none'}}>
                  <li>
                    <a style={{textDecoration: 'none', color: '#000000'}} href="/layanan">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a style={{textDecoration: 'none', color: '#000000'}} href="/kebijakanprivasi">
                    Kebijakan Privasi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col justify-content-center border-left border-right">
                <ul style={{listStyle: 'none'}}> 
                  <li>
                    <a style={{textDecoration: 'none', color: '#000000'}} href="/voucher">
                      Voucher Transmart
                    </a>
                  </li>
                  <li>
                    <a style={{textDecoration: 'none', color: '#000000'}} href="https://www.kalibrr.com/c/trans-retail-indonesia/jobs"
                    target="_blank">
                      Karir
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col justify-content-center">
              <ul style={{listStyle: 'none'}}>
                <li>
                  <a style={{textDecoration: 'none', color: '#000000'}} href="/contact">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a style={{textDecoration: 'none', color: '#000000'}} href="/saran">
                    Saran dan Pertanyaan
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
      {/* TENANT MITRA */}
          <div className="d-flex justify-content-center my-2">
            <a href="http://www.transstudiobandung.com" target="_blank">
              <img src="/assets/transstudiomini.jpg" alt="transstudiomini" height="70"/>
            </a>
            <a href="http://www.transstudiobandung.com" target="_blank">
              <img src="/assets/mami.jpg" alt="mami" height="70"/> 
            </a>
            <a href="/cinema" target="_blank">
              <img src="/assets/cinematc.jpg" alt="cinemaxxi" height="70"/>
            </a>
            <a href="/transliving" target="_blank">
              <img src="/assets/living.jpg" alt="transliving" height="70"/>
            </a>
            <a href="https://www.bankmega.com" target="_blank">
              <img src="/assets/mega.jpg" alt="bankmega" height="70"/>
            </a>
            <a href="http://www.megasyariah.co.id" target="_blank">
              <img src="/assets/megasyariah.jpg" alt="bankmegasyariah" height="70"/>
            </a>
            <a href="/promoelektronik" target="_blank">
              <img src="/assets/elecpro.jpg" alt="electronicpro" height="70"/>
            </a>
            <a href="/promoelektronik" target="_blank">
              < img src="/assets/TRANSH.jpg" alt="transhello" height="70"/>
            </a>
            <a href="/breadshop" target="_blank">
              <img src="/assets/bread.jpg" alt="breadshop" height="70"/>
            </a>
            
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
              <i class="fas fa-briefcase"></i> Head Office : Jalan Lebak Bulus Raya No.8, RT.1/RW.10, Pondok Pinang, Kebayoran Lama, RT.1/RW.10, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310
              </div>
            </div> 
          </div>
        </div>
      </nav>
      
      <div className="fixed-bottom p-1" style={{backgroundColor: '#e21628'}}>
        <di className="text-white d-flex justify-content-center text-center" style={{fontSize: 12}} target="_blank" name="shop/layanan_antar/"> Dapatkan Tambahan Diskon 10% dengan Menggunakan Kartu Kredit Bank Mega, dan Tambahan Diskon 5% dengan Menggunakan Kartu Debit Bank Mega setiap Belanja Apa Saja di Transmart Carrefour
        </di>
      </div>
    </div>
  )
}

ReactDOM.render(<Footer />, document.getElementById('footer'))