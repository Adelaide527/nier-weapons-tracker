export const getMaterialsList = (weapons) => {
  return {
    type: 'GET_MATERIALS_LIST',
    weapons: weapons
  }
}