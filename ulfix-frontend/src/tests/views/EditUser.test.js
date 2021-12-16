import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import EditUser from '../../views/EditUser'

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
    setUserData: () => { console.log('Attempted to set User Data') },
    authToken: 'TestToken',
    setAuthToken: () => { console.log('Attempted to set Auth Token') }
  }
  // Inside a BrowserRouter, render the component
  const component = render(<BrowserRouter><EditUser {...props} /></BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const EditHTML = component.container.querySelector('Card')
  const EditButtonHTML = component.container.querySelector('Button')

  // console.log(prettyDOM(EditHTML))
})
