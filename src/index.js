import React from 'react';

export default (transform) => (Component) => (props) => <Component {...transform(props)}/>;
