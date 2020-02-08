const initialState = {
    petType: 'dog',
    petData: []
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
        default:
            return state
    }

}
export default petReducer

