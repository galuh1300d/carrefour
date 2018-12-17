import React, { Component } from 'react'
import PlacesAutocomplete, {geocodeByAddress,getLatLng} from 'react-places-autocomplete'
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

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(cityLatLng => this.setState({
        cityLatLng,
        zoom: 12
      }))
      .catch(error => console.error('Error', error));
  };

  onChange = (address) => this.setState({ address })

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  render() {
    return (
      <div className="mx-5 my-5">
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1Oy3Ic6JyE6RR4eEbEFw2T-ynXjjWzTc&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <h1>Lokasi Gerai</h1>
          <p className="pr-2">Your Address:</p> 
          <div className="d-flex flex-row">
            {this.state.scriptLoaded && (
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      style={{width: '500px'}}
                      {...getInputProps({
                        placeholder: ' Nama Kotamu...',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        )}
      </div>
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