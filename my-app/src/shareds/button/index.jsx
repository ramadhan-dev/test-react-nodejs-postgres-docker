import React, { Fragment, useReducer } from 'react'

const Button = React.memo((props) => {
    const loadingText = "Loading...";
    return (
        <Fragment>
            <button id={props.id} onClick={props.click}>{props.loading ? loadingText :props.text}</button>
        </Fragment>
    )
}, (prev, next) => {
    if (prev.loading !== next.loading) {
        return false;
    }
    return true;
})

export default Button;
