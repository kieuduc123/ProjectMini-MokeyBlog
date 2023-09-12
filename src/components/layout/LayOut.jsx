import React, { Fragment } from 'react';
import Header from './Header';

const LayOut = ({children}) => {
    return (
        <Fragment>
            <Header></Header>
            {children}
        </Fragment>
    );
};

export default LayOut;