import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        records: ['foo', 'bar'],
        newRecord: 'test'
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      records: ['foo', 'bar'],
      newRecord: 'test'
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const initialState = undefined;
    const action = {
      type: 'SET_STATE',
      state: {
        records: ['foo', 'bar'],
        newRecord: 'test'
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      records: ['foo', 'bar'],
      newRecord: 'test'
    }));
  });
});