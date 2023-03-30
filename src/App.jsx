import React, {useState} from 'react'
import './App.css';

import primo from './primo'
import multiple from './multiple'
import Result from './result';
import Serie from './serie'
import Form from './form'

function App() {

  const [serie, setSerie] = useState(0)
  const [primos, setPrimos] = useState([])
  const [multiplos, setMultiplos] = useState([])


  const getSerie = (data) => {
    let serie = new Serie(data)
    setMultiplos(serie.getMultiplos())
    setPrimos(serie.getPrimos())

    // setPrimos(primo(number))
    // setMultiplos(multiple(number))
  }

  return (
    <div className="App">
      <div>
        <h2>Calcular serie</h2>

        <Form onSubmit={getSerie}/>

        <div className="result">
          <div>
            <p>Primos</p>
            <ul>
              { (primos.length > 0 ) ? <Result serie={primos} /> : null }
            </ul>
          </div>

          <div>
            <p>Multiplos</p>
            <ul>
              { (multiplos.length > 0 ) ? <Result serie={multiplos} /> : null }
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
