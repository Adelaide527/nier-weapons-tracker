// React imports
import React, { useState, useEffect } from "react";
import Axios from 'axios';

function sortMaterials(weapons, setMaterials) {
  var dictionary = new Map();

  var allUpgrades = [];

  weapons.forEach(weapon => {
    weapon.upgrades.forEach(upgrade => {
      allUpgrades.push(upgrade)
    })
  }, [allUpgrades])

  // Filter the weapons that have been upgraded already out
  var data = allUpgrades.filter(upgrade => upgrade.upgrade === false)

  // console.log(allUpgrades);
  
  data.forEach(element => {
    if(element.item1 !== null) {
      // if element is in dictionary
      if(dictionary.get(element.item1)) {
        // console.log("in array");
        var qty = dictionary.get(element.item1) + element.qty1;
        dictionary.set(element.item1, qty)
      }
      // if element is not already in dictionary
      else {
        // console.log(element.item1);
        dictionary.set(element.item1, element.qty1);
      }
    }

    if(element.item2 !== null) {
      // if element is in dictionary
      if(dictionary.get(element.item2)) {
        // console.log("in array");
        qty = dictionary.get(element.item2) + element.qty2;
        dictionary.set(element.item2, qty)
      }
      // if element is not already in dictionary
      else {
        // console.log(element.item2);
        dictionary.set(element.item2, element.qty2);
      }
    }

    if(element.item3 !== null) {
      // if element is in dictionary
      if(dictionary.get(element.item3)) {
        // console.log("in array");
        qty = dictionary.get(element.item3) + element.qty3;
        dictionary.set(element.item3, qty)
      }
      // if element is not already in dictionary
      else {
        // console.log(element.item3);
        dictionary.set(element.item3, element.qty3);
      }
    }

  });

  // console.log(dictionary);

  const array = Array.from(dictionary, ([item, qty]) => ({item, qty}));

  // console.log(array);
  setMaterials(array)

}

export default function Weapons() {
  const [materials, setMaterials] = useState([{ item: "Twisted Ring", qty: 4 }, { item: "Twisted Ring", qty: 4 }])

  useEffect(() => {
    Axios.get('weaponsList.json') // This JSON file is in the public folder
      .then((res) => {
        // console.log(res.data);
        sortMaterials(res.data, setMaterials)
      })
    // console.log(materials);
  })

  return(
    <table style={{width: '100%'}}>
      <tbody>
        {materials.map((material) => {
          return(
            <tr>
                <td key={material.item} style={{width: '90%'}}>{material.item}</td>
                <td key={material.item + "qtymaterial"} style={{width: '10%'}}>{material.qty}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}