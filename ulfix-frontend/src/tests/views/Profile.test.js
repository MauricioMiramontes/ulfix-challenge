import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import Profile from '../../views/Profile'

test('renders Navbar with default props in spanish', () => {
  // Change props here
  const props = {
    Language: 'es',
    changeLanguage: (e) => { console.log('Attempted to change Language to' + e) },
    isAuthenticated: false,
    setIsAuthenticated: () => { console.log('Logout Button Click') },
    userData: {
      id: '1',
      name: 'Jhon Doe',
      email: 'test@email.com'
    },
    authToken: 'TestToken'
  }
  // Inside a BrowserRouter, render the component
  const component = render(<BrowserRouter><Profile {...props} /></BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const ProfileHTML = component.container
  const EditButton = component.getByText('Editar')
  const DeleteButton = component.getAllByText('Eliminar')

  //console.log(prettyDOM(ProfileHTML))
})
