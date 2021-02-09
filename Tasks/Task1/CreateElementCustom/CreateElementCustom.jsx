import React from 'react'
import ReactDom from 'react-dom'

const span = React.createElement('span',{className='header__title'},'CreateElementCustom render');
const div = React.createElement('div',null, span);
const root = document.getElementById('app');
ReactDom.render(div,root)