import React, {useState} from 'react'

function Form({onSubmit}) {

  const [number, setNumber] = useState(0)
  
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(number)
  }

  return (
    <form  onSubmit={handleSubmit}>
      <label>Numero:</label>
      <input type="number" name="" id="" value={number} onChange={handleNumber} />
      <button className="button button__save" type="submit">Calcular</button>
    </form>
  )
}

export default Form
