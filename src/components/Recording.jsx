import React from 'react';
import {connect} from 'react-redux';
import Record from './Record';
import RecordForm from './RecordForm';
import * as actionCreators from '../action_creators';
import {Map} from 'immutable';


export class Recording extends React.PureComponent {
  addRecordInProgress() {
    return this.props.newRecord;
  }
  handleOnChange(event) {
    console.log('handleOnChange event:', event);
    this.props.addRecord();
    // I think this was dumb, I don't want the client side doing the object modify.
    // Just emit a state to the backend, and let it do the work.
    //this.props.addRecord(Map({recordId: '', recordType: ''}));
  }
  handleOnChangeDebug(event) {
    console.log('handleOnChangeDebug event:', event);
    console.log('handleOnChangeDebug newRecord', this.props.newRecord);
    console.log('handleOnChangeDebug records', this.props.records);
  }
  render() {
    return <div>
      <button ref="debug" onClick={ e => this.handleOnChangeDebug(e)}>DEBUG</button>

      <Record {...this.props} />
      <div className="management">
        {this.addRecordInProgress() ?
          <div>
          <p>ADD RECORD IN PROGRESS</p>
            <RecordForm {...this.props} />
          </div> :
          <div>
          <button ref="addRecord" onClick={ e => this.handleOnChange(e)}>
            Add Record
          </button>
          </div>
        }
      </div>
    </div>;
  }
};

function mapStateToProps(state) {
  return {
    records: state.get('records'),
    newRecord: state.get('newRecord')
  };
};

export const RecordingContainer = connect(mapStateToProps, actionCreators)(Recording);