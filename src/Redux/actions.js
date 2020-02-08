import { store } from '../index'


export const type = 'PET_TYPE';
export const TEXT = 'testing';


export const changePetType = petType => ({
    type: 'PET_TYPE',
    petType,
    text: 'testing'
})

export const boundChangePetType = type => store.dispatch(changePetType(type))

export function togglePetType(text) {
    return { type: TEXT, text }
}

// export function boundChangePetType(type) {
//     return { type: 'PET_TYPE' }
// }

togglePetType('testing1')