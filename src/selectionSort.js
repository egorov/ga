module.exports = function selectionSort(values) {

  const state = {
    indices: new Array(values.length),
    results: new Array(values.length),
    rIndex: 0,
    value: values[0],
    vIndex: 0,
    values
  };

  while(state.rIndex < state.values.length) {
    getSmallest(state);
  }

  return state.results;
};

function getSmallest(state) {

  setValue(state);

  for(let index = 0; index < state.values.length; index++) {

    if(state.indices.indexOf(index) !== -1) continue;

    if(state.value <= state.values[index]) continue;    

    state.value = state.values[index];
    state.vIndex = index;
  }

  state.results[state.rIndex] = state.value;
  state.indices[state.rIndex] = state.vIndex;
  state.rIndex += 1;
}

function setValue(state) {

  state.value = void 0;

  for(let index = 0; index < state.values.length; index++) {

    if(state.indices.indexOf(index) !== -1) continue;
  
    state.value = state.values[index];
    state.vIndex = index;
    break;
  }
}