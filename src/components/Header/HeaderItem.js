import React, { useMemo } from 'react';
import HeaderTitle from './components/HeaderTitle';
import HeaderName from './components/HeaderName';

import { useSelector } from 'react-redux';

import './header.scss';
import HeaderCurrent from './components/HeaderCurrent';

const HeaderItem = () => {
    const route = useSelector(state => state.routingReducer.route);
    let headerClass = useMemo(() => 'header', []);

    return (
        <div className={route === '/main'?headerClass + ' blue-bg' : headerClass + ' green-bg'}>
            <div className='header__wrapper _container'>
                <HeaderTitle/>
                <HeaderCurrent/>
                <HeaderName namePicker = {route === '/main'}/>
            </div>
        </div>
    );
};

export default HeaderItem;