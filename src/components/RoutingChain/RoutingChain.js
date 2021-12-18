import React from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

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