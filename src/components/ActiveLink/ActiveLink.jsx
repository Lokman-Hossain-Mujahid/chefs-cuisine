import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink to={to}
                className={({isActive}) => isActive ? "border rounded-lg p-2" : ""}
            >
                {children}
            </NavLink>
        </div >
    );
};

export default ActiveLink;