

export function reducerPregunta(state, action) {
    switch (action.type) {
        case 'ADD_PREGUNTA': {
            return {
                ...state,
                preguntas: [...state.preguntas, action.payload],
            }
        }
        case 'DELETE_PREGUNTA': {
            return {
                ...state,
                preguntas: state.preguntas.filter(p => p.id !== action.payload)
            }
        }
        default: {
            console.error('Acción desconocida:' + action.type)
        }

    }
}

