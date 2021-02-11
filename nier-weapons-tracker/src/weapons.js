// React imports
import React from "react";
import Axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

function Check(props) {
  if(props.own === true) {
    return(
      <Checkbox defaultChecked />
    )
  }
  return(
    <Checkbox />
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
        {this.state.weapons.map((weapon) => {
          return(
            <tbody>
              <td key={weapon.name} style={{width: '90%'}}>{weapon.name}</td>
              <td style={{width: '10%'}}>
                <Check own={weapon.own}/>
              </td>
            </tbody>
          )
        })}

      </table>
    )
  }
}