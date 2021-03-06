import React, { useRef, useEffect, useCallback, memo } from 'react';
import MainSubmitBtn from './MainSubmitBtn';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

import { updateView } from '../../../redux/actions/routingActions';
import { useSelector } from 'react-redux'; 

const MainInput = () => {
    const inputRef = useRef(null);

    const dispatch = useDispatch();
    const currentRoute = useSelector(state => state.routingReducer.route);

    let location = useLocation();
    const navigation = useNavigate();
    
    useEffect(() => {
        dispatch(updateView(location.pathname));
    }, [dispatch, location.pathname]);
    
    const inputValueHandler = useCallback((value) => {
        navigation(`${currentRoute}/${value}`);
    },[currentRoute, navigation])

    const keyDownHandler = (e) => {
        if (e.key === "Enter" && inputRef.current.value) {
            inputValueHandler(inputRef.current.value);
            inputRef.current.value = ''
        }
    }
    const submitHandler = useCallback(() => {
        if (inputRef.current.value) {
            inputValueHandler(inputRef.current.value);
            inputRef.current.value = ''
        }
    },[inputValueHandler, inputRef])

    return (
        <label className='main__label'>
            <p className='main__text-label'>Введите новый рут:</p>
            <input
                ref={inputRef}
                className='main__input'
                type="text"
                placeholder='Новый рут'
                onKeyDown={keyDownHandler}
            />
            <MainSubmitBtn submitHandler={submitHandler}/>
        </label>
    );
};

export default memo(MainInput);