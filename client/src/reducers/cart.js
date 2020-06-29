const initialState = {
    items: [],
    title:[],
    color:[]
}

export default(state=initialState, action)=> {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
                title:[
                   ...state.title,
                   action.payload.title
                ],
                color:[
                    ...state.color,
                    action.payload.color
                 ]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                items: state.items.filter(o=>o.id != action.payload)
            }
        default:
            return state
    }
}