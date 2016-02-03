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

var addFive = function(oldProps) {
  return { size: oldProps.size + 5 };
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

  it('does not modify original component with no transformations', function() {
    var DecoratedComponent = wrap(
      transformPropsWith()(BaseComponent)
    );
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, {size: 10})
    );
    var node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toEqual('10');
  });

  it('accepts array of transformations', function() {
    var DecoratedComponent = wrap(
      transformPropsWith([doubleSize, addFive])(BaseComponent)
    );
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, {size: 10})
    );
    var node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toEqual('30');
  });
});
