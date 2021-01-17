import { Link } from "react-router-dom";
// import React, {useState , Route , useEffect} from 'react';
import styled from 'styled-components';
import 'tachyons';
// import {robots} from './robo';

const NavPropsPath = styled.a `

`;

const NavPropsPath = (props) =>{
    const { link, path, icon, title } = props;
        return (
            <div >

                <Link to={path}>
                <div>
                    {icon}
                    <span> {title} </span>
                </div>  
                </Link>

            </div>
        );    

}

export default NavPropsPath;