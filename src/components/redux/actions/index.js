const selectSoldier = (soldier) => {
  return {
    type: "SOLDIER_SELECTED",
    payload: soldier
  }
};

const hoverSoldier = (soldier) => {
  return {
    type: "SOLDIER_HOVERED",
    payload: soldier
  }
};




export { selectSoldier, hoverSoldier };