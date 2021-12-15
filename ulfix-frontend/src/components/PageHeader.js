import React from 'react'

// reactstrap components
import {
  Container,
  Row,
  Col
} from 'reactstrap'

function PageHeader (props) {
  return (
    <div className='page-header header-filter'>
      <div className='squares square1' />
      <div className='squares square2' />
      <div className='squares square3' />
      <div className='squares square4' />
      <div className='squares square5' />
      <div className='squares square6' />
      <div className='squares square7' />
      <Container>
        <div className='content-center'>
          <Row className='row-grid justify-content-between align-items-center text-left'>
            <Col lg='6' md='6'>
              <h1 className='text-white'>
                {props.lenguage === 'es'
                  ? <>Sistema CRUD creado por Mauricio Miramontes</>
                  : <>CRUD System made by Mauricio Miramontes</>}
              </h1>
            </Col>
            <Col lg='4' md='5'>
              <img
                alt='perfil'
                className='img-fluid rounded-circle'
                src={require('../assets/img/computer.png')}
                style={{ width: '250px', height: '250px' }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader
