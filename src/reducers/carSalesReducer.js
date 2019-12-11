const initialState = {
    // this price isn't printed but used for Total Amount on app display
    additionalPrice: 0,
    car: {
        // don't change this one
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carSalesReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type) {
        case 'ADD_ADDITIONAL_FEATURE':
            console.log("we are ready to work")
            console.log(action.payload.feature)
            // let position = action.payload.feature.id - 1
            let newAdditionalFeatures = state.additionalFeatures.filter(feature => 
                feature.id !== action.payload.feature.id
            )
            // console.log(newAdditionalFeatures)
            // console.log(action.payload.feature)
            let newFeatures = [...state.car.features, action.payload.feature]
            // console.log(newFeatures)
            let newAdditionalPrice = state.additionalPrice + action.payload.feature.price
            // console.log(newAdditionalPrice)
            let newState = {
                ...state,
                additionalPrice: newAdditionalPrice,
                car: {
                    ...state.car,
                    features: newFeatures
                },
                additionalFeatures : newAdditionalFeatures

            }

            // console.log(position)
            // change it here
            return newState
        default:
            return state;
    }

  }