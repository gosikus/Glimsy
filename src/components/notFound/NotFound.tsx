import React from 'react';

import styles from "./notFound.module.scss"

const NotFound = () => {
    return (
        <p className={styles.p}>
            Ошибка  <span className={styles.span}>404</span>
        </p>
    );
};

export default NotFound;