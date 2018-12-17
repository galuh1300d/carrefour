import React, { Component } from 'react'
import Slider from 'react-slick'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.css';

class IndexLivingMall extends Component {

  state = {
    open: false,
    gambar: '',
    value: 'indexlivingmall'
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
        <div>
          <h1 className='d-flex justify-content-center mt-3'>
            Index Living Mall
          </h1>
        </div>
      <div className='d-flex justify-content-center mt-3'>
        <p>
          Index Living Mall Transmart Duta Mall Banjarmasin (051 16779671) | Transmart Carrefour Graha Bintaro (0822 0825 1520) | Transmart Carrefour Cempaka Putih (021 425 3717) 
        </p>
      </div>
            <div className='d-flex justify-content-center mt-3'>
            <img src="/assets/headerrev2.jpg" alt=""/>
            </div>
            <div className='d-flex justify-content-center'>
              <div style={{width: '85%'}}>
              <p className='text-justify my-2 mx-5'>
                IndexLivingMall was developed in 2002 under the Concept of Specialty Mall for Home Furnishing as the largest center of Furniture and Home Decorative items. ivingmall has become the first Specialty Mall for Home Furnishing in Thailand, which offers the best design as well as the best selection of materials. Today, with 28 stores throughout Thailand, and over 10 countries overseas,IndexLivingmall still commits to provide access to best quality of home furnishings responding to modern lifestyles of consumers 
                everywhere
              </p>
          </div>
          </div>

          {this.state.open && (
            <Lightbox
            mainSrc={this.state.gambar}
            onCloseRequest={() => this.setState({ open: false })}
            imagePadding='50'
          />
        )}

      <div className="d-flex justify-content-center">
        <h3>
          Katalog Index Living
        </h3>
      </div>
      <div style={{marginRight: 'auto', marginLeft: 'auto'}} className="w-75">
        <Slider {...settings}>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/ilm/ilm1.jpg' 
            })}
          >
              <img 
                style={{marginRight: 'auto', marginLeft: 'auto'}} 
                src={'/assets/katalog/ilm/ilm1.jpg'} 
                alt="ilm1" 
                height="500" 
              />
          </div>
          <div 
          onClick={() => this.setState({ 
            open: true, 
            gambar: '/assets/katalog/ilm/ilm2.jpg' 
          })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/ilm/ilm2.jpg'} 
              alt="ilm2" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/ilm/ilm3.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/ilm/ilm3.jpg'} 
              alt="ilm3" 
              height="500" />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/ilm/ilm4.jpg' 
            })}
          >
            <img 
              style={{marginRight: 'auto', marginLeft: 'auto'}} 
              src={'/assets/katalog/ilm/ilm4.jpg'} 
              alt="ilm4" 
              height="500" 
            />
          </div>
          <div 
            onClick={() => this.setState({ 
              open: true, 
              gambar: '/assets/katalog/ilm/ilm5.jpg' 
            })}
          >
            <img 
            style={{marginRight: 'auto', marginLeft: 'auto'}} 
            src={'/assets/katalog/ilm/ilm5.jpg'}  
            alt="ilm5" 
            height="500" />
          </div>
        </Slider>
        <div className="d-flex justify-content-center mt-3 mb-5">
          <a href="/assets/pdf/ilm.pdf" target="_blank" className="btn btn-danger"><i className="fas fa-arrow-circle-down"></i>  DOWNLOAD</a>
        </div>
      </div>

      
    </div>
    )
  }
}

export default IndexLivingMall



