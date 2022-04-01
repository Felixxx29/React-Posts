import React from 'react';
import classes from './my-input.module.css'

const MyInput = React.forwardRef((props,ref) => {
    return (
        <input
            type="text" className={classes.myInput}
            {...props}
            ref={ref}
        />
    );
});

export default MyInput;