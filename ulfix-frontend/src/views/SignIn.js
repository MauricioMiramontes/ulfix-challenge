import { useState } from 'react'
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
  FormGroup,
  Label,
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
import FollowSquares from '../components/Animations/FollowSquares.js'

function SignIn (props) {
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  // Estado inicial del formulario
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const login = (e) => {
    fetch('http://localhost:3001/auth/signin', {
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
                  <Card className='card-register'>
                    <CardHeader>
                      <CardImg
                        alt='...'
                        src={require('../assets/img/square-purple-1.png')}
                      />
                      <CardTitle tag='h4'>
                        Log In
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className='form'>
                        <InputGroup
                          className={classnames({
                            'input-group-focus': emailFocus
                          })}
                        >
                          <Input
                            placeholder='Email'
                            type='text'
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
                        <FormGroup className='text-left mt-4 ml-1'>
                          <Label check>

                            {
                              props.lenguage === 'es'
                                ? <>¿No tienes cuenta aún?{' '}</>
                                : <>Not registered yet?{' '}</>
                            }
                            <a
                              href='#Mauricio'
                              onClick={(e) => {
                                e.preventDefault()
                                navigate('/sign-up')
                              }}
                            >
                              {
                                props.lenguage === 'es'
                                  ? <>Registrate</>
                                  : <>Sign Up{' '}</>
                              }
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className='btn-round'
                        color='primary'
                        size='lg'
                        onClick={(e) => login(e)}
                      >
                        {props.lenguage === 'es' ? <>Iniciar Sesion</> : <>Login</>}
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className='register-bg' />
              <FollowSquares />
            </Container>
          </div>
        </div>
        <Footer lenguage={props.lenguage} />
      </div>
    </>
  )
}

export default SignIn
