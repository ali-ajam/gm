import React, { Fragment } from 'react';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={header}>
          <Container fluid>
            <div style={headerBody}>
              <Row>
                <Col md='6' xl='3'>
                  <Card style={card}>
                    <CardBody>
                      <Row>
                        <div className='col'>
                          <CardTitle
                            tag='h6'
                            className='text-uppercase text-muted mb-0'
                          >
                            Total traffic
                          </CardTitle>
                          <span className='h3 font-weight-bold mb-0'>
                            350,897
                          </span>
                        </div>
                      </Row>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>3.48%</span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='6' xl='3'>
                  <Card style={card}>
                    <CardBody>
                      <Row>
                        <div className='col'>
                          <CardTitle
                            tag='h6'
                            className='text-uppercase text-muted mb-0'
                          >
                            New users
                          </CardTitle>
                          <span className='h3 font-weight-bold mb-0'>
                            2,356
                          </span>
                        </div>
                      </Row>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>3.48%</span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='6' xl='3'>
                  <Card style={card}>
                    <CardBody>
                      <Row>
                        <div className='col'>
                          <CardTitle
                            tag='h6'
                            className='text-uppercase text-muted mb-0'
                          >
                            Sales
                          </CardTitle>
                          <span className='h3 font-weight-bold mb-0'>924</span>
                        </div>
                      </Row>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>3.48%</span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='6' xl='3'>
                  <Card style={card}>
                    <CardBody>
                      <Row>
                        <div className='col'>
                          <CardTitle
                            tag='h6'
                            className='text-uppercase text-muted mb-0'
                          >
                            Performance
                          </CardTitle>
                          <span className='h3 font-weight-bold mb-0'>
                            49,65%
                          </span>
                        </div>
                      </Row>
                      <p className='mt-3 mb-0 text-sm'>
                        <span className='text-success mr-2'>3.48%</span>
                        <span className='text-nowrap'>Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

const header = {
  backgroundColor: '#11cdef',
  paddingBottom: '4.5rem',
  paddingTop: '4.5rem',
  position: 'relative',
};

const headerBody = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.5',
  color: 'rgb(82, 95, 127)',
  textAlign: 'left',
};

const card = {
  marginBottom: '30px',
  boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',
  border: '0',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.5',
  color: 'rgb(82, 95, 127)',
  textAlign: 'left',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '0',
  backgroundColor: '#fff',
  backgroundClip: 'borderBox',
  borderRadius: '0.5rem',
};

export default Header;
