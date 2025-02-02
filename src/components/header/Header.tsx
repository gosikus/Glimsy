import React from 'react';
import { useState } from 'react';

import styles from './header.module.scss';

interface Props {
  fetchData: (values: { request: string | undefined}) => void;
}

const Header: React.FC<Props> = ({ fetchData }) => {
  const [values, setValues] = useState<{ request: string }>({
    request: '',
  });

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // debounce?
    // setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
    fetchData(values);
  };

  return (
    <div className={styles.header}>
      <a href="#" className={styles.logo}>
        glimsy
      </a>
      <form className={styles.form} action="submit" onSubmit={(e) => handleForm(e)}>
        <input
          className={styles.input}
          name="request"
          value={values.request}
          onChange={(e) => {
            setValues({ request: e.target.value });
          }}
          type="text"
          placeholder="поиск по запросу... "
        />
        <button className={styles.button}>Найти</button>
      </form>
    </div>
  );
};

export default Header;
