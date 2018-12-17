import React from 'react'

const About = () => {
	return (
		// <div>
		// 	<div>
		// 		<h3 className="d-flex justify-content-center mt-5">Tentang Carrefour</h3>
		// 		<h5 className="d-flex justify-content-center mt-1">
		// 		Carrefour, Gerai Retail Pilihan Untuk Keluarga Indonesia
		// 		</h5>
		// 	</div>
		// 	<div className='d-flex justify-content-center' >
		// 		<img src={"/assets/lebakbulus_.jpg"} alt=""/>
		// 	</div>
		// 		<div className='d-flex justify-content-center mt-2'>
		// 			<div className='w-75'>
		// 			<p className='text-justify mt-2' >
		// 			PT. Trans Retail Indonesia  membantu semua orang agar dapat menikmati kualitas hidup yang lebih baik setiap harinya. Ambisi ini adalah landasan kami dalam setiap keputusan dan langkah yang diambil untuk menjadi retailer terbaik di Indonesia, sebagai tujuan utama berbelanja keluarga dengan memberikan pelayanan dan produk berkualitas dimanapun dan kapanpun.
		// 			</p>
		// 			<p className='text-justify'>
		// 			PT. Trans Retail Indonesia bersama dengan TransCorporation terus berinovasi dalam memberikan standar pelayanan kelas dunia di industri ritel Indonesia melalui brand Carrefour, Transmart dan Groserindo. Dengan lebih dari 12.000 pegawai, PT. Trans Retail Indonesia terus memimpin perubahan dan menghidupkan mimpi melalui lebih dari 100 gerai multiformat yang tersebar di seluruh Indonesia. Konsep hybrid business yang pertama kali dikembangkan di Indonesia merupakan wujud inovasi dan transformasi untuk memperkuat komitmen Trans RetaiI Indonesia dalam memberikan pelayanan kelas dunia dan terbaik bagi keluarga Indonesia.
		// 			</p>
		// 			<p className='text-justify'>
		// 			Transformasi dari Carrefour menuju Transmart didorong oleh spirit entrepreneurship yang merupakan bagian dari DNA perusahaan. Pemimpin ritel terbaik berkumpul disini untuk memberikan pelayanan prima dari hati demi perubahan nyata untuk karir, kehidupan dan masa depan yang lebih baik. Banyak transformasi yang kami lakukan, namun satu hal yang tidak pernah berubah : dedikasi kami kepada konsumen dan mimpi kami untuk Indonesia yang lebih baik.
		// 			</p>
		// 			</div>
		// 			</div>
		// </div>
	<div>
		<div style={{paddingTop: '2%',paddingBottom: '2%',backgroundColor: '#e2e2e2'}}>
		<div className="d-flex flex-row mx-5">
			<div>
				<img src={"/assets/lebakbulus_.jpg"} alt=""/>
			</div>
			<div className="ml-3">
				<h1>
					TENTANG CARREFOUR
				</h1>
			</div>
		</div>
		
		
		<div>
		<p className='text-justify mx-5 mt-3'>
			PT. Trans Retail Indonesia  membantu semua orang agar dapat menikmati kualitas hidup yang lebih baik setiap harinya. Ambisi ini adalah landasan kami dalam setiap keputusan dan langkah yang diambil untuk menjadi retailer terbaik di Indonesia, sebagai tujuan utama berbelanja keluarga dengan memberikan pelayanan dan produk berkualitas dimanapun dan kapanpun.
		</p>
		<p className='text-justify mx-5'>
			PT. Trans Retail Indonesia bersama dengan TransCorporation terus berinovasi dalam memberikan standar pelayanan kelas dunia di industri ritel Indonesia melalui brand Carrefour, Transmart dan Groserindo. Dengan lebih dari 12.000 pegawai, PT. Trans Retail Indonesia terus memimpin perubahan dan menghidupkan mimpi melalui lebih dari 100 gerai multiformat yang tersebar di seluruh Indonesia. Konsep hybrid business yang pertama kali dikembangkan di Indonesia merupakan wujud inovasi dan transformasi untuk memperkuat komitmen Trans RetaiI Indonesia dalam memberikan pelayanan kelas dunia dan terbaik bagi keluarga Indonesia.
		</p>
		<p className='text-justify mx-5'>
			Transformasi dari Carrefour menuju Transmart didorong oleh spirit entrepreneurship yang merupakan bagian dari DNA perusahaan. Pemimpin ritel terbaik berkumpul disini untuk memberikan pelayanan prima dari hati demi perubahan nyata untuk karir, kehidupan dan masa depan yang lebih baik. Banyak transformasi yang kami lakukan, namun satu hal yang tidak pernah berubah : dedikasi kami kepada konsumen dan mimpi kami untuk Indonesia yang lebih baik.
		</p>
		</div>
		</div>

		<div className="mb-5 py-3" style={{backgroundColor: '#dc3545'}}>
				<div className="d-flex justify-content-center">
					<div className="card-deck w-75">
          <div className="card">
            <img className="card-img-top" src="/assets/MegaZip.jpg" alt="MegaZIP"/>
            <div className="card-body">
              <h5 className="card-title">Visi</h5>
              <p className="card-text text-justify">Untuk Indonesia Yang Lebih Baik </p>
            </div>
          </div>
          
          <div className="card">
            <img className="card-img-top" src="assets/Honestbee.jpg" alt="HonestBee"/>
            <div className="card-body">
              <h5 className="card-title">Misi</h5>
              <p className="card-text text-justify">Menjadi Retailer No. 1 di Indonesia tahun 2020.</p>
            </div>
        </div>
      </div>
		</div>
		</div>
	</div>
		
	)
}
export default About
