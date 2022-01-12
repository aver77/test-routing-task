import React, { memo } from 'react';
import MainInput from './MainInput';

const MainForm = () => {
    return (
        <div className='main__form'>
            <MainInput/>
        </div>
    );
};

export default memo(MainForm);