import './App.css'
import React, {useEffect, useState} from 'react';
import Card from './components/Card' 


const mhFacts = [
  
  'Mental Health issues can affect anyone, regardless of age, race and economic or social class and, due to demographic and lifestyle factors, these are expected to rise.',
  
  'WOMEN ARE MORE LIKELY TO SEEK MENTAL HEALTH TREATMENT THAN MEN.',
  
  'STIGMA SURROUNDING MENTAL HEALTH REMAINS ONE OF ITS BIGGEST BARRIERS'
]

const initialState = {count: 0}

function counter(state, action) {
  switch (action.count) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error()
  }
}


function App() {

  const URL = 'https://lucifer-quotes.vercel.app/api/quotes'
  const [quote, setQuote] = useState('')
  const [fact, setFact] = useState([])

  useEffect(() => {
    getNewQuote()
    getNewFact()
	}, [])

      function getNewQuote(){
         fetch(URL).then((res) => res.json()).then((res) => {
      setQuote(res[0].quote)
      counter()

    })
    .catch((err) => {
      console.error(err)
      
    })
      }

      function getNewFact(){
        fetch(mhFacts).then(() =>{
          const randFact = Math.random()
          console.log(mhFacts[randFact])
          setFact(mhFacts[0])
        })
      }
      

  return (
    <div className="App">

      <h1>DeTales</h1>
      <p>Is your perspective a positive contriubtiton to your life?</p>

    {/* <Navbar /> */}

    {<Card 
    header='Mental Health Facts'
    title={fact}
    getFact={getNewFact}
    content={quote}
    getQuote={getNewQuote}
    />}
    
  <section>
    <h1>Resources</h1>
    <li>< a href = 'https://www.imalive.org/'>Online Crisis Chat</a></li>
    
    
  </section>
    </div>
  );
  
  }
  
  export default App
        


