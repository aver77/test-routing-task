import React from 'react';
import { useSelector } from 'react-redux';

//!!
const HeaderCurrent = () => {
    const title = useSelector(state => state.routingReducer.title);

    return (
        <div className='header__current header__item'>
            <span className='header__text-current'>{`/${title}`}</span>
        </div>
    );
};

export default HeaderCurrent;