// @flow 
import * as React from 'react';
import styles from "./Image.module.css"

export const Image = (props) => {
    return (
        <div className = {styles.imageContainer} >
            <img className={styles.image} src={props.img} alt="avatar" />
        </div>
    );
};
