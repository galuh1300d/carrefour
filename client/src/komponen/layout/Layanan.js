import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Layanan = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <div className="card-deck w-75">
          <div className="card">
            <img className="card-img-top" src="/assets/MegaZip.jpg" alt="MegaZIP"/>
            <div className="card-body">
              <h5 className="card-title">MegaZIP</h5>
              <p className="card-text text-justify">MegaZIP adalah pembiayaan cicilan tanpa kartu kredit untuk barang elektronik, furniture, komputer, gadget dan sepeda. Pengajuannya cukup dengan fotokopi KTP.</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-danger btn-sm btn-block btnBiru">
              <Link className="linkBiru" style={{color: '#dc3545'}} to="/promoelektronik">
              Selengkapnya
              </Link>
            </button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/assets/Blibli21.jpg" alt="BlibliCarrefour"/>
            <div className="card-body">
              <h5 className="card-title">Blibli</h5>
              <p className="card-text text-justify">Blibli adalah pelopor mall online terbesar&amp;terlengkap di Indonesia dan memiliki beragam kategori pilihan untuk memenuhi kebutuhan keseharian Anda, mulai dari kebutuhan lifestyle, otomotif, hobi &amp; olahraga, dan kebutuhan rumah tangga. Blibli juga menghadirkan berbagai Smartphone terbaru dan terpopuler di kategori Handphone &amp; Gadget.</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-primary btn-sm btn-block btnBiru">
              <a className="linkBiru" style={{color: '#007bff'}} href="https://www.blibli.com/promosi/hta-transhello-on-blibli">
              Selengkapnya
              </a>
            </button>
          </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="assets/Honestbee.jpg" alt="HonestBee"/>
            <div className="card-body">
              <h5 className="card-title">Honest Bee</h5>
              <p className="card-text text-justify">Nikmati tujuan terlengkap yang menjual semua merk resmi ternama smartphone, tablet, camera, laptop, printer, segala macam aksesoris dan produk gadget lainnya di TRANShello. Proses pembayaran mudah dan tersedia program cicilan dengan kartu kredit bunga sampai 0% maupun tanpa kartu kredit.</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-warning btn-sm btn-block btnBiru">
              <a className="linkBiru" style={{color: '#ffc107'}} href="https://id.honestbee.com/en/groceries/stores/transmart-carrefour">
              Selengkapnya
              </a>
            </button>
          </div>
        </div>
      </div>
      </div>



      <div className="d-flex justify-content-center my-5">
        <div className="card-deck w-75">
          <div className="card">
            <img className="card-img-top" src="assets/HappyFresh.jpg" alt="HappyFresh"/>
            <div className="card-body">
              <h5 className="card-title">Happy Fresh</h5>
              <p className="card-text text-justify">HappyFresh adalah aplikasi mobile untuk berbelanja kebutuhan sehari-hari yang ditujukan bagi masyarakat yang memiliki keterbatasan waktu untuk berbelanja. Kini hadir di gerai Transmart Carrefour MT Haryono, Puri Indah, Blok M, BSD, Lebak Bulus, Duta Merlin, Sunter, Bintaro, X Mall, Taman Mini dan ITC Depok.</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-success btn-sm btn-block btnBiru">
              <a className="linkBiru" style={{color: '#28a745'}} href="https://www.happyfresh.id/stores/carrefour/locations/401">
              Selengkapnya
              </a>
            </button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/assets/TRANShello.jpg" alt="Transhello"/>
            <div className="card-body">
              <h5 className="card-title">TransHello</h5>
              <p className="card-text text-justify">Nikmati tujuan terlengkap yang menjual semua merk resmi ternama smartphone, tablet, camera, laptop, printer, segala macam aksesoris dan produk gadget lainnya di TRANShello. Proses pembayaran mudah dan tersedia program cicilan dengan kartu kredit bunga sampai 0% maupun tanpa kartu kredit.</p>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-outline-danger btn-sm btn-block btnBiru">
            <Link className="linkBiru" style={{color: '#dc3545'}} to="/promoelektronik">
            Selengkapnya
            </Link></button>
            </div>
          </div>
          <div className="card">
            <img style={{width: 130}} className="card-img-top align-self-center" src="assets/pulsa.png" alt="Pulsa"/>
            <div className="card-body">
              <h5 className="card-title">Pulsa di Transmart Carrefour</h5>
              <p className="card-text text-justify">Kini Anda dapat menikmati kemudahan mengisi pulsa semudah Anda berbelanja di Carrefour karena sekarang ISI PULSA selalu tersedia di setiap kasir yang ada di Carrefour. Mudah,Lengkap dan Cepat.</p>
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
    </div>
  
  )
}

export default Layanan
