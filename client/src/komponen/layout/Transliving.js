import React, { Component } from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.css';


class Transliving extends Component {

  state = {
    open: false,
    gambar: '',
    value: 'JAWABALI'
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
      <div align="center">

      {this.state.open && (
        <Lightbox
          mainSrc={this.state.gambar}
          onCloseRequest={() => this.setState({ open: false })}
          imagePadding='50'
        />
      )}

      <img src={'/assets/Transliving lebak bulus-02.jpg'} alt="transliving" />
      <div className="d-flex justify-content-center my-2">
        <div className="w-75">
          <p style={{fontSize: 15}}>
            New Choices For Your Home Kini, Transmart Carrefour hadir 
            semakin lengkap dengan pilihan koleksi terbaru furnitur dan dekorasi
            rumah persembahan Trans Living.Dapatkan penawaran terbaik dari kami di lebih dari 60 Gerai Transmart Carrefour.
          </p>
          <p style={{fontSize: 15}}>
            <p className="font-weight-bold">
            Nuansa baru Trans Living di :
            </p>
            Transmart Carrefour Emporium Pluit Mall | Transmart Bogor Yasmin | Carrefour Cempaka Mas | Transmart Gresik Icon Mall | Transmart Ngagel Surabaya 
          </p>
          <div className="d-flex justify-content-center my-5">
          <img src="assets/TRANSLIVING-HOME1.jpg" alt="translivinghome"/>
        </div>
        </div>
      </div>

        {/* GANTI KATALOG TRANS LIVING */}
      <div>
        <h3 className="my-3">
          Katalog Trans Living
        </h3>
      </div>
      <div className="d-flex justify-content-center">
        <select onChange={this.change} value={this.state.value} className="form-control dropdown border border-danger bg-light mb-5 w-50">
          <option value='JAWABALI'>
            &nbsp;&nbsp;&nbsp; JAWA &amp; BALI,MATARAM,KUPANG
          </option>
          <option value='LUARJAWABALI'>
            &nbsp;&nbsp;&nbsp;LUAR JAWA &amp; BALI,MATARAM,KUPANG
          </option>
        </select>
      </div>

      {/* KATALOG TRANSLIVING JAWA BALI*/}
      {this.state.value === 'JAWABALI' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
        <Slider {...settings}>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/jawa/jawa1.jpg' 
            })}
          >
              <img 
                style={{marginRight: 'auto', marginLeft: 'auto'}} 
                src={'/assets/katalog/transliving/jawa/jawa1.jpg'} 
                alt="biweekly1" 
                height="500" 
              />
          </div>
          <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/transliving/jawa/jawa2.jpg' 
          })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/transliving/jawa/jawa2.jpg'} 
              alt="jawa2" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/jawa/jawa3.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/transliving/jawa/jawa3.jpg'} 
              alt="jawa3" 
              height="500" />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/jawa/jawa4.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/transliving/jawa/jawa4.jpg'} 
              alt="jawa4" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/jawa/jawa5.jpg' 
            })}
          >
            <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/transliving/jawa/jawa5.jpg'}  
            alt="jawa5" 
            height="500" />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-3 mb-5">
          <a href="/assets/pdf/jawa.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
        </div>
      </div>}
      
      {/* KATALOG LUAR TRANSLIVING JAWA BALI*/}
      {this.state.value === 'LUARJAWABALI' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
        <Slider {...settings}>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/luarjawabali/luarjawa1.jpg' 
            })}
          >
              <img 
                style={{marginRight: 'auto', marginLeft: 'auto'}} 
                src={'/assets/katalog/transliving/luarjawabali/luarjawa1.jpg'} 
                alt="luarjawa1" 
                height="500" 
              />
          </div>
          <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/transliving/luarjawabali/luarjawa2.jpg' 
          })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/transliving/luarjawabali/luarjawa2.jpg'} 
              alt="luarjawa2" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/luarjawabali/luarjawa3.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/transliving/luarjawabali/luarjawa3.jpg'} 
              alt="luarjawa3" 
              height="500" />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/luarjawabali/luarjawa4.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/transliving/luarjawabali/luarjawa4.jpg'} 
              alt="luarjawa4" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/transliving/luarjawabali/luarjawa5.jpg' 
            })}
          >
            <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/transliving/luarjawabali/luarjawa5.jpg'}  
            alt="luarjawa5" 
            height="500" />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-3 mb-5">
          <a href="/assets/pdf/jawa.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
        </div>
      </div>}

    </div> 
    )
  }
}

export default Transliving
