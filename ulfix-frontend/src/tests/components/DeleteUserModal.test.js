import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM } from '@testing-library/react'

import DeleteModal from '../../components/DeleteUserModal'

test('renders the user table with test user data in spanish', () => {
  // Change props here
  const props = {
    deleteModal: true,
    setDeleteModal: (e) => console.log('Closing modal'),
    deleteUser: () => console.log('Deleting user'),
    Language: 'es'
  }

  // Inside a BrowserRouter, render the component
  const component = render(<DeleteModal {...props} />)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const ModalHTML = component.container.querySelector('Modal')

  //console.log(prettyDOM(ModalHTML))
})
