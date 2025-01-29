import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import FormPreguntas from './components/FormularioPregunta';
import PreguntasCreadas from './components/PreguntasCreadas';
let idActualPregunta = 1
export const PreguntasContext = createContext()

function App() {
  const [preguntas, setPreguntas] = useState([])
  const addPregunta = (nueva) => {
    nueva.id = idActualPregunta
    idActualPregunta++
    setPreguntas([...preguntas, nueva])
  }

  const borrarPregunta = (id) => {
    let borrar = preguntas.findIndex(e => e.id === id)
    preguntas.splice(borrar, 1)
    setPreguntas([...preguntas])
    console.log(preguntas);
  }
  return (
    <div className="App">
      <h1>Formulario de Pregunta</h1>
      <PreguntasContext.Provider value={{ preguntas, setPreguntas, addPregunta, borrarPregunta }}>
        <FormPreguntas/>
        <PreguntasCreadas />
      </PreguntasContext.Provider>
    </div>
  );
}

export default App;
