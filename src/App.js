import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const apiUrl = 'https://api.adviceslip.com/advice';

//{"slip": { "id": 33, "advice": "Don't let the bastards grind you down."}}
function App() {
  const [advice, setAdvice] = useState('Please click button to see your advice!!')
  const [isLoading, setIsLoading] = useState(false);

  const handleQuoteGenerate = async () => {
    setIsLoading(true)
    const response = await axios.get(apiUrl)
    setAdvice(response.data.slip.advice)
    setIsLoading(false)
    // console.log(response.data);
    
  }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <section className='quote-container'>
        { isLoading ? ( 
          <p className='quote'>...</p>
        ) : (
        <blockquote className='quote'>{advice}</blockquote>
        )}
      </section>
      <button className='default-btn' onClick={handleQuoteGenerate}> Give Me Advice</button>

    </div>
  );
}

export default App;
