import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '@/stories/Button'
import { expect } from '@storybook/test'

describe('BUTTON', () => {
  it('render default button', () => {
    render(<Button label='abc' />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button.classList.contains('btn')).toBe(true)
  })

  it('render danger button', () => {
    render(<Button label='abc' danger={true} />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button.classList.contains('btn')).toBe(true)
    expect(button.classList.contains('btn-danger')).toBe(true)
  })

  it('render button size', () => {
    render(<Button label='abc' size='small' />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button.classList.contains('btn')).toBe(true)
    expect(button.classList.contains('btn-sm')).toBe(true)
  })
})