import  React  from 'react';
import  Card  from './Card';
// import { robots } from "../robo";

const CardList = ({robots}) =>{
  if (robots.length <= 0){
    return(
      <div className='noResult'>
        <h1>&#129302;Ummm, no result, plz try other keywords.&#129302;</h1>
      </div>
    )}else{
    return(
      <div>
          {
            robots.map((user,i) =>{
              return (
                <Card 
                  key={i} 
                  pokeName={robots[i].id} 
                  name={robots[i].name} 
                  email={robots[i].email} 
                />
              );
            })
          }
      </div>
    );
  }

}

export default CardList;