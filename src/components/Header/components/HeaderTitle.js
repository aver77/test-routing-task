import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { titleNode } from '../../../redux/actions/routingActions';

const HeaderTitle = () => {
    const dispatch = useDispatch();
    
    const titleNodeHandler = () => {
        dispatch(titleNode());
    }

    return (
        <div className='header__title header__item'>
            <Link to='/main'>
                <span 
                    className='header__text-title'
                    onClick={titleNodeHandler}
                >
                    Перейти к родительскому узлу
                </span>
            </Link>
        </div>
    );
};

export default memo(HeaderTitle);