import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'

import NavbarComp from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import DeleteModal from '../components/DeleteUserModal.js'

function Profile (props) {
  const [user, setUser] = useState({})
  const [deleteModal, setDeleteModal] = useState(false)
  const navigate = useNavigate()

  // API Call - Get User
  useEffect(() => {
    // Se hace la llamada a la API para recolectar los datos de usurios
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

  // Da formato a la fecha antes de mostrarla
  const formatDate = (date) => {
    const objDate = new Date(date)
    const formatedDate = objDate.toLocaleString('es-MX', { timezone: 'GMT-5', hour12: true, timeStyle: 'short', dateStyle: 'medium' })

    return formatedDate
  }

  const deleteUser = () => {
    // Se hace la llamada a la API para recolectar los datos de usurios
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
        lenguage={props.lenguage}
        changeLenguage={props.changeLenguage}
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
      />
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={(e) => setDeleteModal(e)}
        deleteUser={() => deleteUser()}
        lenguage={props.lenguage}
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
                <Col lg='6' md='6'>
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
                    Nam condimentum est sit amet velit tincidunt interdum. Aliquam erat volutpat.
                    Vestibulum interdum, tellus ut dapibus condimentum, metus quam sodales quam, at auctor urna risus sed metus.
                    Duis aliquam risus a faucibus posuere. Cras molestie convallis nulla sed accumsan.
                    Nullam a nunc eget justo consequat luctus quis at enim.
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
                    <CardHeader className='justify-content-center'>
                      <img
                        alt='...'
                        className='img-center img-fluid rounded-circle'
                        src={require('../assets/img/mike.jpg')}
                      />
                      <h2 className='title ml-3'>{user.name}</h2>
                    </CardHeader>
                    <CardBody>
                      <Row className='ml-4'>
                        <h5 className='title ml-5'>Email: {user.email}</h5>
                        <h5 className='title'>
                          {
                            props.lenguage === 'es'
                              ? <>Ultima Actualizacion: </>
                              : <>Last Update: </>
                          }
                          {formatDate(user.updated)}
                        </h5>
                      </Row>
                      <Row className='ml-2'>
                        <Col md='6' sm='6'>
                          <Button
                            color='danger'
                            onClick={() => setDeleteModal(!deleteModal)}
                          >
                            {
                              props.lenguage === 'es'
                                ? <>Eliminar</>
                                : <>Delete</>
                            }
                          </Button>
                        </Col>
                        <Col md='6' sm='6'>
                          <Button
                            color='warning'
                            onClick={() => navigate('/edit-user')}
                          >
                            {
                              props.lenguage === 'es'
                                ? <>Editar</>
                                : <>Edit</>
                            }
                          </Button>
                        </Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <Footer lenguage={props.lenguage} />
      </div>
    </>
  )
}

export default Profile
