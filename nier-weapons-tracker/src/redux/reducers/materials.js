const materialReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_MATERIALS_LIST':
      // console.log(action.data);

      var dictionary = new Map();

      var allUpgrades = [];

      action.weapons.forEach(weapon => {
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

      
      return state = array;

    default:
      return state;
  }
}

export default materialReducer;