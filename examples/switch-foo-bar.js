import ReactDOM from "react-dom";

import tx from "transform-props-with";

import BaseComponent from "./base-component";

const switchFooBar = oldProps => {
  const { bar, foo, ...props } = oldProps;

  return {
    bar: foo,
    foo: bar,
    ...props
  };
};

const EnhancedComponent = tx(switchFooBar)(BaseComponent);

ReactDOM.render(
  <EnhancedComponent foo="The Garden Party" bar={1963} />,
  document.getElementById("app")
);
// Would render <BaseComponent foo={1963} bar='The Garden Party' />
