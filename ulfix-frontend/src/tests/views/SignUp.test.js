import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import SignUp from '../../views/SignUp'

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
  const component = render(<BrowserRouter><SignUp {...props} /></BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const SignUpHTML = component.container
  const signupButton = component.getAllByText('Crear cuenta')

  // console.log(SignInHTML)
})