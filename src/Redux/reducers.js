import { changePetType, boundChangePetType } from './actions'

const petTypeReducer = (state = [], action) => {
    switch (action.type) {
        case 'PET_TYPE':
            return [
                ...state,
            ]
        default:
            return state
    }
}
export default petTypeReducer