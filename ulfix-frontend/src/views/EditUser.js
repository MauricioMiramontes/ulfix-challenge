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

function EditUser (props) {
  const [emailFocus, setEmailFocus] = useState(false)
  const [nameFocus, setNameFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  // Estado inicial del formulario
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const navigate = useNavigate()

  const editUser = (e) => {
    fetch(`http://localhost:3001/users/${props.userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.authToken}`
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(userData => {
        props.setAuthToken(userData.accessToken)
        props.setUserData(userData.user)
        console.log(userData)
        navigate('/profile')
      })
      .catch(error => console.log(error))
    console.log(formData)
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
                <Col className='offset-lg-3 offset-md-3' lg='6' md='6'>
                  <Card className='card-register'>
                    <CardHeader>
                      <CardImg
                        alt='...'
                        src={require('../assets/img/square-purple-1.png')}
                      />
                      <CardTitle tag='h4'>
                        {props.lenguage === 'es' ? <>Editar</> : <>edit</>}
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
                            placeholder={props.userData.name}
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
                            placeholder={props.userData.email}
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
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className='btn-round'
                        color='primary'
                        size='lg'
                        onClick={(e) => editUser(e)}
                      >
                        {props.lenguage === 'es' ? <>Actualizar Informacion</> : <>Update Info</>}
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer lenguage={props.lenguage} />
      </div>
    </>
  )
}

export default EditUser
