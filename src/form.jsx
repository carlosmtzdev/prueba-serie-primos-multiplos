
function Form() {
  return (
    <form  onSubmit={e => handleSubmit(e)}>
      <label>Numero:</label>
      <input type="number" name="" id="" value={number} onChange={handleNumber} />
      <button className="button button__save" type="submit">Calcular</button>
    </form>
  )
}

export default Form
