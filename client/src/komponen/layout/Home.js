import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // logo
  <div>
    <div className="d-flex flex-row justify-content-center align-items-center my-5">
      <div className="w-25 d-flex justify-content-center">
        <Link to='/transliving'>
          <img style={{width: 160}} src="assets/logo-transliving.jpg" alt="transliving"/>
        <div className="div">
          <img style={{width: 180}} src="assets/translivinghome.png" alt=""/>
        </div>
        </Link>
      </div>
      <div className="w-25 d-flex justify-content-center border-left border-right">
        <Link to='/promoelektronik'>
          <img style={{width: 100}} src="assets/logo-transhello.png" alt="transhello"/>
          <div className="div">
            <img className="mt-3" style={{width: 100}} src="assets/hometranshello.png" alt=""/>
        </div>
        </Link>
      </div>
      <div className="w-25 d-flex justify-content-center">
        <Link to='/epartmentstore'>
          <img style={{width: 200}} src="assets/logobeautyhome.jpg" alt="beauty"/>
          <div className="div">
            <img className="" style={{width: 150}} src="assets/logomakeover.png" alt=""/>
        </div>
        </Link>
      </div>
  </div>
  <div className="d-flex flex-row justify-content-center align-items-center my-5">
      <div className="w-25 d-flex justify-content-center">
        <Link to='/promoelektronik'>
          <img className="" style={{width: 200}} src="assets/logoelektronikhome.jpg" alt="elektronik"/>
          <div className="div">
            <img className="mt-5" style={{width: 200}} src="assets/homekulkas.png" alt=""/>
        </div>
        </Link>
      </div>
      <div className="w-25 d-flex justify-content-center border-left border-right">
        <Link to='/indexlivingmall'>
          <img style={{width: 180}} src="assets/logo-ilm1.jpg" alt="indexlivingmall"/>
          <div className="div">
            <img className=""style={{width: 200}} src="assets/homedining.png" alt=""/>
        </div>
        </Link>
      </div>
      <div className="w-25 d-flex justify-content-center">
        <Link to='/breadshop'>
          <img style={{width: 250}} src="assets/logobreadshophome.jpg" alt="indexliving"/>
          <div className="div">
            <img className="mt-5"style={{width: 230}} src="assets/homebread.png" alt=""/>
        </div>
        </Link>
      </div>
  </div>
  {/* PROMO HEBAT */}
  <div>
    <div className="d-flex justify-content-center mt-3">
      <img 
        style={{
          maxWidth: '1361px', width: '100%', maxHeight: '401px', height: '100%'
        }} 
        src="/assets/home-ap.jpg" alt="homeakhirpekan"/>
    </div>
    <div className="d-flex justify-content-center mt-1">
      <img style={{
          maxWidth: '1361px', width: '100%', maxHeight: '401px', height: '100%'
        }} src="/assets/home-fresh.jpg" alt="homeakhirpekan"/>
    </div>
  </div>
{/* Promo Home */}
  {/* <div className="d-flex justify-content-center w-100 mt-2">
    <div class="card border-light mb-3">
        <div class="card-header text-center">Promo Hebat Akhir Pekan</div>
        <div class="card-body">
          <h5 class="card-title text-center">Cek disini!</h5>
          <p class="card-text">
          </p>
          <img style={{width: 150}} className="card-img-top align-self-center"  src="assets/akhirpekantc.jpeg" alt="Card image cap"/>
        </div>
    </div>
    <div class="card border-light mb-3">
      <div class="card-header text-center">Promo Fresh Akhir Pekan</div>
      <div class="card-body">
        <h5 class="card-title text-center">100% Segar</h5>
        <p class="card-text"></p>
        <img style={{width: 150}} className="card-img-top align-self-center"  src="assets/freshtc.jpeg" alt="Card image cap"/>
      </div>
    </div>
    <div class="card border-light mb-3">
      <div class="card-header text-center">Promo Department Store</div>
      <div class="card-body">
        <h5 class="card-title text-center">Lebih Cantik!</h5>
        <p class="card-text"></p>
        <img style={{width: 150}} className="card-img-top align-self-center"  src="assets/deptc.jpeg" alt="Card image cap"/>
      </div>
    </div>
    <div class="card border-light mb-3">
      <div class="card-header text-center">Promo Index Living Mall</div>
      <div class="card-body">
        <h5 class="card-title text-center">Hunian Impian</h5>
        <p class="card-text"></p>
        <img style={{width: 150}} className="card-img-top align-self-center"  src="assets/ilmtc.jpeg" alt="Card image cap"/>
      </div>
    </div>
    <div class="card border-light mb-3">
      <div class="card-header text-center">Promo Elektronik</div>
      <div class="card-body">
        <h5 class="card-title text-center">Gadget Baru!</h5>
        <p class="card-text"></p>
        <img style={{width: 150}} className="card-img-top align-self-center"  src="assets/electronictc.jpeg" alt="Card image cap"/>
      </div>
</div>
</div> */}
</div>

//   <div className="d-flex justify-content-center">
//     <div class="card my-4">
//       <img style={{width: 200}} className="card-img-top align-self-center" src="assets/logo-transliving.jpg" alt="Card image cap"/>
//       <img style={{width: 150}} className="card-img-top align-self-center mt-2" src="assets/translivinghome.jpeg" alt="Card image cap"/>
//         <div class="card-body">
//           <h5 class="card-title">Trans Living</h5>
//           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//   </div>

//   <div class="card my-4">
//       <img classname="align-self-center" style={{width: 80}} className="card-img-top align-self-center"  src="assets/logo-transhello.png" alt="Card image cap"/>
//       <img style={{width: 150}} className="card-img-top align-self-center" src="assets/transhellohometc.jpeg" alt="Card image cap"/>
//         <div class="card-body">
//           <h5 class="card-title">Trans Living</h5>
//           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//   </div>
// </div>


  )
}

export default Home
