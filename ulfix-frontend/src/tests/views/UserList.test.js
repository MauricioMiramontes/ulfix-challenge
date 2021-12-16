import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM } from '@testing-library/react'

import UserList from '../../views/UserList'

test('renders the user table with test user data in spanish', () => {
  // Change props here
  const props = {
    Language: 'es',
    changeLanguage: (e) => console.log('Attempting to change language to: ' + e.target.value),
    isAuthenticated: false,
    setIsAuthenticated: (e) => console.log('Attempting to change language to: ' + e.target.value),
  }

  // Inside a BrowserRouter, render the component
  const component = render(<BrowserRouter><UserList {...props} /></BrowserRouter>)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const UserListHTML = component.container
  console.log(prettyDOM(UserListHTML))
})
