import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM } from '@testing-library/react'

import UserTable from '../../components/UserTable'

test('renders the user table with test user data in spanish', () => {
  // Change props here
  const props = {
    users: [
      {
        name: 'Jhon Doe',
        email: 'test@email.com'
      }
    ],
    Language: 'es'
  }

  // Inside a BrowserRouter, render the component 
  const component = render(<UserTable {...props} />)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const TableHTML = component.container.querySelector('Table')

  // console.log(prettyDOM(TableHTML))
})
