import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, prettyDOM } from '@testing-library/react'

import Home from '../../views/Home'

test('renders Navbar with default props in spanish', () => {
  // Change props here
  const props = {
    Language: 'es',
    changeLanguage: (e) => { console.log('Attempted to change Language to' + e) },
    isAuthenticated: false,
    setIsAuthenticated: () => { console.log('Logout Button Click') },
  }
  // Inside a BrowserRouter, render the component
  const component = render(<BrowserRouter><Home {...props} /></BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const HomeHTML = component.container

  // console.log(prettyDOM(HomeHTML))
})
