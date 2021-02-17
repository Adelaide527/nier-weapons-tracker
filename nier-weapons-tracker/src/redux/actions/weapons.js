// React imports
import Axios from 'axios';

// Redux imports
import { getMaterialsList } from '../actions/materials'

export const fetchWeapons = () => {
  return function(dispatch) {
    Axios.get('weaponsList.json')
      .then((res) => {
        // Start sorting out the Materials
        dispatch(getMaterialsList(res.data))
        dispatch({
          type: 'FETCH_WEAPONS',
          data: res.data,
        })
      })
  }
}
