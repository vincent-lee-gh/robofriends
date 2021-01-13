import  React  from 'react';
import  Card  from './Card';
// import { robots } from "../robo";

const CardList = ({robots}) =>{
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

export default CardList;