import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM } from '@testing-library/react'

import Footer from '../../components/Footer.js'

test('renders Footer with default props in spanish', () => {
  // Change props here
  const props = {
    Language: 'es',
  }

  // Inside a BrowserRouter, render the component 
  const component = render(<BrowserRouter><Footer {...props} /></ BrowserRouter>)

  // Components
  const FooterHTML = component.container.querySelector('footer')

  // console.log(prettyDOM(NavHTML))
})
