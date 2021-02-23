// React imports
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { updateUpgrade } from './redux/actions/weapons';
import { getMaterialsList } from './redux/actions/materials'

// This is the checkbox for each upgrade
function Check(props) {
  const handleUpgrade = async (event) => {
    console.log(event);
    // Update the upgrade completion for the passed in upgrade id
    props.dispatch(updateUpgrade(event.target.value))

    // Put the materials list's update in a delay so that the upgrade update can complete
    // before it runs
    setTimeout(() => {
      props.dispatch(getMaterialsList(props.weapons))
    }, 1000)
  }  

  // If the upgrade is complete already, it will start with a checked box
  if(props.own === true) {
    return(
      <Checkbox value={props.upgrade} key={props.weapon + "checkbox" + props.level} onChange={handleUpgrade} defaultChecked />
    )
  }
  // If the upgrade is not complete, it starts with an unchecked box
  return(
    <Checkbox value={props.upgrade} key={props.weapon + "checkbox" + props.level} onChange={handleUpgrade} />
  )
}

// This funciton lists all the weapons with their upgrades inside of a table
export default function Upgrades() {
  const dispatch = useDispatch();
  const weapons = useSelector(state => state.weapons) // recieve list of weapons from Redux store

  return(
    <table style={{width: '100%'}}>
      <tbody>
        {weapons.map((weapon) => {
          return(
            <tr key={weapon.name}>
              <td key={weapon.name + "name"} style={{width: '70%'}}>{weapon.name}</td>
              <td key={weapon.name + "checkboxColumn1"} style={{width: '10%'}}>
                <Check weapons={weapons} weapon={weapon.name} upgrade={weapon.upgrades[0].id} level={0} own={weapon.upgrades[0].upgrade} key={weapon.name + 'upgrade1'} dispatch={dispatch}/>
              </td>
              <td key={weapon.name + "checkboxColumn2"} style={{width: '10%'}}>
                <Check weapons={weapons} weapon={weapon.name} upgrade={weapon.upgrades[1].id} level={1} own={weapon.upgrades[1].upgrade} key={weapon.name + 'upgrade2'} dispatch={dispatch}/>
              </td>
              <td key={weapon.name + "checkboxColumn3"} style={{width: '10%'}}>
                <Check weapons={weapons} weapon={weapon.name} upgrade={weapon.upgrades[2].id} level={2} own={weapon.upgrades[2].upgrade} key={weapon.name + 'upgrade3'} dispatch={dispatch}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}