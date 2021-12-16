import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Table,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import NavbarComp from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import DeleteModal from '../components/DeleteUserModal.js'

function Profile (props) {
  const [user, setUser] = useState({})
  const [deleteModal, setDeleteModal] = useState(false)
  const [tabs, setTabs] = useState(1)
  const navigate = useNavigate()

  // API Call - Get User
  useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/sign-in')
    }

    fetch(`http://localhost:3001/users/${props.userData.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.authToken}`
      }
    })
      .then(response => response.json())
      .then(dataUser => setUser(dataUser))
      .catch(error => console.log(error))
  }, [])

  const deleteUser = () => {
    fetch(`http://localhost:3001/users/${props.userData.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.authToken}`
      }
    })
      .then(response => {
        console.log(response.text())
        props.setIsAuthenticated(false)
        navigate('/sign-in')
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <NavbarComp
        Language={props.Language}
        changeLanguage={props.changeLanguage}
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
        active='profile'
      />
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={(e) => setDeleteModal(e)}
        deleteUser={() => deleteUser()}
        Language={props.Language}
      />
      <div className='wrapper index-page'>
        <div className='page-header'>
          <img
            alt='...'
            className='dots'
            src={require('../assets/img/dots.png')}
          />
          <img
            alt='...'
            className='path'
            src={require('../assets/img/path4.png')}
          />
          <section className='section section-coins'>
            <Container className='align-items-center'>
              <Row>
                <Col lg='8' md='6'>
                  <h1 className='profile-title text-left'>{user.name}</h1>
                  <p className='profile-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer at enim nec nunc aliquet ullamcorper eget vitae neque.
                    Cras condimentum sagittis metus ut bibendum.
                    In ultricies sapien eu bibendum lacinia.
                    Nunc suscipit dui a mauris auctor maximus.
                    Sed eget orci ac ante pretium auctor.
                    Curabitur sit amet justo a risus aliquam tristique eu eu eros.
                    Proin at nunc a leo tempor vulputate et sit amet elit. Nulla ac porta lectus.
                    Fusce condimentum erat mauris, ut lobortis lacus rhoncus in.
                    Pellentesque erat nisl, congue non euismod ut, eleifend a mi.
                  </p>
                  <div className='btn-wrapper profile pt-3'>
                    <Button
                      className='btn-icon btn-round'
                      color='twitter'
                      href='https://twitter.com'
                      id='tooltip639225725'
                      target='_blank'
                    >
                      <i className='fab fa-twitter' />
                    </Button>
                    <UncontrolledTooltip delay={0} target='tooltip639225725'>
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className='btn-icon btn-round'
                      color='facebook'
                      href='https://www.facebook.com/'
                      id='tooltip982846143'
                      target='_blank'
                    >
                      <i className='fab fa-facebook-square' />
                    </Button>
                    <UncontrolledTooltip delay={0} target='tooltip982846143'>
                      Like us
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className='ml-auto mr-auto' lg='4' md='6'>
                  <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid rounded-circle'
                        src={require('../assets/img/mike.jpg')}
                      />
                      <h3 className='title'>{user.name}</h3>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className='nav-tabs-primary justify-content-center'
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: tabs === 1
                            })}
                            onClick={(e) => {
                              e.preventDefault()
                              setTabs(1)
                            }}
                            href='#pablo'
                          >
                            {props.Language === 'es' ? 'Tecnologías' : 'Tecnologies'}
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: tabs === 2
                            })}
                            onClick={(e) => {
                              e.preventDefault()
                              setTabs(2)
                            }}
                            href='#pablo'
                          >
                            {props.Language === 'es' ? 'Contacto' : 'Contact'}
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className='tab-subcategories'
                        activeTab={'tab' + tabs}
                      >
                        <TabPane tabId='tab1'>
                          <Table className='tablesorter'>
                            <tbody>
                              <tr>
                                <td style={{ textAlign: 'center' }}>
                                  <i className='fab fa-react' />{' '}React
                                </td>
                              </tr>
                              <tr>
                                <td style={{ textAlign: 'center' }}>
                                  <i className='fas fa-server' />{' '}Express
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId='tab2'>
                          <Table className='tablesorter'>
                            <tbody>
                              <tr>
                                <td style={{ textAlign: 'center' }}>
                                  <i className='fas fa-envelope' />{' ' + user.email}
                                </td>
                              </tr>
                              <tr>
                                <td style={{ textAlign: 'center' }}>
                                  <i className='fas fa-phone' />{' '}555555555
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={{ size: '2', offset: '8' }} sm='2'>
                  <Button
                    color='danger'
                    onClick={() => setDeleteModal(!deleteModal)}
                  >
                    {
                      props.Language === 'es'
                        ? <>Eliminar</>
                        : <>Delete</>
                    }
                  </Button>
                </Col>
                <Col md='2' sm='2'>
                  <Button
                    color='warning'
                    onClick={() => navigate('/edit-user')}
                  >
                    {
                      props.Language === 'es'
                        ? <>Editar</>
                        : <>Edit</>
                    }
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <Footer Language={props.Language} />
      </div>
    </>
  )
}

export default Profile
