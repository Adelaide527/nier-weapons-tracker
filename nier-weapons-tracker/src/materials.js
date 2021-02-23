// React imports
import React from "react";

// Redux imports
import { useSelector } from 'react-redux';


export default function Materials() {
  const materials = useSelector(state => state.materials)

  return(
    <table style={{width: '100%'}}>
      <tbody>
        {materials.map((material) => {
          return(
            <tr key={material.item}>
              <td key={material.item + "name"} style={{width: '90%'}}>{material.item}</td>
              <td key={material.item + "qtymaterial"} style={{width: '10%'}}>{material.qty}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}