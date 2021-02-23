// React imports
import Axios from 'axios';

// Redux imports
import { getMaterialsList } from '../actions/materials'

// Backend running from other project. 
// SQL Database hosted on AWS, backend written with SpringBoot
const api = 'http://localhost:8080/'

// This action will get the list of weapons from the api
export const fetchWeapons = () => {
  return function(dispatch) {
    Axios.get(api + "weapons/") // localhost/weapons/
      .then((res) => {
        // Call materials' action to start sorting
        dispatch(getMaterialsList(res.data))
        // dispach to the reducer
        dispatch({
          type: 'FETCH_WEAPONS',
          data: res.data,
        })
      })
  }
}

// This action will update the weapon ownership of the passed in weapon
// Ex: Weapon is Beastlord -> api will update to !own (opposite of what ownership was already)
//     Then redux state will be updated as well in the reducer
export const updateWeaponOwnership = (weapon) => {
  return function(dispatch) {
    Axios.post(api + "weapons/" + weapon) // localhost/weapons/{weapon}
      .then((res) => {
        // dispatch to go to the reducer
        dispatch({
          type: 'UPDATE_WEAPON_OWNERSHIP',
          weapon: weapon,
        })
      })
  }
}

// This action will update the upgrade completion of the passed in upgrade id
// Ex: Upgrade id 1 -> api will update to !upgrade (opposite of what completion was already)
//     Then redux state will be updated as well in the reducer
export const updateUpgrade = (id) => {
  return function(dispatch) {
    Axios.post(api + "materials/" + id) // localhost/materials/{id}
      .then((res) => {
        console.log(res.data);
        // dispatch to go to the reducer
        dispatch({
          type: 'UPDATE_UPGRADE',
          upgraded: res.data, // data contains the corrected upgrade
          id: parseInt(id),
        })
      })
  }
}