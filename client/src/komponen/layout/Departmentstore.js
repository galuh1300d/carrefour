import React, { Component } from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.css';


class Departmentstore extends Component {

  state = {
    open: false,
    gambar: '',
    value: 'deptstore'
  }

  change = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    const settings = {
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
      ]
    }
    return (
      <div>
      <h3 className='d-flex justify-content-center my-5'>
        Department Store
      </h3>
      <div className="d-flex justify-content-center">
        <div className="w-75 mt-3">
          <p className='text-justify'>
            Cempaka Putih, Cilandak, Central Park, Ambassador,
            Dewi Sartika, Bogor Yasmin,Resinda Karawang, Buah Batu Bandung, TSM Bandung, Living Plaza Cirebon,Tegal, Semarang Setiabudi, Maguwo Yogyakarta, Rungkut Surabaya, 
            Lenmmarc Surabaya, Mataram, Daun Village Balikpapan, Padang Sulaiman Pekanbaru, Star Square, Manado, Palembang City Center, Kawanua Manado, Solo Pabelan, Cirebon Cipto, Lampung, Sidoarjo, Kubu Raya Kalimantan Barat dan Duta Mall Banjarmasin
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <img src="/assets/BEAUTY FAIR III 2018 UPDATE.jpg" alt=""/>
      </div>
      <div>
        <div className="d-flex justify-content-center mt-3">
          <div className="w-75">
            <p className='text-justify'>
              1. Periode : 23 November - 9 Desember 2018
            </p>
            <p className="text-justify font-weight-bold">
              Berlaku di :
            </p>
            <p className="text-justify">
              Cempaka Putih, Central Park, Star Square, Trans Studio, Lebak Bulus, Cilandak, Ambassador, Resinda, Tegal, Buah Batu, Khotib Sulaiman, Dewi Sartika, Bogor, Yasmin, Graha Bintaro, Cipto Cirebon, Palembang City Center, Setiabudi Srondol, Pabelan Sukoharjo Solo, Duta Mall Banjarmasin, Kawanua, Soekarno Hatta, Lampung, Sidoarjo, Pontianak, Daun Village, Lenmarc, Maguwo Yogyakarta, Kupang, Living Plaza Cirebon, Ngagel Surabaya,Mataram 
            </p>
            <p className='text-justify'>
            2. Daftar disini
            </p>
          </div>
        </div>
      </div>

        {this.state.open && (
            <Lightbox
            mainSrc={this.state.gambar}
            onCloseRequest={() => this.setState({ open: false })}
            imagePadding='50'
          />
        )}
        <div className="d-flex justify-content-center my-3">
          <h4>
           Katalog Department Store
          </h4>
        </div>
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
        <Slider {...settings}>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/deptstore/dep1.jpg' 
            })}
          >
              <img 
                style={{marginRight: 'auto', marginLeft: 'auto'}} 
                src={'/assets/katalog/deptstore/dep1.jpg'} 
                alt="deptstore1" 
                height="500" 
              />
          </div>
          <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/deptstore/dep2.jpg' 
          })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/deptstore/dep2.jpg'} 
              alt="deptstore2" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/deptstore/dep3.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/deptstore/dep3.jpg'} 
              alt="deptstore3" 
              height="500" />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/deptstore/dep4.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/deptstore/dep4.jpg'} 
              alt="deptstore4" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/deptstore/dep5.jpg' 
            })}
          >
            <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/deptstore/dep5.jpg'}  
            alt="deptstore5" 
            height="500" />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-3 mb-5">
          <a href="/assets/pdf/deptstore.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
        </div>
      </div>

    </div>
    )
  }
}

export default Departmentstore

