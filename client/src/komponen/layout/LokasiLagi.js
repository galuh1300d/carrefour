import React, { Component } from 'react'
import Script from 'react-load-script'
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import LokasiDB from './LokasiDB'



const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {LokasiDB.map((lokasi) =>
      <Marker key={lokasi.lat+lokasi.lng} position={{ lat: lokasi.lat, lng: lokasi.lng }} onClick={props.onToggleOpen}>
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>
            <div className="d-flex justify-content-center">
              <img src={lokasi.alamat} alt={lokasi.nama} height="50"/>
            </div>
            <h5 className="text-center">{lokasi.nama}</h5>
            <p className="text-center">
              {lokasi.alamat}
            </p>
            <p className="text-center">{lokasi.telp}</p>
          </div>
        </InfoWindow>}
      </Marker>
    )}
  </GoogleMap>
)

class Lokasi extends Component {

  state = {
    address: '',
    scriptLoaded: false,
    cityLatLng: {
      lat: -3.880518,
      lng: 117.895199
    },
    zoom: 4.8
  }

  handleChange = (event) => {
    this.setState({zoom: 15})
    this.setState({address: event.target.value}, () => {
      switch(this.state.address) {
        case 'Bali':
          this.setState({cityLatLng: {
            lat: -8.409518,
            lng: 115.188919
          }})
        break
        default: 
          return ''
      }
    })
  }

  render() {
    console.log(this.state.cityLatLng, this.state.zoom)
    return (
      <div className="mx-5 my-5">
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1Oy3Ic6JyE6RR4eEbEFw2T-ynXjjWzTc&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <h1>Lokasi Gerai</h1>
        <select value={this.state.address} onChange={this.handleChange} className="form-control">
          <option>Silahkan Pilih</option>
          <option value='Bali'>Bali</option>
        </select>
        <div className="mt-5">
          <MapWithAMakredInfoWindow 
            zoom={this.state.zoom} lat={this.state.cityLatLng.lat} lng={this.state.cityLatLng.lng} 
          />
        </div>
    </div>
    )
  }
}

export default Lokasi