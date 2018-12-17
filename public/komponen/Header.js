const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light fixed-top">
      <a href="/" className="navbar-brand mr-lg-5">
        <img src="/assets/- LOGO CARREFOUR.png" alt="Carrefour Logo" height="50"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-5">
          <li className="nav-item">
            <a href="/katalog" className="nav-link" style={{fontSize: 14}}><i className="far fa-book-open fa-lg"></i> Katalog</a>
          </li>
          <li className="nav-item">
            <a href="/promo" className="nav-link" style={{fontSize: 14}}><i className="fas fa-shopping-bag fa-lg"></i> Promo</a>
          </li>
          <li className="nav-item">
            <a href="/kartumega" className="nav-link" style={{fontSize: 14}}><i className="fab fa-cc-visa fa-lg"></i> Kartu Mega Carrefour</a>
          </li>
          <li className="nav-item">
            <a href="/voucher" className="nav-link" style={{fontSize: 14}}><i className="far fa-credit-card fa-lg "></i> Voucher</a>
          </li>
          <li className="nav-item">
            <a href="https://www.detik.com/tag/transmart-carrefour" target="_blank" className="nav-link" style={{fontSize: 14}}><i className="fas fa-newspaper fa-lg"></i> Berita</a>
          </li>
          <li className="nav-item">
            <a href="/produk" className="nav-link" style={{fontSize: 14}}><i className="fas fa-box fa-lg"></i> Produk</a>
          </li>
          <li className="nav-item">
            <a href="/layanan" className="nav-link" style={{fontSize: 14}}><i className="far fa-user-circle fa-lg"></i> Layanan</a>
          </li>
          <li className="nav-item">
            <a href="/lokasi" className="nav-link" style={{fontSize: 14}}><i className="fas fa-map-marker-alt fa-lg"></i> Lokasi</a>
          </li>
          <li className="nav-item dropdown">
            <a href="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize: 14}}><i className="fas fa-handshake fa-lg"></i> Mitra
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a href="/transliving" className="dropdown-item" style={{fontSize: 14}}>TransLiving</a>
              <a href="/breadshop" className="dropdown-item" style={{fontSize: 14}}>Breadshop</a>
              <a href="/electronicpro" className="dropdown-item" style={{fontSize: 14}}>Electronic Pro</a>
              <a href="/cinema" className="dropdown-item" style={{fontSize: 14}}>Cinema</a>
              <a href="/indexlivingmall" className="dropdown-item" style={{fontSize: 14}}>Index Living Mall</a>
              <a href="/departmentstore" className="dropdown-item" style={{fontSize: 14}}>Department Store</a>
              <a href="/transstudio" className="dropdown-item" style={{fontSize: 14}}>Trans Studio Mall,TSM</a>
              <a href="/kidcity" className="dropdown-item" style={{fontSize: 14}}>Kids City</a>
            </div>
          </li>
        </ul>
        <div className=" mr-3"></div>
        {moment().format('dddd, Do MMMM YYYY')}
        </div>
    </nav>
  )
}

ReactDOM.render(<Header />, document.getElementById('header'))