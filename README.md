# preact-fabric

> Simple and lightweight Fabric.js component for Preact; for :atom_symbol: [Preact](https://github.com/developit/preact)

## Usage

[fabric.js](https://github.com/fabricjs/fabric.js)

```jsx
const { h, Component, render } = require("preact");

import Fabric from "preact-fabric";

class Demo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Fabric
          config={{
            isDrawingMode: true,
          }}
          style={{
            border: '1px solid #000',
          }}
          attrs={{
            width: '300px',
            height: '300px',
          }}
          init={canvas => {
            canvas.setBackgroundColor('#0fa', canvas.renderAll.bind(canvas));
          }}
        />
      </div>
    );
  }
}

render(<Demo />, document.body);

```

[![Edit kw0lql5ylv](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kw0lql5ylv)

## Install

```
$ npm install --save preact-fabric
```

```html
<script src="https://unpkg.com/preact-fabric@1.0.0/dist/preact-fabric.min.js"></script>
```

## Properties

#### config
Type: `Object`

#### style
Type: `Object`

#### attrs
Type: `Object`

#### init
Type: `Function`

## License

MIT © [Ahmet Şimşek](https://github.com/indatawetrust)
