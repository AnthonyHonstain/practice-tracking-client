import React from 'react';
import {Map} from 'immutable';


class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('TEST---', props.newRecord);
    //this.state = props.newRecord;
    //this.state = {recordId: 't', recordType: ''};
    this.state = {};

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeId(event) {
    console.log('handleChangeId', event.target.value);
    this.props.updateRecordId(event.target.value);
  }
  handleChangeType(event) {
    console.log('handleChangeType', event.target.value);
    this.props.updateRecordType(event.target.value);
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.recordType);
    console.log('Submit:', this.state);
    this.props.finalizeRecord();

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>ID:    <input type="text" value={this.props.recordId} onChange={this.handleChangeId} /></label>
        <label>Type:  <input type="text" value={this.props.recordType} onChange={this.handleChangeType} /></label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RecordForm;