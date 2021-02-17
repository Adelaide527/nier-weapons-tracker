// React imports
import React from "react";
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

export default function Upgrades() {
  const weapons = useSelector(state => state.weapons)

  return(
    <table style={{width: '100%'}}>
      <tbody>
        {weapons.map((weapon) => {
          return(
            <tr>
              <td key={weapon.name} style={{width: '70%'}}>{weapon.name}</td>
              <td key={weapon.name + "checkboxColumn1"} style={{width: '10%'}}>
                <Check own={weapon.upgrades[0].upgrade} key={weapon.name + 'upgrade1'}/>
              </td>
              <td key={weapon.name + "checkboxColumn2"} style={{width: '10%'}}>
                <Check own={weapon.upgrades[1].upgrade} key={weapon.name + 'upgrade2'}/>
              </td>
              <td key={weapon.name + "checkboxColumn3"} style={{width: '10%'}}>
                <Check own={weapon.upgrades[2].upgrade} key={weapon.name + 'upgrade3'}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}