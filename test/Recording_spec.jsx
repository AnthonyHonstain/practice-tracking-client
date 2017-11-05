import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-dom/test-utils';
import {Map, List} from 'immutable';
import {Recording} from '../src/components/Recording';
import {expect} from 'chai';

describe('Recording', () => {
  it('renders a list of records', () => {
    const records = List.of(
      Map({'recordId':'A001', 'recordType':'foo'}),
      Map({'recordId':'A002', 'recordType':'bar'})
    );
    const component = renderIntoDocument(
      <Recording records={records} />
    );
    const recordsRender = scryRenderedDOMComponentsWithClass(component, 'testClassName');
    const [foo, bar] = recordsRender.map(e => e.textContent);
    // console.log(recordsRender.map(e => e.textContent));

    expect(foo).to.contain('foo');
    expect(bar).to.contain('bar');
  });
});