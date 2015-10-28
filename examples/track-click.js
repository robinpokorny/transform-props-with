import transformPropsWith from 'transform-props-with';
import BaseComponent from './base-component'

const trackClick = (oldProps) => {
  const { onClick, trackInfo, ...props } = oldProps;

  if (!trackInfo) {
    return oldProps;
  }

  props.onClick = (event) => {
    sendTrackInfo(trackInfo);

    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return props;
};

const DecoratedComponent = transformPropsWith(trackClick)('a');

ReactDOM.render(
  <DecoratedComponent
    href='https://en.wikipedia.org/wiki/Van%C4%9Bk_plays'
    onClick={this.handleClick}
    trackInfo='Vaňek_1'
  >
    Audience
  </DecoratedComponent>
, node);
// Would render <a href=…>Audience</a>
// The click if first tracked and then this.handleClick is executed
