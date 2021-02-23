// React imports
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { updateWeaponOwnership } from '../redux/actions/weapons';

// This is the checkbox for each weapon
function Check(props) {
  const handleCheck = async (event) => {
    props.dispatch(updateWeaponOwnership(event.target.value))
  }
  
  // If the weapon is owned already, it will start with a checked box
  if(props.own === true) {
    return(
      <Checkbox value={props.weapon} key={props.weapon + "checkbox"} onChange={handleCheck} defaultChecked />
    )
  }
  // If the weapon is not owned, it starts with an unchecked box
  return(
    <Checkbox value={props.weapon} key={props.weapon + "checkbox"} onChange={handleCheck} />
  )
}

// This funciton lists all the weapons inside of a table
export default function ListWeapons() {
  const dispatch = useDispatch();
  const weapons = useSelector(state => state.weapons) // recieve list of weapons from Redux store

  return (
    weapons.map((weapon) => {
      return(
        <tr key={weapon.name}>
          <td key={weapon.name + "name"} style={{width: '90%'}}>{weapon.name}</td>
          <td key={weapon.name + "checkboxColumn"} style={{width: '10%'}}>
            <Check own={weapon.own} weapon={weapon.name} dispatch={dispatch}/>
          </td>
        </tr>
      )
    })
  )
}