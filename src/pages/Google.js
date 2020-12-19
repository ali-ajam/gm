import React, { Fragment } from 'react';
import { compose } from 'recompose';
// react plugin used to create google maps
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
// reactstrap components
import { Card, Container, Row } from 'reactstrap';
// core components
import Header from 'components/Headers/Header.js';
import car from '../assets/img/car.png';

const MapCustom = compose(
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
    defaultOptions={{
      scrollwheel: false,
    }}
    options={{ gestureHandling: 'greedy', zoomControl: false }}
  >
    <MarkerWithLabel
      position={{ lat: 40.748817, lng: -73.985428 }}
      labelStyle={markerStyle}
      labelAnchor={new window.google.maps.Point(0, 0)}
    >
      <Fragment>
        <div
          style={{
            ...labelStyle,
            background: 'linear-gradient(87deg, #2dce89 0, #2dcecc 100%)',
          }}
        >
          70%
        </div>
        <img style={{ width: '50px', transform: 'rotate(210deg)' }} src={car} />
      </Fragment>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 40.748827, lng: -73.995428 }}
      labelStyle={markerStyle}
      labelAnchor={new window.google.maps.Point(0, 0)}
    >
      <Fragment>
        <div
          style={{
            ...labelStyle,
            background: 'linear-gradient(87deg, #2dce89 0, #2dcecc 100%)',
          }}
        >
          50%
        </div>
        <img style={{ width: '50px', transform: 'rotate(115deg)' }} src={car} />
      </Fragment>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 40.758832, lng: -73.995428 }}
      labelStyle={markerStyle}
      labelAnchor={new window.google.maps.Point(0, 0)}
    >
      <Fragment>
        <div
          style={{
            ...labelStyle,
            background: 'linear-gradient(87deg, #2dce89 0, #2dcecc 100%)',
          }}
        >
          20%
        </div>
        <img style={{ width: '50px', transform: 'rotate(30deg)' }} src={car} />
      </Fragment>
    </MarkerWithLabel>
  </GoogleMap>
));

class Google extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container style={{ marginTop: '-4.5rem' }} fluid>
          <Row>
            <div className='col'>
              <Card className='border-0'>
                <MapCustom
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{ height: `600px`, borderRadius: '0.5rem' }}
                      className='map-canvas'
                      id='map-custom'
                    />
                  }
                  mapElement={
                    <div style={{ height: `100%`, borderRadius: 'inherit' }} />
                  }
                />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const labelStyle = {
  margin: '5px',
  padding: '5px',
  borderRadius: '50%',
};

const markerStyle = {
  color: '#fff',
  boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',
  borderRadius: '50%',
  fontSize: '16px',
  padding: '10px',
};

export default Google;
