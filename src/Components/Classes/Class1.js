import React from "react";
import './Class1.css';
import c1 from '../../Images/c1.jpg';

const Class1 = () => {
    return(
        <>
        <div className="c1">
        <h1 className="c1-head">Grade-1</h1>
        <img src={c1} alt=""  className="c1-img"/>
        </div>

        </>
    )
}
export default Class1;