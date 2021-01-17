import React from 'react';
import 'tachyons';
// import {robots} from './robo';

const Card = (props) =>{
    const { pokeName, name, email} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${pokeName}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p> 
            </div>  
        </div>
    );
}

export default Card;