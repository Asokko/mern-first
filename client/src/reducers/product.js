const initialState = {
    isLoading: false,
    items: null,
}

export default(state=initialState, action)=> {
    switch(action.type){
        case 'SET_PRODUCT':
            return{
                ...state,
                items: action.payload,
                isLoading:true
            }
        case 'SET_IS_LOADING':
            return{
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}