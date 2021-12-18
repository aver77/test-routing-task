import React from 'react';

const MainSubmitBtn = ({submitHandler}) => {
    const clickHandler = () => {
        submitHandler();
    }

    return (
        <input 
            className='main__btn-submit' 
            type="submit" 
            value="Отправить"
            onClick={() => clickHandler()} 
        />
    );
};

export default React.memo(MainSubmitBtn);