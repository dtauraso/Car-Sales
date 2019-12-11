
// action creator

export const addAditionalFeature = (item) => {
    // action
    return { type: 'ADD_ADDITIONAL_FEATURE', payload: item}
};

export const removeAdditionalFeatures = (item) => {
    // action
    return { type: 'REMOVE_ADDITIONAL_FEATURE', payload: item}

}
// UNDER THE HOOD stuff
// dispatch(someFunc());
