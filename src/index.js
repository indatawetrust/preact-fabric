const {h, Component, render} = require('preact');
import {fabric} from 'fabric';
import AppendChild from 'preact-append-child';

export default class Fabric extends Component {
  constructor() {
    super();

    this.state = {
      id: 'x' + Math.random().toString(36).substring(2, 15),
    };
  }

  render() {
    const canvas = document.createElement('canvas');

    canvas.setAttribute('id', this.state.id);

    const style = this.props.style;

    if (style && typeof style == 'object') {
      for (let key in style) {
        const value = style[key];
        canvas.style[key] = value;
      }
    }

    const attrs = this.props.attrs;

    if (attrs && typeof attrs == "object") {
      for (let key in attrs) {
        const value = attrs[key];
        canvas.setAttribute(key, value)
      }
    }

    let config = {};

    if (this.props.config && typeof this.props.config == 'object') {
      config = this.props.config;
    }

    return (
      <AppendChild
        child={canvas}
        afterAppend={() => {
          const canvas = new fabric.Canvas(this.state.id, config);

          if (this.props.init && typeof this.props.init == 'function') {
            this.props.init(canvas);
          }
        }}
      />
    );
  }
}
