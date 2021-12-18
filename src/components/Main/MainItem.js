import React from 'react';
import MainForm from './components/MainForm';

import './main.scss';

const MainItem = () => {
    return (
        <div className='main'>
            <div className='main__wrapper _container'>
                <MainForm/>
            </div>
        </div>
    );
};

export default MainItem;