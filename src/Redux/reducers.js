const initialState = {
    petType: 'dog'
}

const petTypeReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch (action.type) {
        case 'PET_TYPE':
            return {
                ...state,
                petType: action.petType
            }
        default:
            return state
    }
}
export default petTypeReducer

