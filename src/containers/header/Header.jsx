import React from "react";
import "./header.css";
import frameleft from "../../assets/frameleft.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="frame_left">
        <img src={frameleft} />
      </div>
      <div className="frame_right">
        <h1>Hi, I'm Minique. Welcome to my food blog!</h1>
        <p>
          Hello friends! Welcome to my food blog where you will find a mix of
          cuisines. And of course, dessert.
        </p>
      </div>
    </div>

    // {/* <div className="miniquetsuero__header-content__input">
    //   <input type="email" placeholder="Your Email Address"></input>
    //   <button type="button">Get Started</button>
    // </div> */}
  );
};

{
  /* <div style={{width: 1920, height: 1342, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(241.45, 239.30, 237.32, 0.59) 0%, rgba(241.45, 239.30, 237.32, 0.59) 100%), linear-gradient(117deg, rgba(255, 240.94, 204.78, 0.09) 0%, rgba(116.17, 83.64, 0, 0) 100%)'}} />
<div style={{width: 267, height: 82, left: 1261, top: 892, position: 'absolute'}}>
<div style={{width: 267, height: 82, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 13}}></div>
<div style={{width: 145, height: 42, left: 61, top: 20, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>About Me</div>
</div>
<img style={{width: 890, height: 1342, left: 97, top: 0, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)'}} src="https://via.placeholder.com/890x1342" />
<div style={{width: 699, height: 289, left: 1045, top: 603, position: 'absolute', textAlign: 'center', color: '#141313', fontSize: 32, fontFamily: 'Quicksand', fontWeight: '300', wordWrap: 'break-word'}}>Hello friends! Welcome to my food blog where you’ll find a mix of cuisines. And of course, dessert.</div>
<div style={{left: 1069, top: 449, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 64, fontFamily: 'Playfair Display', fontWeight: '500', wordWrap: 'break-word'}}>Hi, I’m Minique.<br/>Welcome to my food blog!</div>
</div> */
}

export default Header;
