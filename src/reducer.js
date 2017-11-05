import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

// I have no idea if this is smart yet, but I don't have any client
// side state that I care about or want to display yet for these.
function add(state, entry) {
  return state;
}

function updateRecordId(state, entry) {
  return state;
}

function updateRecordType(state, entry) {
  return state;
}

function finalize(state) {
  //return state;
  const records = state.get('records');
  const newRecord = state.get('newRecord');

  if (newRecord) {
    // This is dumb, shouldn't we just let the backend deal with it?
    //return Map({records: records.push(newRecord)});
  }
  return state;
}

export default function(state = Map(), action) {
  //console.log(state, action);
  switch(action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_RECORD':
    return add(state, action.state);
  case 'UPDATE_RECORD_ID':
    return updateRecordId(state, action.state);
  case 'UPDATE_RECORD_TYPE':
    return updateRecordType(state, action.state);
  case 'FINALIZE_RECORD':
    return finalize(state);
  }
  return state;
}