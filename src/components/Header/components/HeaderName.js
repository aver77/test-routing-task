import React from 'react';

const HeaderName = ({namePicker}) => {
    return (
        <div className='header__name header__item'>
            <span className='header__text-name'>
                {
                    namePicker?
                        'Facebook'
                    :
                        'WhatsApp'
                }
            </span>
        </div>
    );
};

export default React.memo(HeaderName);