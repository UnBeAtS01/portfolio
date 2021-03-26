import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, resume, ...otherProp }) => {
    return (
        <button className={` custom-button ${resume ? 'resume' : ''}`} {...otherProp}>
            { children}
        </button >
    )
}

export default CustomButton;