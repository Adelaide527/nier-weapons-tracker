// React imports
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { updateWeaponOwnership } from '../redux/actions/weapons';

function Check(props) {
  const handleCheck = async (event) => {
    props.dispatch(updateWeaponOwnership(event.target.value))
  }

  if(props.own === true) {
    return(
      <Checkbox value={props.weapon} key={props.weapon + "checkbox"} onChange={handleCheck} defaultChecked />
    )
  }
  return(
    <Checkbox value={props.weapon} key={props.weapon + "checkbox"} onChange={handleCheck} />
  )
}

export default function ListWeapons() {
  const dispatch = useDispatch();
  const weapons = useSelector(state => state.weapons)

  return (
    weapons.map((weapon) => {
      return(
        <tr>
          <td key={weapon.name} style={{width: '90%'}}>{weapon.name}</td>
          <td key={weapon.name + "checkboxColumn"} style={{width: '10%'}}>
            <Check own={weapon.own} weapon={weapon.name} dispatch={dispatch}/>
          </td>
        </tr>
      )
    })
  )
}