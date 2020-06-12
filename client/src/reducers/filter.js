const initialState = {
    searchField:'',
    filterBy:'all'
}

export default(state=initialState, action)=> {
    switch(action.type){
        case 'SET_SEARCH':
            return{
                ...state,
                searchField: action.payload
            }
        case 'SET_FILTER':
            return{
                ...state,
                filterBy: action.payload
            }
        default:
            return state
    }
}