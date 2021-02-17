const weaponReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_WEAPONS':
      return state = action.data;

    default:
      return state;
  }
}

export default weaponReducer;