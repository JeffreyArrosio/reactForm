
import Pregunta from "./Pregunta";
import { PreguntasContext } from "../App";
import { useContext } from "react";

const PreguntasCreadas = () => {
    const{preguntas} = useContext(PreguntasContext)
    console.log(preguntas);
    return (
        <div className="d-flex flex-wrap justify-content-center mt-4">
            {
                preguntas.map(p => {
                    return (<Pregunta key={p.id} pregunta={p}/>)
                })
            }
        </div>
    )
}


export default PreguntasCreadas;