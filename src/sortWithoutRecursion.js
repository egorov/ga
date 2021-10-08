module.exports = function sortWithoutRecursion(values) {
  
  if(values.length < 2)
    return values;

  const state = {
    cycles: 0,
    index: 0,
    relocatable: null,
    transfers: null,
    values: Array.from(values)
  };

  while(state.transfers !== 0) {

    state.transfers = 0;

    for(; state.index < state.values.length - 1; state.index += 1) {

      if(state.values[state.index] > state.values[state.index + 1]) {
        state.relocatable = state.values[state.index];
  
        state.values[state.index] = state.values[state.index + 1];
        state.values[state.index + 1] = state.relocatable;
        state.relocatable = null;
        state.transfers += 1;
      }
    }
    state.index = 0;
    state.cycles += 1;  
  }

  return state.values;
}