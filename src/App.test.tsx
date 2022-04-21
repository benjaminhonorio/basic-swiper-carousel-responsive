import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App, { useCounter } from './App'

describe('useCounter', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })
})

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })

  it('should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
  })
})

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-typeof-globalthis
// if act is not needed use false
globalThis.IS_REACT_ACT_ENVIRONMENT = true
