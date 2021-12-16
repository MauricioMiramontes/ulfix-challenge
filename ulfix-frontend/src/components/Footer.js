import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'

function Footer (props) {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md='4'>
            <h1 className='title'>Ulfix Challenge</h1>
          </Col>
          <Col md='3'>
            <Nav>
              <NavItem>
                <NavLink to='/' tag={Link}>
                  {props.Language === 'es' ? <>Lista de Usuarios</> : <>User List</>}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/' tag={Link}>
                  {props.Language === 'es' ? <>Contacto</> : <>Contact</>}
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md='5'>
            {
              props.Language === 'es'
                ? <>
                    <h4 className='title'>Estilos y diseño creados por Creative Tim</h4>
                    <h5 className='title'>Contacto Creative Tim:</h5>
                  </>
                : <>
                    <h4 className='title'>Style and design created by Creative Tim</h4>
                    <h5 className='title'>Contact Creative Tim:</h5>
                  </>
            }
            <div className='btn-wrapper profile'>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://twitter.com/creativetim'
                id='tooltip622135962'
                target='_blank'
              >
                <i className='fab fa-twitter' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip622135962'>
                Follow us
              </UncontrolledTooltip>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://www.facebook.com/creativetim'
                id='tooltip230450801'
                target='_blank'
              >
                <i className='fab fa-facebook-square' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip230450801'>
                Like us
              </UncontrolledTooltip>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://www.creative-tim.com/'
                id='tooltip318450378'
                target='_blank'
              >
                <i className='fab fa-dribbble' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip318450378'>
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
