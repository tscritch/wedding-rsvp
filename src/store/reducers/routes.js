export const ROUTE_CHANGE = 'ROUTE_CHANGE'

export function changeRoute (route) {
  return {
    type: ROUTE_CHANGE,
    route
  }
}

const initialState = {
  route: 'name'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return {
        ...state,
        route: action.route
      }
    default:
      return state
  }
}
