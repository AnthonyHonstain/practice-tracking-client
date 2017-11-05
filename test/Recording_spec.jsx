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
      Map({'id':'A001', 'start':'2017-09-09T10:10:15', 'finish':null, 'type':'foo', 'count':10}),
      Map({'id':'A002', 'start':'2017-09-09T10:10:15', 'finish':null, 'type':'bar', 'count':10})
    );
    const component = renderIntoDocument(
      <Recording records={records} />
    );
    const recordsRender = scryRenderedDOMComponentsWithClass(component, 'testClassName');
    const [foo, bar] = recordsRender.map(e => e.textContent);

    expect(foo).to.contain('foo');
    expect(bar).to.contain('bar');
  });
});