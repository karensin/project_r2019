import { store } from '../index'
import { checkPropTypes } from 'prop-types';



export const type = 'PET_TYPE';



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

export const changePetAge = petAge => ({
    type: 'PET_AGE',
    petAge,
})

export const boundChangePetAge = petAge =>
    store.dispatch(changePetAge(petAge))

export const increaseCounter = () => ({
    type: 'VISTOR_COUNT',
})


// export const boundCounter = () =>
//     store.dispatch(increaseCounter())



// export function boundChangePetType(type) {
//     return { type: 'PET_TYPE' }
// }



