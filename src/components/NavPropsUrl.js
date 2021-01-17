import { Link } from "react-router-dom";
// import React, {useState , Route , useEffect} from 'react';
import styled from 'styled-components';
import 'tachyons';
// import {robots} from './robo';

// const NavPropsUrl = styled.a `

// `;

const NavPropsUrl = (props) =>{
    const { link, path, icon, title } = props;
    return (
        <div >
            <a href={`${link}`}>     
            <div>
                {icon}
                <span> {title} </span>
            </div>  
            </a>
        </div>
    );
}

export default NavPropsUrl;