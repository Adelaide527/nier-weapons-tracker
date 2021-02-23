// React imports
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { updateUpgrade } from './redux/actions/weapons';

// This is the checkbox for each upgrade
function Check(props) {
  const handleUpgrade = async (event) => {
    console.log(event);
    // Update the upgrade completion for the passed in upgrade id
    props.dispatch(updateUpgrade(event.target.value))
  }  

  if(props.own === true) {
    return(
      <Checkbox value={props.upgrade} key={props.weapon + "checkbox" + props.level} onChange={handleUpgrade} defaultChecked />
    )
  }
  return(
    <Checkbox value={props.upgrade} key={props.weapon + "checkbox" + props.level} onChange={handleUpgrade} />
  )
}

export default function Upgrades() {
  const dispatch = useDispatch();
  const weapons = useSelector(state => state.weapons)

  return(
    <table style={{width: '100%'}}>
      <tbody>
        {weapons.map((weapon) => {
          return(
            <tr key={weapon.name}>
              <td key={weapon.name + "name"} style={{width: '70%'}}>{weapon.name}</td>
              <td key={weapon.name + "checkboxColumn1"} style={{width: '10%'}}>
                <Check weapon={weapon.name} upgrade={weapon.upgrades[0].id} level={0} own={weapon.upgrades[0].upgrade} key={weapon.name + 'upgrade1'} dispatch={dispatch}/>
              </td>
              <td key={weapon.name + "checkboxColumn2"} style={{width: '10%'}}>
                <Check weapon={weapon.name} upgrade={weapon.upgrades[1].id} level={1} own={weapon.upgrades[1].upgrade} key={weapon.name + 'upgrade2'} dispatch={dispatch}/>
              </td>
              <td key={weapon.name + "checkboxColumn3"} style={{width: '10%'}}>
                <Check weapon={weapon.name} upgrade={weapon.upgrades[2].id} level={2} own={weapon.upgrades[2].upgrade} key={weapon.name + 'upgrade3'} dispatch={dispatch}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}