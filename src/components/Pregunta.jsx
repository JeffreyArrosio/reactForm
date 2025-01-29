import { useContext } from "react"
import { PreguntasContext } from "../App"

export default function Pregunta({ key, pregunta }) {
    const { borrarPregunta } = useContext(PreguntasContext)
    const enunciado = pregunta.enunciado
    const id = pregunta.id
    const deletePregunta = () => {
        borrarPregunta(id)
    }

    return (
        <div className="card" style={{ width: "18rem" }} >
            <button type="button" className="align-baseline btn-close " aria-label="Close" onClick={deletePregunta}></button>
            <div className="card-body">
                <h5 className="card-title">Pregunta nº{id} {!pregunta.favorita ? "" : <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                >
                    <mask id="lineMdCircleFilledToConfirmCircleFilledTransition0">
                        <g
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <path
                                fill="#fff"
                                d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"
                            ></path>
                            <path
                                stroke="#000"
                                strokeDasharray="14"
                                strokeDashoffset="14"
                                d="M8 12l3 3l5 -5"
                            >
                                <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    dur="0.2s"
                                    values="14;0"
                                ></animate>
                            </path>
                        </g>
                    </mask>
                    <rect
                        width="24"
                        height="24"
                        fill="currentColor"
                        mask="url(#lineMdCircleFilledToConfirmCircleFilledTransition0)"
                    ></rect>
                </svg>}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{enunciado}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" className="btn-check" name={`btn-respuesta${pregunta.id}`} id={`${pregunta.id}vbtn-radio1"`} autoComplete="off"></input>
                    <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio1"`}>{pregunta.respuesta1}</label>
                    <input type="radio" className="btn-check" name={`btn-respuesta${pregunta.id}`} id={`${pregunta.id}vbtn-radio2"`} autoComplete="off"></input>
                    <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio2"`}>{pregunta.respuesta2}</label>
                    <input type="radio" className="btn-check" name={`btn-respuesta${pregunta.id}`} id={`${pregunta.id}vbtn-radio3"`} autoComplete="off"></input>
                    <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio3"`}>{pregunta.respuesta3}</label>
                    <input type="radio" className="btn-check" name={`btn-respuesta${pregunta.id}`} id={`${pregunta.id}vbtn-radio4"`} autoComplete="off"></input>
                    <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio4"`}>{pregunta.respuesta4}</label>
                </div>
            </div>
        </div>
    )

}


