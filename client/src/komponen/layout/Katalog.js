import React, { Component } from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.css';
import KatalogPlus from './KatalogPlus';

class Katalog extends Component {
  
  state = {
    open: false,
    gambar: '',
    value: 'SUMATERA'
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
            slidesToShow: 1
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
      {this.state.open && (
        <Lightbox
          mainSrc={this.state.gambar}
          onCloseRequest={() => this.setState({ open: false })}
          imagePadding='50'
        />
      )}
      <h3 className="d-flex justify-content-center my-5">Katalog Core Biweekly</h3>
      <div className="d-flex justify-content-center">
        <select onChange={this.change} value={this.state.value} className="form-control dropdown border border-danger bg-light mb-5 w-50">

          <option value='SUMATERA'>
            &nbsp;&nbsp;&nbsp; SUMATERA
          </option>
          <option value='JAWABALI'>
            &nbsp;&nbsp;&nbsp;JAWA &amp; BALI
          </option>
          <option value='KALIMANTAN'>
            &nbsp;&nbsp;&nbsp;KALIMANTAN 
          </option>
          <option value='SULAWESI'>
            &nbsp;&nbsp;&nbsp;SULAWESI
          </option>
          <option value='MATARAM'>
            &nbsp;&nbsp;&nbsp;MATARAM
          </option>
        </select>
      </div>

        {/* KATALOG SUMATERA CORE */}
      {this.state.value === 'SUMATERA' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
        <Slider {...settings}>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/sumatera/biweekly1.jpg' 
            })}
          >
              <img 
                style={{marginRight: 'auto', marginLeft: 'auto'}} 
                src={'/assets/katalog/core/sumatera/biweekly1.jpg'} 
                alt="biweekly1" 
                height="500" 
              />
          </div>
          <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/sumatera/biweekly2.jpg' 
          })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/sumatera/biweekly2.jpg'} 
              alt="biweekly2" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/sumatera/biweekly3.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/sumatera/biweekly3.jpg'} 
              alt="biweekly3" 
              height="500" />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/sumatera/biweekly4.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/sumatera/biweekly4.jpg'} 
              alt="biweekly4" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/sumatera/biweekly4.jpg' 
            })}
          >
            <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/sumatera/biweekly4.jpg'}  
            alt="biweekly5" 
            height="500" />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-3 mb-5">
          <a href="/assets/pdf/sumatera.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
        </div>
      </div>}
        
        {/* KATALOG JAWA BALI CORE */}
      {this.state.value === 'JAWABALI' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
        <Slider {...settings}>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/jawabali/biweekly1.jpg' 
            })}
          >
              <img 
                style={{marginRight: 'auto', marginLeft: 'auto'}} 
                src={'/assets/katalog/core/jawabali/biweekly1.jpg'} 
                alt="biweekly1" 
                height="500" 
              />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/jawabali/biweekly2.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/jawabali/biweekly2.jpg'} 
              alt="biweekly2" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/jawabali/biweekly3.jpg'
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/jawabali/biweekly3.jpg'} 
              alt="biweekly3" 
              height="500" />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/jawabali/biweekly4.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/jawabali/biweekly4.jpg'} 
              alt="biweekly4" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/core/jawabali/biweekly5.jpg' 
            })}
          >
            <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/jawabali/biweekly5.jpg'}  
            alt="biweekly5" 
            height="500" />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-3 mb-5">
          <a href="/assets/pdf/jawa.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
        </div>
      </div>}
        
      {/* KATALOG KALIMANTAN CORE */}
      {this.state.value === 'KALIMANTAN' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
      <Slider {...settings}>
      <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/kalimantan/biweekly1.jpg' 
          })}
        >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/kalimantan/biweekly1.jpg'} 
              alt="biweekly1" 
              height="500" 
            />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/kalimantan/biweekly2.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/kalimantan/biweekly2.jpg'} 
            alt="biweekly2" 
            height="500" 
          />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/kalimantan/biweekly3.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/kalimantan/biweekly3.jpg'} 
            alt="biweekly3" 
            height="500" />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/kalimantan/biweekly4.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/kalimantan/biweekly4.jpg'} 
            alt="biweekly4" 
            height="500" 
          />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/kalimantan/biweekly5.jpg' 
          })}
        >
          <img 
          style={{marginRight: 'auto', marginLeft: 'auto'}} 
          src={'/assets/katalog/core/kalimantan/biweekly5.jpg'}  
          alt="biweekly5" 
          height="500" />
        </div>
      </Slider>
      <div className="d-flex justify-content-center mt-3 mb-5">
        <a href="/assets/pdf/kalimantan.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
      </div>
    </div>}

      {/* KATALOG SULAWESI CORE */}
      {this.state.value === 'SULAWESI' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
      <Slider {...settings}>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/sulawesi/biweekly1.jpg' 
          })}
        >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/sulawesi/biweekly1.jpg'} 
              alt="biweekly1" 
              height="500" 
            />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/sulawesi/biweekly2.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/sulawesi/biweekly2.jpg'} 
            alt="biweekly2" 
            height="500" 
          />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/sulawesi/biweekly3.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/sulawesi/biweekly3.jpg'} 
            alt="biweekly3" 
            height="500" />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/sulawesi/biweekly4.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/sulawesi/biweekly4.jpg'} 
            alt="biweekly4" 
            height="500" 
          />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/sulawesi/biweekly5.jpg' 
          })}
        >
          <img 
          style={{marginRight: 'auto', marginLeft: 'auto'}} 
          src={'/assets/katalog/core/sulawesi/biweekly5.jpg'}  
          alt="biweekly5" 
          height="500" />
        </div>
      </Slider>
      <div className="d-flex justify-content-center mt-3 mb-5">
        <a href="/assets/pdf/sulawesi.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
      </div>
    </div>}

      {/* KATALOG MATARAM CORE */}
      {this.state.value === 'MATARAM' &&
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
      <Slider {...settings}>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/mataram/biweekly1.jpg' 
          })}
        >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/core/mataram/biweekly1.jpg'} 
              alt="biweekly1" 
              height="500" 
            />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/mataram/biweekly2.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/mataram/biweekly2.jpg'} 
            alt="biweekly2" 
            height="500" 
          />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/mataram/biweekly3.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/mataram/biweekly3.jpg'} 
            alt="biweekly3" 
            height="500" />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/mataram/biweekly4.jpg' 
          })}
        >
          <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/core/mataram/biweekly4.jpg'} 
            alt="biweekly4" 
            height="500" 
          />
        </div>
        <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/core/mataram/biweekly5.jpg' 
          })}
        >
          <img 
          style={{marginRight: 'auto', marginLeft: 'auto'}} 
          src={'/assets/katalog/core/mataram/biweekly5.jpg'}  
          alt="biweekly5" 
          height="500" />
        </div>
      </Slider>
      <div className="d-flex justify-content-center mt-3 mb-5">
        <a href="/assets/pdf/mataram.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
      </div>
    </div>}
      <KatalogPlus/>
      </div>			
  )
}}

export default Katalog
