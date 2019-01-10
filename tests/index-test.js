import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Pagination from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a default fake message', () => {
    render(<Pagination />, node, () => {
      expect(node.innerHTML).toContain('pagination here')
    })
  })
})
