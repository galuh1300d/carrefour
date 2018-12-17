import React from 'react'
// import Script from 'react-load-script'
import Home from './Home'

const Carousel = () => {
  return (
    <div>
      {/* <Script
        url="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        attributes={{ 
          integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN", crossorigin: "anonymous" 
        }}
      />
      <Script
        url="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        attributes={{ 
          integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q", crossorigin: "anonymous" 
        }}
      />
      <Script
        url="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        attributes={{ 
          integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" , crossorigin: "anonymous" 
        }}
      /> */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={'/assets/home-dept.jpg'} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={'/assets/sliderdeptstore.jpg'} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={'/assets/MEWARNAI LANDING-BARU.jpg'} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={'/assets/TEST3.jpg'} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={'/assets/TEST4.jpg'} alt="Fourth slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={'/assets/home-wt.jpg'} alt="Fifth slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <Home/>

      <h3 className="d-flex justify-content-center mt-5">Galeri Video</h3>
      <div className="mx-5">
        <div className="row justify-content-center my-5">
          <div className="m-1 mx-xl-3">
            <iframe title="1" frameborder="0" allowFullScreen="true" width="300" height="300" className="d-block" src="https://www.youtube.com/embed/XNnwFaR7eT0" alt="First slide"/>
          </div>
          <div className="m-1 mx-lg-3">
            <iframe title="1" frameborder="0" allowFullScreen="true" width="300" height="300" className="d-block" src="https://www.youtube.com/embed/BVQsvdpLxpE" alt="Second slide"/>
          </div>
          <div className="m-1 mx-lg-3">
            <iframe frameborder="0" allowFullScreen="true" title="1" width="300" height="300" className="d-block" src="https://www.youtube.com/embed/yxd2p9ZaOWc" alt="Third slide"/>
          </div>
          <div className="m-1 mx-lg-3">
            <iframe frameborder="0" allowFullScreen="true" title="1" width="300" height="300" className="d-block" src="https://www.youtube.com/embed/4n7md_FwCGw" alt="Fourth slide"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
