import './App.css'
import React, {useEffect, useState} from 'react';
import Card from './components/Card' 
import Navbar from './components/navbar/navbar';

const mhFacts = [
  
  'Mental Health issues can affect anyone, regardless of age, race and economic or social class and, due to demographic and lifestyle factors, these are expected to rise.',
  
  'WOMEN ARE MORE LIKELY TO SEEK MENTAL HEALTH TREATMENT THAN MEN.',
  
  'STIGMA SURROUNDING MENTAL HEALTH REMAINS ONE OF ITS BIGGEST BARRIERS'
]

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
      // console.log(res)
      setQuote(res[0].quote)

    })
    .catch((err) => {
      console.error(err)
      
    })
      }

      function getNewFact(){
        fetch(mhFacts).then(() =>{
          console.log(mhFacts[0])
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
    <li>https://www.imalive.org/</li>
    
    
  </section>
    </div>
  );
  
  }
  
  export default App;  
        


