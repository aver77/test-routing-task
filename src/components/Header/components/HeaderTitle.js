import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { titleNode } from '../../../redux/actions/routingActions';

const HeaderTitle = () => {
    const dispatch = useDispatch();

    return (
        <div className='header__title header__item'>
            <Link to='/main'>
                <span 
                    className='header__text-title'
                    onClick={() => dispatch(titleNode())}
                >
                    Перейти к родительскому узлу
                </span>
            </Link>
        </div>
    );
};

export default HeaderTitle;