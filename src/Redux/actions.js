import { store } from '../index'
import { checkPropTypes } from 'prop-types';


export const type = 'PET_TYPE';
export const TEXT = 'testing';


export const changePetType = petType => ({
    type: 'PET_TYPE',
    petType,
})

export const boundChangePetType = type => store.dispatch(changePetType(type))



export const changePetData = petData => ({
    type: "PET_DATA",
    petData
})

export const boundChangePetData = petData =>
    store.dispatch(changePetData(petData))



// export function boundChangePetType(type) {
//     return { type: 'PET_TYPE' }
// }



