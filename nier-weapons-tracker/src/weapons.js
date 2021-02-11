// React imports
import React from "react";
import Axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

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

export default class Weapons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weapons: [],
    };
  }

  componentDidMount() {
    document.title = 'NieR Weapons';
    Axios.get('weaponsList.json') // This JSON file is in the public folder
      .then((res) => {
        // console.log(res.data);
        this.setState({ weapons: res.data })
      })
  }

  render() {
    return(
      <table style={{width: '100%'}}>
        <tbody>
          {this.state.weapons.map((weapon) => {
            return(
              <tr>
                <td key={weapon.name} style={{width: '90%'}}>{weapon.name}</td>
                <td key={weapon.name + "checkboxColumn"} style={{width: '10%'}}>
                  <Check own={weapon.own} weapon={weapon.name}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}