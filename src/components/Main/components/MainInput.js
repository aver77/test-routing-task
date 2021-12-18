/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import MainSubmitBtn from './MainSubmitBtn';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

import { addNode, updateView } from '../../../redux/actions/routingActions';
import { useSelector } from 'react-redux'; 

const MainInput = () => {
    console.log('render');
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const currentRoute = useSelector(state => state.routingReducer.route);

    let location = useLocation();
    const locationHandler = (addedLocation) => location += `${addedLocation}`;

    const navigation = useNavigate();

    useEffect(() => {
        // console.log('current location:', location.pathname);
        dispatch(updateView(location.pathname));
    }, [location.pathname])

    const inputValueHandler = (value) => {
        dispatch(addNode(value));
        navigation(`${currentRoute}/${value}`);
        console.log('current location:', location.pathname);
    }

    const keyDownHandler = (e) => {
        if (e.key === "Enter" && inputRef.current.value) {
            inputValueHandler(inputRef.current.value);
            inputRef.current.value = ''
        }
    }

    const submitHandler = () => {
        if (inputRef.current.value) {
            inputValueHandler(inputRef.current.value);
            inputRef.current.value = ''
        }
    }

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

export default React.memo(MainInput);