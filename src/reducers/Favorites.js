export default function Favorites(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REM_FAVORITE':
      return state.filter((item) => action.id === item.id);
    default:
      return state;
  }
}
