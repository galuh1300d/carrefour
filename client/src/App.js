import React from 'react'
import { Route } from 'react-router-dom'
import Header from './komponen/layout/Header'
import Carousel from './komponen/layout/Carousel'
import Footer from './komponen/layout/Footer'
import Katalog from './komponen/layout/Katalog'
import Promo from './komponen/layout/Promo'
import KartuMega from './komponen/layout/KartuMega'
import Voucher from './komponen/layout/Voucher'
import Berita from './komponen/layout/Berita'
import Produk from './komponen/layout/Produk'
import Layanan from './komponen/layout/Layanan'
import Saran from './komponen/layout/Saran'
import Lokasi from './komponen/layout/Lokasi'
import Transliving from './komponen/layout/Transliving'
import Contact from './komponen/layout/Contact'
import About from './komponen/layout/About'
import Breadshop from './komponen/layout/Breadshop'
import IndexLivingMall from './komponen/layout/IndexLivingMall'
import Departmentstore from './komponen/layout/Departmentstore'
import Kidcity from './komponen/layout/Kidcity'
import Transstudio from './komponen/layout/Transstudio'
import Cinema from './komponen/layout/Cinema'
import Electronicpro from './komponen/layout/Electronicpro'
import PromoAkhirPekan from './komponen/layout/promo/PromoAkhirPekan'
import PromoFresh from './komponen/layout/promo/PromoFresh'
import PromoDeptstore from './komponen/layout/promo/PromoDeptstore'
import PromoEDLP from './komponen/layout/promo/PromoEDLP'
import PromoPalingMurah from './komponen/layout/promo/PromoPalingMurah'
import PromoElektronik from './komponen/layout/promo/PromoElektronik'
import KebijakanPrivasi from './komponen/layout/KebijakanPrivasi'




const App = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
        <div className="mt-5 pt-2">
          <Route exact path='/' component={Carousel} />
          <Route exact path='/katalog' component={Katalog} />
          <Route exact path='/promo' component={Promo} />
          <Route exact path='/kartumega' component={KartuMega} />
          <Route exact path='/voucher' component={Voucher} />
          <Route exact path='/berita' component={Berita} />
          <Route exact path='/produk' component={Produk} />
          <Route exact path='/layanan' component={Layanan} />
          <Route exact path='/saran' component={Saran} />
          <Route exact path='/lokasi' component={Lokasi} />
          <Route exact path='/transliving' component={Transliving} />
          <Route exact path='/tentang' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/breadshop' component={Breadshop} />
          <Route exact path='/indexlivingmall' component={IndexLivingMall} />
          <Route exact path='/departmentstore' component={Departmentstore} />
          <Route exact path='/kidcity' component={Kidcity} />
          <Route exact path='/transstudio' component={Transstudio} />
          <Route exact path='/cinema' component={Cinema} />
          <Route exact path='/electronicpro' component={Electronicpro} />
          <Route exact path='/promoakhirpekan' component={PromoAkhirPekan} />
          <Route exact path='/promofresh' component={PromoFresh} />
          <Route exact path='/promoedlp' component={PromoEDLP} />
          <Route exact path='/promodeptstore' component={PromoDeptstore} />
          <Route exact path='/promoelektronik' component={PromoElektronik} />
          <Route exact path='/promopalingmurah' component={PromoPalingMurah} />
          <Route exact path='/kebijakanprivasi' component={KebijakanPrivasi} />
        </div>
      <Footer/>
    </div>
  )
}

export default App
