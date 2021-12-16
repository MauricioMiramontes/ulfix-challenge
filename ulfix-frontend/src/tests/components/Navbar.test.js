import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import Navbar from '../../components/Navbar.js'

test('renders Navbar with default props in spanish', () => {
  // Change props here
  const props = {
    Language: 'es',
    changeLanguage: () => { console.log('Attempted to change Language') },
    isAuthenticated: false,
    setIsAuthenticated: () => { console.log('Logout Button Click') },
    active: 'home'
  }

  // Inside a BrowserRouter, render the component 
  const component = render(<BrowserRouter><Navbar {...props} /></ BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const NavHTML = component.container.querySelector('Nav')
  const LoginButton = component.getByText('Iniciar Sesion')
  const EnglishButton = component.getByText('English')
  const SpanishButton = component.getByText('Español')

  // console.log(prettyDOM(NavHTML))
})

test('renders Navbar with default props in spanish, with user logged in', () => {
  // Change props here
  const props = {
    Language: 'es',
    changeLanguage: (e) => { console.log(`Attempted to change Language to ${e}`) },
    isAuthenticated: true,
    setIsAuthenticated: (e) => { console.log('Logout Button Click') },
    active: 'home'
  }

  // Inside a BrowserRouter, render the component
  const component = render(<BrowserRouter><Navbar {...props} /></BrowserRouter>)

  // Components
  const NavHTML = component.container.querySelector('Nav')
  const LogoutButton = component.getByText('Cerrar Sesion')
  const EnglishButton = component.getByText('English')
  const SpanishButton = component.getByText('Español')

  // fireEvent.click(EnglishButton)
  // console.log(prettyDOM(NavHTML))
})
