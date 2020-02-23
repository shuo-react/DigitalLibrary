import React from 'react';

import classes from '../books.module.css';

const bookCard = (props) => {
    return (
        <div className={classes.card}>
            <div>
                {props.name}
            </div>
            <div>
                {props.author}
            </div>
        </div>
    );
}

export default bookCard;
