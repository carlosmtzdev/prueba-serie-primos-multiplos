import React, {useState} from 'react'
import './App.css';

import primo from './primo'
import multiple from './multiple'
import Result from './result';
import Serie from './serie'

function App() {

  const [number, setNumber] = useState(0)
  const [primos, setPrimos] = useState([])
  const [multiplos, setMultiplos] = useState([])

  const handleNumber = (e) => {
    setNumber(e.target.value)
  }

  const getSerie = (e) => {
    e.preventDefault()

    let serie = new Serie(number)
    setMultiplos(serie.getMultiplos())
    setPrimos(serie.getPrimos())

    // setPrimos(primo(number))
    // setMultiplos(multiple(number))
  }

  return (
    <div className="App">
      <div>
        <h2>Calcular serie</h2>

        {/* <Form /> */}

        <form  onSubmit={getSerie}>
          <label>Numero:</label>
          <input type="number" name="" id="" value={number} onChange={handleNumber} />
          <button className="button button__save" type="submit">Calcular</button>
        </form>

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
