export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function addRecord(entry) {
  return {
    meta: {remote: true},
    type: 'ADD_RECORD'
    //record: entry
  };
}

export function updateRecordId(entry) {
 return {
   meta: {remote: true},
   type: 'UPDATE_RECORD_ID',
   recordId: entry
 };
}

export function updateRecordType(entry) {
 return {
   meta: {remote: true},
   type: 'UPDATE_RECORD_TYPE',
   recordType: entry
 };
}

export function finalizeRecord() {
  return {
    meta: {remote: true},
    type: 'FINALIZE_RECORD'
  };
}
