import React from 'react';
import { useState } from 'react';
import './header.scss';

interface Props {
  fetchData: (values: { request: string }) => void;
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
    <div className="header">
      <a href="#" className="logo">
        glimsy
      </a>
      <form className="form" action="submit" onSubmit={(e) => handleForm(e)}>
        <input
          className="input"
          name="request"
          value={values.request}
          onChange={(e) => {
            setValues({ request: e.target.value });
          }}
          type="text"
          placeholder="поиск по запросу... "
        />
        <button className="button">Найти</button>
      </form>
    </div>
  );
};

export default Header;
