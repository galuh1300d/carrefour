import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Clock from 'react-live-clock'
import moment from 'moment'
import 'moment/locale/id'  
moment.locale('id')

class Header extends Component {

  state = {
    katalog: false,
    promo: false,
    kartumega: false,
    voucher: false,
    berita: false,
    produk: false,
    layanan: false,
    lokasi: false,
    mitra: false
  }

  klikKatalog = () => {
    this.setState({
      katalog: true,
      promo: false,
      kartumega: false,
      voucher: false,
      berita: false,
      produk: false,
      layanan: false,
      lokasi: false,
      mitra: false
    })
  }

  klikPromo = () => {
    this.setState({
      katalog: false,
      promo: true,
      kartumega: false,
      voucher: false,
      berita: false,
      produk: false,
      layanan: false,
      lokasi: false,
      mitra: false
    })
  }

  klikKartumega = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: true,
      voucher: false,
      berita: false,
      produk: false,
      layanan: false,
      lokasi: false
    })
  }

  klikVoucher = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: false,
      voucher: true,
      berita: false,
      produk: false,
      layanan: false,
      lokasi: false
    })
  }

  klikBerita = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: false,
      voucher: false,
      berita: true,
      produk: false,
      layanan: false,
      lokasi: false
    })
  }

  klikProduk = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: false,
      voucher: false,
      berita: false,
      produk: true,
      layanan: false,
      lokasi: false
    })
  }

  klikLayanan = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: false,
      voucher: false,
      berita: false,
      produk: false,
      layanan: true,
      lokasi: false
    })
  }

  klikLokasi = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: false,
      voucher: false,
      berita: false,
      produk: false,
      layanan: false,
      lokasi: true
    })
  }

  klikNetral = () => {
    this.setState({
      katalog: false,
      promo: false,
      kartumega: false,
      voucher: false,
      berita: false,
      produk: false,
      layanan: false,
      lokasi: false
    })
  }

  render() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light fixed-top">
      <Link to="/" onClick={this.klikNetral} className="navbar-brand">
        <img src="/assets/- LOGO CARREFOUR.png" alt="Carrefour Logo" height="50"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-5">
          <li className={(this.state.katalog) ? "nav-item active" : "nav-item"}>
            <Link to="/katalog" onClick={this.klikKatalog} className="nav-link" style={{fontSize: 14}}><i className="far fa-book-open fa-lg" style={{color:"#235D9F"}}></i> Katalog</Link>
          </li>
          <li className={(this.state.promo) ? "nav-item active" : "nav-item"}>
            <Link to="/promo" onClick={this.klikPromo} className="nav-link" style={{fontSize: 14}}><i className="fas fa-shopping-bag fa-lg" style={{color:"#FCA000"}}></i> Promo</Link>
          </li>
          <li className={(this.state.kartumega) ? "nav-item active" : "nav-item"}>
            <Link to="/kartumega" onClick={this.klikKartumega} className="nav-link" style={{fontSize: 14}}><i className="fab fa-cc-visa fa-lg" style={{color:"#000"}}></i> Kartu Mega Carrefour</Link>
          </li>
          <li className={(this.state.voucher) ? "nav-item active" : "nav-item"}>
            <Link to="/voucher" onClick={this.klikVoucher} className="nav-link" style={{fontSize: 14}}><i className="far fa-credit-card fa-lg " style={{color:"#073E68"}}></i> Voucher</Link>
          </li>
          <li className={(this.state.berita) ? "nav-item active" : "nav-item"}>
            <a href="https://www.detik.com/tag/transmart-carrefour" target="_blank" rel="noopener noreferrer" onClick={this.klikBerita} className="nav-link" style={{fontSize: 14}}><i className="fas fa-newspaper fa-lg" style={{color:"#6DD3CE"}}></i> Berita</a>
          </li>
          <li className={(this.state.produk) ? "nav-item active" : "nav-item"}>
            <Link to="/produk" onClick={this.klikProduk} className="nav-link" style={{fontSize: 14}}><i className="fas fa-box fa-lg" style={{color:"#00BE5A"}}></i> Produk</Link>
          </li>
          <li className={(this.state.layanan) ? "nav-item active" : "nav-item"}>
            <Link to="/layanan" onClick={this.klikLayanan} className="nav-link" style={{fontSize: 14}}><i className="far fa-user-circle fa-lg" style={{color:"#000"}}></i> Layanan</Link>
          </li>
          <li className={(this.state.lokasi) ? "nav-item active" : "nav-item"}>
            <Link to="/lokasi" onClick={this.klikLokasi} className="nav-link" style={{fontSize: 14}}><i className="fas fa-map-marker-alt fa-lg" style={{color:"#696969"}}></i> Lokasi</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize: 14}}><i className="fas fa-handshake fa-lg" style={{color:"#f44242"}}></i> Mitra
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/transliving" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>TransLiving</Link>
              <Link to="/breadshop" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Breadshop</Link>
              <Link to="/electronicpro" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Electronic Pro</Link>
              <Link to="/cinema" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Cinema</Link>
              <Link to="/indexlivingmall" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Index Living Mall</Link>
              <Link to="/departmentstore" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Department Store</Link>
              <Link to="/transstudio" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Trans Studio Mall,TSM</Link>
              <Link to="/kidcity" onClick={this.klikNetral} className="dropdown-item" style={{fontSize: 14}}>Kids City</Link>
            </div>
          </li>
        </ul>
        <div className=" mr-3"></div>
        {/* <form className="form-inline">
          <i className="fas fa-search mr-2" style={{color:"#f44242"}}></i>
          <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Cari" aria-label="Search"/>
          <button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit">Cari</button>
        </form> */}
        {moment().format('dddd, Do MMMM YYYY')} |
        <Clock className="ml-1"
        format={'HH:mm:ss'} ticking timezone={'Asia/Bangkok'} />
        </div>
    </nav>
  )
}
}

export default Header
