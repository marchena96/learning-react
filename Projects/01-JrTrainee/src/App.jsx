import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState('Valor del state');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
  }, [])

  return (
    <>
      <main>
        <h1> App Los Gatitos</h1>
        <p></p>
      </main>
    </>
  )
}

export default App
