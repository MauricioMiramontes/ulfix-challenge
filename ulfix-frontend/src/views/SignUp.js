import { useState, useEffect } from 'react'
import classnames from 'classnames'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap'

import { useNavigate } from 'react-router-dom'

// core components
import NavbarComp from '../components/Navbar.js'
import Footer from '../components/Footer.js'

function SignUp (props) {
  const [squarePerspective, setSquarePerspective] = useState('')
  const [emailFocus, setEmailFocus] = useState(false)
  const [nameFocus, setNameFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  // Estado inicial del formulario
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.toggle('register-page')
    document.documentElement.addEventListener('mousemove', followCursor)
    // Se especifica como limpiar este efecto
    return function cleanup () {
      document.body.classList.toggle('register-page')
      document.documentElement.removeEventListener('mousemove', followCursor)
    }
  }, [])

  const followCursor = (event) => {
    const posX = event.clientX - window.innerWidth / 2
    const posY = event.clientY - window.innerWidth / 6
    setSquarePerspective(
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)'
    )
  }

  const signup = (e) => {
    fetch('http://localhost:3001/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(userData => {
        props.setAuthToken(userData.accessToken)
        props.setUserData(userData.user)
        props.setIsAuthenticated(true)
        console.log(userData)
        navigate('/')
      })
      .catch(error => console.log(error))
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <NavbarComp
        lenguage={props.lenguage}
        changeLenguage={props.changeLenguage}
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
      />
      <div className='wrapper'>
        <div className='page-header'>
          <div className='content'>
            <Container>
              <Row>
                <Col className='offset-lg-0 offset-md-3' lg='5' md='6'>
                  <div
                    className='square square-7'
                    id='square7'
                    style={{ transform: squarePerspective }}
                  />
                  <div
                    className='square square-8'
                    id='square8'
                    style={{ transform: squarePerspective }}
                  />
                  <Card className='card-register'>
                    <CardHeader>
                      <CardImg
                        alt='...'
                        src={require('../assets/img/square-purple-1.png')}
                      />
                      <CardTitle tag='h4'>
                        Sign Up
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className='form'>
                        <InputGroup
                          className={classnames({
                            'input-group-focus': nameFocus
                          })}
                        >
                          <Input
                            placeholder='Name'
                            type='text'
                            name='name'
                            onFocus={(e) => setNameFocus(true)}
                            onBlur={(e) => setNameFocus(false)}
                            onChange={(e) => handleChange(e)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            'input-group-focus': emailFocus
                          })}
                        >
                          <Input
                            placeholder='Email'
                            type='email'
                            name='email'
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            onChange={(e) => handleChange(e)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            'input-group-focus': passwordFocus
                          })}
                        >
                          <Input
                            placeholder='Password'
                            type='password'
                            name='password'
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            onChange={(e) => handleChange(e)}
                          />
                        </InputGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className='btn-round'
                        color='primary'
                        size='lg'
                        onClick={(e) => signup(e)}
                      >
                        {props.lenguage === 'es' ? <>Crear cuenta</> : <>Sign Up</>}
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className='register-bg' />
              <div
                className='square square-1'
                id='square1'
                style={{ transform: squarePerspective }}
              />
              <div
                className='square square-2'
                id='square2'
                style={{ transform: squarePerspective }}
              />
              <div
                className='square square-3'
                id='square3'
                style={{ transform: squarePerspective }}
              />
              <div
                className='square square-4'
                id='square4'
                style={{ transform: squarePerspective }}
              />
              <div
                className='square square-5'
                id='square5'
                style={{ transform: squarePerspective }}
              />
              <div
                className='square square-6'
                id='square6'
                style={{ transform: squarePerspective }}
              />
            </Container>
          </div>
        </div>
        <Footer lenguage={props.lenguage} />
      </div>
    </>
  )
}

export default SignUp
