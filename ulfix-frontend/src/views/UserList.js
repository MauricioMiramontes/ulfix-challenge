import { useState, useEffect } from 'react'

// Components
import NavbarComp from '../components/Navbar.js'
import Footer from '../components/Footer'
import UserTable from '../components/UserTable.js'

// Components de reactstrap
import {
  Container,
  Row
} from 'reactstrap'

function UserList (props) {
  const [users, setUsers] = useState([])

  // API Call - Get Users
  useEffect(() => {
    // Se hace la llamada a la API para recolectar los datos de usurios
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(dataUsers => setUsers(dataUsers))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <NavbarComp
        lenguage={props.lenguage}
        changeLenguage={props.changeLenguage}
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
        active='user-list'
      />
      <div className='wrapper index-page'>
        <img
          alt='...'
          className='path'
          src={require('../assets/img/path3.png')}
        />
        <img
          alt='...'
          className='path path13'
          src={require('../assets/img/path1.png')}
        />
        <section className='section section-coins'>
          <Container>
            <Row>
              <h1>
                {props.lenguage === 'es' ? <>Lista de usuarios</> : <>User List</>}<br />
                <hr className='line-primary' />
              </h1>
            </Row>
            <Row>
              <UserTable users={users} lenguage={props.lenguage} />
            </Row>
          </Container>
        </section>
      </div>
      <Footer lenguage={props.lenguage} />
    </>
  )
}

export default UserList
