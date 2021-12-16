import { useState, useEffect } from 'react'

// test data
import data from '../test_data/user_data.js'

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

    console.log(data)
  }, [])

  return (
    <>
      <NavbarComp
        lenguage={props.lenguage}
        changeLenguage={props.changeLenguage}
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
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
            <h1>
              {props.lenguage === 'es' ? <>Lista de usuarios</> : <>User List</>}
            </h1>
            <hr className='line-info' />
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
