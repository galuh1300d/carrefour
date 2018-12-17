import React from 'react'

const Cinema = () => {
  return (
    <div className='d-flex justify-content-center my-5'>
      <div>
      <h3 className="text-center">
          Cinema | XXI | Premiere
        </h3>
        <p className='text-center'>
          Sahabat Carrefour,Kini Transmart Carrefour menawarkan konsep baru "CINEMA" yang bekerja sama dengan CINEMA XXI dan CGV, Berbelanja makin asik dan menyenangkan.
        </p>
        <div className='d-flex justify-content-center mt-3' >
          <img src="/assets/CINEMA1.jpg" alt=""/>
        </div>
          <div className='d-flex justify-content-center mt-3' >
          <img src="/assets/CINEMA2.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Cinema
