// import logo from './logo.svg';
// import './App.css';
import logoSanbercode from '../logo.png';
import CheckItem from './CheckItemComponent';
import Button from './ButtonComponent';
import './MyStyle.css';
import { useEffect } from 'react';

function App() {

  return (
    <div className='container'>
      <img src={logoSanbercode} alt="logo"></img>
      <div className="title">
        <h1>THINGS TO DO</h1>
        <p>during bootcamp in sanbercode</p>
      </div>
      <div className="check-list">
        <CheckItem name="Belajar Git & CLI" checkId="checkId1" />
        <CheckItem name="Belajar HTML & CSS" checkId="checkId2"/>
        <CheckItem name="Belajar JavaScript" checkId="checkId3"/>
        <CheckItem name="Belajar ReactJS Dasar" checkId="checkId4"/>
        <CheckItem name="Belajar ReactJS Advance" checkId="checkId5"/>
      </div>
      <Button />
    </div>
  );
}

export default App;
