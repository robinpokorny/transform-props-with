jest.dontMock('../');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var wrap = require('react-stateless-wrapper').wrap;

var transformPropsWith = require('../').default;

var BaseComponent = React.createClass({
  render: function() {
    return React.createElement('div', null, this.props.size);
  }
});

var doubleSize = function(oldProps) {
  return { size: oldProps.size * 2 };
};

describe('transformPropsWith', function() {
  it('works', function() {
    var DecoratedComponent = wrap(
      transformPropsWith(doubleSize)(BaseComponent)
    );
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, {size: 10})
    );
    var node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toEqual('20');
  });
});
