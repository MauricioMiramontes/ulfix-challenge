import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Componentes de Reactstrap
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'

function NavbarComp (props) {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent')
  const [collapseOpen, setCollapseOpen] = useState(false)
  const [collapseOut, setCollapseOut] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return function cleanup () {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  const changeColor = () => {
    if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
      setNavbarColor('bg-default')
    } else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
      setNavbarColor('navbar-transparent')
    }
  }

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen)
    document.documentElement.classList.toggle('nav-open')
  }

  const onCollapseExiting = () => {
    setCollapseOut('collapsing-out')
  }

  const onCollapseExited = () => {
    setCollapseOut('')
  }

  const logout = (e) => {
    props.setIsAuthenticated(false)
    navigate('/sign-in')
  }

  return (
    <>
      <Navbar className={'fixed-top ' + navbarColor} color-on-scroll='100' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand to='/' id='navbar-brand' tag={Link}>
              <span>Ulfix </span>
              Challenge
            </NavbarBrand>
            <UncontrolledTooltip placement='bottom' target='navbar-brand'>
              By Mauricio Miramontes
            </UncontrolledTooltip>
            <button
              aria-expanded={collapseOpen}
              className='navbar-toggler navbar-toggler'
              onClick={toggleCollapse}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          {/* Diseño responsivo */}
          <Collapse
            className={'justify-content-end ' + collapseOut}
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
          >
            <div className='navbar-collapse-header'>
              <Row>
                <Col className='collapse-brand' xs='6'>
                  <a href='/' onClick={(e) => e.preventDefault()}>
                    Ulfix Challenge
                  </a>
                </Col>
                <Col className='collapse-close text-right' xs='6'>
                  <button
                    aria-expanded={collapseOpen}
                    className='navbar-toggler'
                    onClick={toggleCollapse}
                  >
                    <i className='tim-icons icon-simple-remove' />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to='/user-list'
                >
                  {props.lenguage === 'es' ? <p>Lista Usuarios</p> : <p>User List</p>}
                </NavLink>
              </NavItem>
              {
                props.isAuthenticated
                  ? <NavItem>
                      <NavLink
                        tag={Link}
                        to='/profile'
                      >
                        {props.lenguage === 'es' ? <p>My Perfil</p> : <p>My Profile</p>}
                      </NavLink>
                    </NavItem>
                  : <> </>
              }

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#'
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className='fas fa-globe' />
                  {props.lenguage}
                </DropdownToggle>
                <DropdownMenu className='dropdown-with-icons'>
                  <DropdownItem
                    tag={Link}
                    to=''
                    onClick={(e) => {
                      e.preventDefault()
                      props.changeLenguage('en')
                    }}
                  >
                    English
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    to=''
                    onClick={(e) => {
                      e.preventDefault()
                      props.changeLenguage('es')
                    }}
                  >
                    Español
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {
                props.isAuthenticated
                  ? <NavItem>
                      <Button
                        className='nav-link d-none d-lg-block'
                        color='success'
                        onClick={(e) => logout(e)}
                      >
                        <i className='fas fa-sign-in-alt' />
                        {
                          props.lenguage === 'es'
                            ? <>Cerrar Sesion</>
                            : <>Log out</>
                        }
                      </Button>
                    </NavItem>
                  : <NavItem>
                      <Button
                        className='nav-link d-none d-lg-block'
                        color='success'
                        tag={Link}
                        to='/sign-in'
                      >
                        <i className='fas fa-sign-in-alt' />
                        {
                          props.lenguage === 'es'
                            ? <>Iniciar Sesion</>
                            : <>Log In</>
                        }
                      </Button>
                    </NavItem>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp
