import Axios from 'axios';

export const fetchWeapons = () => {
  return function(dispatch) {
    Axios.get('weaponsList.json')
      .then((res) => dispatch({
        type: 'FETCH_WEAPONS',
        data: res.data
      }))
  }
}