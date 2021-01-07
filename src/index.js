import React from 'react';
import ReactDom from 'react-dom';
import Homepage from './components/App';
import LeftCard from './components/Tabs/LeftCard';

ReactDom.render(
    <LeftCard />,
    document.querySelector('#root')
)