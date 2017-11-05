import React from 'react';


export default class Record extends React.PureComponent {
  getRecords() {
    return this.props.records || [];
  }
  render() {
    return <div className="recording">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {this.getRecords().map(entry =>
            <tr key={entry.get('recordId')} className="testClassName">
              <td>{entry.get('recordId')}</td>
              <td>{entry.get('recordType')}</td>
            </tr>
        )}
        </tbody>
      </table>
    </div>;
  }
}