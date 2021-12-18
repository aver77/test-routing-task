/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MainInput from './MainInput';

const MainForm = () => {
    return (
        <div className='main__form'>
            <MainInput/>
        </div>
    );
};

export default MainForm;


    // const currentRoute = useSelector(state => state.routingReducer.route);
    // const dispatch = useDispatch();

    // let location = useLocation();
    // const locationHandler = (addedLocation) => location += `${addedLocation}`;
    // const navigation = useNavigate();
    // const navigationHandler = (nav) => navigation(`${nav}`);

    // useEffect(() => {
    //     if (formValue) {
    //         dispatch(addNode(formValue));
    //         navigationHandler(`${formValue}`);
    //     }
    // },[dispatch, formValue]);