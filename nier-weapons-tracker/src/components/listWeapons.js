// React imports
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// Redux imports
import { useSelector } from 'react-redux';

function Check(props) {
  if(props.own === true) {
    return(
      <Checkbox key={props.weapon + "checkbox"} defaultChecked />
    )
  }
  return(
    <Checkbox key={props.weapon + "checkbox"} />
  )
}

export default function ListWeapons() {
  const weapons = useSelector(state => state.weapons)

  return (
    weapons.map((weapon) => {
      return(
        <tr>
          <td key={weapon.name} style={{width: '90%'}}>{weapon.name}</td>
          <td key={weapon.name + "checkboxColumn"} style={{width: '10%'}}>
            <Check own={weapon.own} weapon={weapon.name}/>
          </td>
        </tr>
      )
    })
  )
}