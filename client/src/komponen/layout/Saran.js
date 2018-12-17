import React, { Component } from 'react'
import axios from 'axios'

// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class Saran extends Component {

  state = {
    namaLengkap: '',
    namaPanggilan: '',
    tanggalLahir: '',
    alamat: '',
    email: '',
    jenisKelamin: 'Pria',
    gerai: '',
    komentar: '',
    namaLengkapError: '',
    namaPanggilanError: '',
    tanggalLahirError: '',
    alamatError: '',
    emailError: '',
    geraiError: '',
    komentarError: ''
  }

  onChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  }

  onChangePria = (e) => {
    this.setState({ jenisKelamin: 'Pria' });
  }

  onChangeWanita = (e) => {
    this.setState({ jenisKelamin: 'Wanita' });
  }

  validate = () => {
    let namaLengkapError = ''
    let namaPanggilanError = ''
    let tanggalLahirError = ''
    let alamatError = ''
    let emailError = ''
    let geraiError = ''
    let komentarError = ''

    if (!this.state.namaLengkap) {
      namaLengkapError = "Nama Lengkap Tidak Boleh Kosong";
    }

    if (!this.state.namaPanggilan) {
      namaPanggilanError = "Nama Panggilan Tidak Boleh Kosong";
    }

    if (!this.state.tanggalLahir) {
      tanggalLahirError = "Tanggal Lahir Tidak Boleh Kosong";
    }

    if (!this.state.alamat) {
      alamatError = "Alamat Tidak Boleh Kosong";
    }

    if (!this.state.gerai) {
      geraiError = "Silahkan Pilih Gerai";
    }

    if (!this.state.komentar) {
      komentarError = "Komentar Tidak Boleh Kosong";
    }

    if (!re.test(this.state.email)) {
      emailError = "Email Tidak Valid";
    }

    if (
      namaLengkapError || namaPanggilanError || tanggalLahirError || alamatError || emailError || geraiError || komentarError 
    ) {
      this.setState({ namaLengkapError, namaPanggilanError, tanggalLahirError, alamatError,emailError, geraiError, komentarError });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newSaran = {
      namaLengkap: this.state.namaLengkap,
      namaPanggilan: this.state.namaPanggilan,
      tanggalLahir: this.state.tanggalLahir,
      alamat: this.state.alamat,
      jenisKelamin: this.state.jenisKelamin,
      gerai: this.state.gerai,
      komentar: this.state.komentar
    }

    const isValid = this.validate()

    if (isValid) {
      axios.post('/api/saran', newSaran)
        .then(this.props.history.push('/'))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div>
        <h5 className="text-center mt-5">Kami Siap Membantu Anda!</h5>
          <div className="container my-5">
          <form onSubmit={this.onSubmit}>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Nama Lengkap</label>
              <div class="col-sm-10">
                <input 
                  onChange={this.onChange} name="namaLengkap"
                  type="text" className="form-control" id="inputEmail3" placeholder="Nama Lengkap"
                />
                <div style={{color: "red"}}>{this.state.namaLengkapError}</div>
              </div> 
            </div>
            <div className="form-group row">
              <label for="inputtext" className="col-sm-2 col-form-label">Nama Panggilan</label>
              <div className="col-sm-10">
                <input onChange={this.onChange} name="namaPanggilan"
                  type="text" className="form-control" placeholder="Nama Panggilan"
                />
                <div style={{color: "red"}}>{this.state.namaPanggilanError}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputtext" className="col-sm-2 col-form-label">Tanggal Lahir</label>
              <div className="col-sm-10">
                <input onChange={this.onChange} name="tanggalLahir"
                  type="text" className="form-control" placeholder="Tanggal Lahir"
                />
                <div style={{color: "red"}}>{this.state.tanggalLahirError}</div>
              </div>
            </div><div className="form-group row">
              <label for="inputtext" className="col-sm-2 col-form-label">Alamat</label>
              <div className="col-sm-10">
                <input onChange={this.onChange} name="alamat"
                 type="text" className="form-control" placeholder="Alamat"
                />
                <div style={{color: "red"}}>{this.state.alamatError}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputtext" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input onChange={this.onChange} name="email"
                  type="text" className="form-control" placeholder="Email"
                />
                <div style={{color: "red"}}>{this.state.emailError}</div>
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Jenis Kelamin</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input 
                      onChange={this.onChangePria} 
                      checked={this.state.jenisKelamin === 'Pria'}
                      className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Pria" 
                    />
                    <label className="form-check-label" for="gridRadios1">
                      Pria
                    </label>
                  </div>
                  <div className="form-check">
                    <input onChange={this.onChangeWanita}
                      checked={this.state.jenisKelamin === 'Wanita'}
                      className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Wanita"
                    />
                    <label className="form-check-label" for="gridRadios2">
                      Wanita
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <label className="mr-sm-2" for="inlineFormCustomSelect">Pilihan Gerai</label>
                  <select onChange={this.onChange} name="gerai"
                   className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                  >
                    <option selected>Pilih</option>
                    <option value="Ambassador-ITC Kuningan">Ambassador-ITC Kuningan</option>
                    <option value="Batam Muka Kuning">Batam Muka Kuning</option>
                    <option value="Bekasi Harapan">Bekasi Harapan</option>
                    <option value="Bekasi Square">Bekasi Square</option>
                    <option value="Bekasi Timur">Bekasi Timur</option>
                    <option value="Blok M Squre - ITC Blok M Square">Blok M Squre - ITC Blok M Square</option>
                    <option value="Buaran">Buaran</option>
                    <option value="Bubutan Junction Surabaya">Bubutan Junction Surabaya</option>
                    <option value="Ciledug">Ciledug</option>
                    <option value="Cempaka Mas">Cempaka Mas</option>
                    <option value="Cempaka Putih">Cempaka Putih</option>
                    <option value="Central Park">Central Park</option>
                    <option value="Cibinong">Cibinong</option>
                    <option value="Cibinong City Mall">Cibinong City Mall</option>
                    <option value="Cikarang">Cikarang</option>
                    <option value="Cikokol">Cikokol</option>
                    <option value="Cipinang">Cipinang</option>
                    <option value="Ciputat">Ciputat</option>
                    <option value="Denpasar">Denpasar</option>
                    <option value="Denpasar - Imam Bonjol ">Denpasar - Imam Bonjol </option>
                    <option value="Denpasar- Singaraja">Denpasar- Singaraja</option>
                    <option value="DP Mall Semaranggf">DP Mall Semarang</option>
                    <option value="Duta Merlin">Duta Merlin</option>
                    <option value="Emprorium Pluit Mall">Emprorium Pluit Mall</option>
                    <option value="Golden City">Golden City</option>
                    <option value="Hayam Wuruk Jember">Hayam Wuruk Jember</option>
                    <option value="ITC BSD - Bumi Serpong Damai">ITC BSD - Bumi Serpong Damai</option>
                    <option value="ITC Depok">ITC Depok</option>
                    <option value="ITC - Surabaya">ITC - Surabaya</option>
                    <option value="Kalimas Ngagel Surabaya">Kalimas Ngagel Surabaya</option>
                    <option value="Kebayoran">Kebayoran</option>
                    <option value="Kiara Condong">Kiara Condong</option>
                    <option value="Kota Kasablanka">Kota Kasablanka</option>
                    <option value="Kramat Jati">Kramat Jati</option>
                    <option value="Lebak Bulus">Lebak Bulus</option>
                    <option value="Magelang Armada">Magelang Armada</option>
                    <option value="Makassar - Pangayoman">Makassar - Pangayoman</option>
                    <option value="Makassar - Karebosi">Makassar - Karebosi</option>
                    <option value="Makassar - Panakkukang">Makassar - Panakkukang</option>
                    <option value="Makassar - Pusat Grosir Modern">Makassar - Pusat Grosir Modern</option>
                    <option value="Makassar - Tamalanrea">Makassar - Tamalanrea</option>
                    <option value="Makassar - Trans Studio">Makassar - Trans Studio</option>
                    <option value="Malang - Blimbing">Malang - Blimbing</option>
                    <option value="Mangga Dua">Mangga Dua</option>
                    <option value="Medan Citra Garden">Medan Citra Garden</option>
                    <option value="Medan Fair">Medan Fair</option>
                    <option value="Menteng Prada">Menteng Prada</option>
                    <option value="Meruya">Meruya</option>
                    <option value="MT Haryono">MT Haryono</option>
                    <option value="Palembang Square">Palembang Square</option>
                    <option value="Palembang City Center">Palembang City Center</option>
                    <option value="Pamulang">Pamulang</option>
                    <option value="Pasar Minggu">Pasar Minggu</option>
                    <option value="Pekalongan">Pekalongan</option>
                    <option value="Permata Hijau">Permata Hijau</option>
                    <option value="Plaza Ambarukmo">Plaza Ambarukmo</option>
                    <option value="Pluit Village">Pluit Village</option>
                    <option value="Puri Indah">Puri Indah</option>
                    <option value="Rungkut Surabaya">Rungkut Surabaya</option>
                    <option value="Season City">Season City</option>
                    <option value="Solo Baru">Solo Baru</option>
                    <option value="Solo Pabelan">Solo Pabelan</option>
                    <option value="Solo Paragon">Solo Paragon</option>
                    <option value="Srondol">Srondol</option>
                    <option value="Sukajadi">Sukajadi</option>
                    <option value="Sunter">Sunter</option>
                    <option value="Supermall Karawaci">Supermall Karawaci</option>
                    <option value="Surabaya - Ahmad Yani">Surabaya - Ahmad Yani</option>
                    <option value="Surabaya - Panjang Jiwo">Surabaya - Panjang Jiwo</option>
                    <option value="Taman Mini">Taman Mini</option>
                    <option value="Taman Palem">Taman Palem</option>
                    <option value="Tangerang City">Tangerang City</option>
                    <option value="Transmart Buah Batu">Transmart Buah Batu</option>
                    <option value="Transmart Dewi Sartika Depok">Transmart Dewi Sartika Depok</option>
                    <option value="Transmart Graha Bintaro">Transmart Graha Bintaro</option>
                    <option value="Transmart Kawanua Manado">Transmart Kawanua Manado</option>
                    <option value="Transmart Kubu Raya Kalimantan Barat">Transmart Kubu Raya Kalimantan Barat</option>
                    <option value="Transmart Lampung">Transmart Lampung</option>
                    <option value="Transmart Lenmarc Suarabaya">Transmart Lenmarc Suarabaya</option>
                    <option value="Transmart Living Plaza Cirebon">Transmart Living Plaza Cirebon</option>
                    <option value="Transmart Kupang">Transmart Kupang</option>
                    <option value="Transmart Mataram">Transmart Mataram</option>
                    <option value="Transmart Padang">Transmart Padang</option>
                    <option value="Transmart Pekanbaru">Transmart Pekanbaru</option>
                    <option value="Transmart Resinda Karawang">Transmart Resinda Karawang</option>
                    <option value="Transmart Star Square Manado">Transmart Star Square Manado</option>
                    <option value="Transmart Tegal">Transmart Tegal</option>
                    <option value="Transmart TSM Bandung">Transmart TSM Bandung</option>
                    <option value="Transmart Pasar Raya Blok M">Transmart Pasar Raya Blok M</option>
                    <option value="Transmart Telogorejo Semarang">Transmart Telogorejo Semarang</option>
                    <option value="Transmart Icon Mall Gresik">Transmart Icon Mall Gresik</option>
                    <option value="Transmart Gresik">Transmart Gresik</option>
                    <option value="Transmart Bogor Yasmin">Transmart Bogor Yasmin</option>
                    <option value="Transmart Duta Mall Banjarmasin">Transmart Duta Mall Banjarmasin</option>
                  </select>
                  <div style={{color: "red"}}>{this.state.geraiError}</div>
                </div>
              </div>
              <div className="mt-2">
                <div className="input-text-area">
                  <div className="input-text-area">
                    <span className="input-text-area">Tambahkan Komentar Anda Disini</span>
                  </div>
                  <textarea onChange={this.onChange} name="komentar"
                   className="form-control" aria-label="With textarea"
                  />
                  <div style={{color: "red"}}>{this.state.komentarError}</div>
                </div>
              </div>
            <div className="mt-2">
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div> 
              </div>
            </div>
          </form>
        </div>
    </div>
    )
  }
}

export default Saran