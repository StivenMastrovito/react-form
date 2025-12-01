import { use, useState } from 'react'
import './App.css'

function App() {
  const [listaArticoli, setListaArticoli] = useState([
    "Divano", "Letto"
  ])

  const [curArticolo, setCurArticolo] = useState("");

  return (
    <>
      <h1>LISTA ARTICOLI</h1>
      <ul>
        {listaArticoli.map((articolo, index) => (
          <li key={index}>{listaArticoli[index]}</li>
        ))}
      </ul>
      
      {/* FORM */}
      <form onSubmit={(event) => {
        event.preventDefault();
        const copyListaArticoli = [curArticolo, ...listaArticoli];
        setListaArticoli(copyListaArticoli);
        setCurArticolo("");
        console.log(listaArticoli);

      }}>
        <div className='input'>
          <label htmlFor="">Inserisci articolo</label>
          <input type="text" placeholder='Inserisci un articolo...' value={curArticolo} onChange={(event) => {
            setCurArticolo(event.target.value);
          }} />
          <button className='submit' type='submit'>AGGIUNGI</button>
        </div>
      </form>
    </>
  )
}

export default App
