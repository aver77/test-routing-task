import React from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //v6

import HeaderItem from '../Header/HeaderItem';
import MainItem from '../Main/MainItem';

const RoutingChain = () => {  
    return (
        <Router>
            <HeaderItem />        
            <MainItem/>
        </Router>
    );
};

export default RoutingChain;