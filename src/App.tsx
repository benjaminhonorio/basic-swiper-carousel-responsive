import { useCallback, useState } from 'react'
import './App.css'
import logo from './logo.svg'

export const useCounter = () => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount(x => x + 1), [])
  return { count, increment }
}

function App() {
  const { count, increment } = useCounter()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={increment}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
