const initialState = {
  items: [],
  loading: false
}
const photoReducer = (state = initialState, action) => {
  switch (action.type){
    case 'photo/load/start':
      return{
        ...state,
        loading: true,
      }
    case 'photo/load/success':
      return{
        ...state,
        items: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
export default photoReducer