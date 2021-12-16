import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import SignIn from '../../views/SignIn'

test('renders Navbar with default props in spanish', () => {
  // Change props here
  const props = {
    Language: 'es',
    changeLanguage: (e) => { console.log('Attempted to change Language to' + e) },
    isAuthenticated: false,
    setIsAuthenticated: () => { console.log('Logout Button Click') },
    setUserData: () => { console.log('Attempted to set User Data') },
    setAuthToken: () => { console.log('Attempted to set Auth Token') }
  }
  // Inside a BrowserRouter, render the component
  const component = render(<BrowserRouter><SignIn {...props} /></BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const SignInHTML = component.container
  const signinButton = component.getAllByText('Iniciar Sesion')[1]

  // console.log(SignInHTML)
})
