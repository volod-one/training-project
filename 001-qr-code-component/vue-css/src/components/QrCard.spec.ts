import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import QrCard from './QrCard.vue'

describe('QrCard', () => {
  it('renders the QR code image with correct alt text', () => {
    render(QrCard)
    expect(screen.getByAltText('QR code to visit Frontend Mentor')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(QrCard)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Improve your front-end skills by building projects',
    )
  })

  it('renders the description text', () => {
    render(QrCard)
    expect(screen.getByText(/Scan the QR code/)).toBeInTheDocument()
  })
})
