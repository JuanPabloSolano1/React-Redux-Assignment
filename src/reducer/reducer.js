import * as actionType from '../reducer/actions';

const initialState = {
  results: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_USER:
      return {
        ...state,
        results: state.results.concat({
          id: Math.ceil(Math.random() * 100),
          name: 'MAX',
          age: Math.ceil(Math.random() * 40),
        }),
      };
    case actionType.DELETE_USER:
      return {
        ...state,
        results: state.results.filter(
          (result) => result.id !== action.element_id
        ),
      };
    default:
      return state;
  }
};
