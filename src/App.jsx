import { useState } from 'react'
import './App.css'
import text from './data'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  const [textData, setTextData] = useState([])
  // console.log(textData)

  function handleSubmit(e) {
    e.preventDefault()
    let amount = Number(count)
    // console.log(typeof amount)
    if(count <= 0) {
      amount = 1
    } else if(count > 10) {
      amount = 0
    }
    setTextData(text.slice(0, amount))
  }

  return (
    <section className='container'>
     <h1>Tired of boring lorem ipsum?</h1>
     <form onSubmit={handleSubmit}>
      <label htmlFor='number'>Paragraphs:</label>
      <input id='number' type="number" onChange={(e) => setCount(e.target.value)} />
      <button className='btn btn-primary btn-sm ms-3'>Generate</button>
        {
          textData.map((text, index) => {
            return (
              <article key={index}>{text}</article>
            )
          })
        }
     </form>
    </section>
  )
}

export default App
