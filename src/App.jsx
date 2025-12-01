import { use, useState } from 'react'
import './App.css'

function App() {
  const [listaArticoli, setListaArticoli] = useState([
    "Divano", "Letto"
  ])

  const [curArticolo, setCurArticolo] = useState("");

  const [overview, setOverview] = useState("d-none");
  const [errorMessageForm, setErrorMessageForm] = useState("d-none");


  return (
    <>
      <h1>LISTA ARTICOLI</h1>
      <ul>
        {listaArticoli.map((articolo, index) => (
          <li key={index}>{listaArticoli[index]} <button className='delete' onClick={() => {
            const copyListaArticoli = [...listaArticoli];
            copyListaArticoli.splice(index, 1);
            setListaArticoli(copyListaArticoli);
          }}>ELIMINA</button></li>
        ))}
      </ul>

      <button className='add' onClick={() => { setOverview("d-flex") }}>AGGIUNGI UN ARTICOLO</button>

      {/* FORM */}
      <form className={overview} onSubmit={(event) => {
        event.preventDefault();
        if (curArticolo.length > 2) {
          const copyListaArticoli = [curArticolo, ...listaArticoli];
          setListaArticoli(copyListaArticoli);
          setCurArticolo("");
          setOverview("d-none")
          setErrorMessageForm("d-none");
        } else {
          setErrorMessageForm("d-block");
        }

      }}>
        <div className='input'>
          <label htmlFor="">Inserisci articolo</label>
          <input type="text" placeholder='Inserisci un articolo...' value={curArticolo} onChange={(event) => {
            setCurArticolo(event.target.value);
          }} />
          <p className={`errorMessage ${errorMessageForm}`}>INSERISCI ALMENO 3 CARATTERI</p>
          <button className='submit' type='submit'>AGGIUNGI</button>
          <button className='close' type='button' onClick={() => {
            console.log("chiudi");
            
            setCurArticolo("");
            setOverview("d-none")
            setErrorMessageForm("d-none");
          }}>X</button>
        </div>
      </form>
    </>
  )
}

export default App
