import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM } from '@testing-library/react'

import PageHeader from '../../components/PageHeader'

test('renders Navbar with default props in spanish', () => {
  // Change props here
  const props = {
    Language: 'es'
  }

  // Inside a BrowserRouter, render the component 
  const component = render(<PageHeader {...props} />)

  // Handler for function
  const mockHandler = jest.fn()

  // Components
  const HeaderHTML = component.container.querySelector('div')

  // console.log(prettyDOM(HeaderHTML))
})
