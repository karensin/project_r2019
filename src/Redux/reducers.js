
const initialState = {
    petType: 'dog',
    petData: [],
    vistorCount: 0,
    petAge: '',
    petEnvoriment: ''
}




const petReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch (action.type) {
        case 'PET_TYPE':
            return {
                ...state,
                petType: action.petType
            }
        case 'PET_DATA':
            return {
                ...state,
                petData: action.petData
            }
        case 'PET_AGE':
            return {
                ...state,
                petAge: action.petAge
            }
        case 'PET_ENVIRONMENT':
            return {
                ...state,
                petEnvoriment: action.petEnvoriment
            }
        case 'VISTOR_COUNT':
            return {
                ...state,
                vistorCount: state.vistorCount + 1
            }
        default:
            return state
    }
}

export default petReducer

