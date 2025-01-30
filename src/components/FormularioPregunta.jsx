import { useContext, useState } from "react"
import Swal from 'sweetalert2'
import { PreguntasContext } from "../App"


function FormPreguntas() {
    const{addPregunta} = useContext(PreguntasContext)

    const [pregunta, setPregunta] = useState(
        {
            enunciado: "",
            respuesta1: "",
            respuesta2: "",
            respuesta3: "",
            respuesta4: "",
            respuestacorrecta: -1,
            favorita: false
        }
    )

    const handleSumbit = (e) => {
        e.preventDefault()
        addPregunta({
            ...pregunta
        })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Pregunta añadida correctamente",
            showConfirmButton: false,
            timer: 1200
        })
    }

    const handleChange = (e) => {
        let nuevoValor = (e.target.type === "checkbox") ? e.target.checked : e.target.value
        if (e.target.type === "radio") nuevoValor = parseInt(e.target.id[e.target.id.length - 1])
        setPregunta({
            ...pregunta,
            [e.target.name]: nuevoValor
        })
    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <textarea
                    className="form-control mb-2"
                    placeholder="Enunciado pregunta"
                    name="enunciado"
                    value={pregunta.enunciado}
                    onChange={handleChange}
                />
                <div className="form-check mb-2">
                    <input
                        type="radio"
                        name="respuestacorrecta"
                        className="form-check-input"
                        id="inputCheck1"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Respuesta 1"
                        className="form-control mb-2"
                        name="respuesta1"
                        htmlFor="inputCheck1"
                        value={pregunta.respuesta1}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check mb-2">
                    <input
                        type="radio"
                        name="respuestacorrecta"
                        className="form-check-input"
                        id="inputCheck2"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Respuesta 2"
                        className="form-control mb-2"
                        name="respuesta2"
                        htmlFor="inputCheck2"
                        value={pregunta.respuesta2}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check mb-2">
                    <input
                        type="radio"
                        name="respuestacorrecta"
                        className="form-check-input"
                        id="inputCheck3"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Respuesta 3"
                        className="form-control mb-3"
                        name="respuesta3"
                        htmlFor="inputCheck3"
                        value={pregunta.respuesta3}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check mb-2">
                    <input
                        type="radio"
                        name="respuestacorrecta"
                        className="form-check-input"
                        id="inputCheck4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Respuesta 4"
                        className="form-control mb-2"
                        name="respuesta4"
                        htmlFor="inputCheck4"
                        value={pregunta.respuesta4}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check form-switch form-check-reverse mb-2">
                    <input
                        type="checkbox"
                        name="favorita"
                        className="form-check-input"
                        id="inputCheckFavorita"
                        checked={pregunta.favorita}
                        onChange={handleChange}
                    />
                    <label htmlFor="inputCheckFavorita" className="form-check-label">Favorita</label>
                </div>
                <button type="sumbit" className="btn btn-primary">
                    Agregar
                </button>
            </form>
        </>

    )


}

export default FormPreguntas
