## CreateElement
```js
import React from 'react'
import ReactDom from 'react-dom'

const span = React.createElement('span',{className='header__title'},'CreateElementCustom render');
const div = React.createElement('div',null, span);
const root = document.getElementById('app');
ReactDom.render(div,root)
```

## FunctionComponent

```js
import React from 'react'

function View () {
    return (
        <div>
            FunctionComponentCustom render
        </div>
    )
}
```

## PureComponent

```js
import React from 'react'

export default class PureComponentCustom extends React.PureComponent {
    render() {
        <div>
            PureComponentCustom render
        </div>
    }
} 
```

## Component

```js
import React from 'react'

export default class ComponentCustom extends React.Component {
    render() {
        <div>
            ComponentCustom render
        </div>
    }
}
```
