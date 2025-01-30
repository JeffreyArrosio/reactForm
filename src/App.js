
import './App.css';
import { createContext } from 'react';
import FormPreguntas from './components/FormularioPregunta';
import PreguntasCreadas from './components/PreguntasCreadas';
import { useReducer } from 'react';
import { reducerPregunta } from './components/Reducer';
let idActualPregunta = 1
export const PreguntasContext = createContext()

function App() {

  const [state, dispatch] = useReducer(reducerPregunta, { preguntas: [] })

  if (state.preguntas.length === 0) idActualPregunta = 0

  const addPregunta = (nueva) => {
    nueva.id = idActualPregunta++
    dispatch({ type: 'ADD_PREGUNTA', payload: nueva })
  }

  const borrarPregunta = (id) => {
    dispatch({ type: 'DELETE_PREGUNTA', payload: id })
  }
  return (
    <div className="App">
      <h1>Formulario de Pregunta</h1>
      <PreguntasContext.Provider value={{ preguntas: state.preguntas, addPregunta, borrarPregunta }}>
        <FormPreguntas />
        <PreguntasCreadas />
      </PreguntasContext.Provider>
    </div>
  );
}



export default App;
