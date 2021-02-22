const weaponReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_WEAPONS':
      console.log(action.data);
      // For each weapon, we need to rearrange the upgrades to be in 1-2-3 order
      action.data.forEach(weap => {
        var upgrades = [] // empty upgrade array
        // level 1 upgrade
        var upgrade1 = weap.upgrades.filter(upgrade => upgrade.level === 1)
        upgrades.push(upgrade1[0])
        // level 2 upgrade
        var upgrade2 = weap.upgrades.filter(upgrade => upgrade.level === 2)
        upgrades.push(upgrade2[0])
        // level 3 upgrade
        var upgrade3 = weap.upgrades.filter(upgrade => upgrade.level === 3)
        upgrades.push(upgrade3[0])

        // update the upgrades list for the weapon so that they're in order
        weap.upgrades = upgrades
      });

      console.log(action.data);
      return action.data;
    case 'UPDATE_WEAPON_OWNERSHIP':
      // Copy state
      let weaponsArray = state;
      // find weapon that has the given name
      var weapon = state.filter( w =>  w.name === action.weapon )
      // Find the index of the weapon
      let index = weaponsArray.indexOf(weapon[0])
      // Update ownership to whatever it wasn't before
      var weaponChange = weaponsArray[index];
      weaponChange.own = !weaponChange.own

      console.log(weaponsArray);

      return weaponsArray;
    default:
      return state;
  }
}

export default weaponReducer;