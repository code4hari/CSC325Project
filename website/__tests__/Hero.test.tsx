import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  beforeEach(() => {
    
    render(<Hero />)
  })

  it('renders a heading (headline)', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders a subheading', () => {
    const subheading = screen.getByText(/You're on a mission to build exceptional tech teams/i)
    expect(subheading).toBeInTheDocument()
  })

  it('renders a call-to-action button', () => {
    const ctaButton = screen.getByRole('button', { name: /Go now/i })
    expect(ctaButton).toBeInTheDocument()
  })

  it('renders a form for user input', () => {
    
    const emailInput = screen.getByRole('textbox', { name: /Enter your email address/i })
    expect(emailInput).toBeInTheDocument()
  })
})