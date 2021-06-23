const initialState = {
  items: [],
  loading: false,
  loadingCom: false,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'modal/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'modal/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'comment/load/start': {
      return {
        ...state,
        loadingCom: true,
      }
    }
    case 'comment/load/success': {
      return {
        ...state,
        loadingCom: false,
        items: {
          ...state.items,
          comments: [
            ...state.items.comments,
            {
              text: action.text,
              name: action.name,
            },
          ],
        },
      };
    }

    default:
      return state;
  }
};
export default modalReducer;
