import  React  from 'react';
import { useState } from 'react';
import './header.scss';

const Header = () => {
  const [values, setValues] = useState({
    title: '',
  });

  const handleForm = (e) => {
    e.preventDefault();

    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
    console.log(values)
  };

  return (
    <div className="header">
      <a href="#" className="logo">
        glimsy
      </a>
      <form className="form" action="submit" onSubmit={(e) => handleForm(e)}>
        <input
          className="input"
          name = "title"
          value={values.title}
          onChange={(e) => handleForm(e)}
          type="text"
          placeholder="поиск по запросу... "
        />
        <button className="button">Найти</button>
      </form>
    </div>
  );
};

export default Header;
