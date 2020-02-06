import { createStore } from 'redux'
import { store } from '../index'


export const store = createStore(rootReducer)


export const changePetType = petType => ({
    type: 'PET_TYPE',
    petType
})

export const boundChangePetType = text => store.dispatch(changePetType(text))

// store.subscribe(() => {
//     console.log('store changed', store.getState())
// })

// store.dispatch(
//     { type: 'PET_TYPE', doSomething: 1 }
// )



// export const PetChangeActions={ 
//     petType:
// }