import { Link } from "react-router-dom";
// import React, {useState , Route , useEffect} from 'react';
import styled from 'styled-components';


const SidebarLabel = styled.span `
  margin-left: 16px;
`;

const DropdownLink = styled(Link) `
  display: flex;
  /* align-self: flex-start; */
  /* justify-self: flex-start; */
  flex-direction:  row;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%; */
  height: clamp( 5px , 8vh , 100px  );
  /* margin: .5em auto ; */
  /* padding: 0 1.5em; */
  padding-left: 3rem;

  font-size: 1.3rem;
  color: #000000;
  text-decoration: none;

  transition: 
    background-color 230ms ,
    color  500ms ease-in-out,
    ;

  &:hover, :focus {
    color: #FFFFFF;
    background-color: #252831;
    /* border-left: 15px solid #2cb9e4; */
  }

`;
const DropdownLinkExternal = styled.a `
  display: flex;
  /* align-self: flex-start; */
  /* justify-self: flex-start; */
  flex-direction:  row;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%; */
  height: clamp( 5px , 8vh , 100px  );
  /* margin: .5em auto ; */
  /* padding: 0 1.5em; */
  padding-left: 3rem;

  font-size: 1.3rem;
  color: #000000;
  text-decoration: none;

  transition: 
    background-color 230ms ,
    color  500ms ease-in-out,
    ;

  &:hover, :focus {
    color: #FFFFFF;
    background-color: #252831;
    /* border-left: 15px solid #2cb9e4; */
  }

`;

const NavPropsSort = ({ item }) => {
  // const [subnav, setSubnav] = useState();

  // const showSubnav = () => setSubnav(!subnav);

  return (
    <>
        {
          item.subNav.map( ( item, index ) => {
            // credit for comparing string in object array: 
            // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
            if(item.link < item.path){
              return ( 
                <DropdownLink to={item.path } key={index} >
                  {/* href={item.path} */}
                  { item.icon }
                  <SidebarLabel > {item.title} </SidebarLabel>
                  {/* <a href={item.path} target="_blank" >
                  </a> */}
                </DropdownLink>
              );
            }else {
              return (
                <DropdownLinkExternal to={item.link } key={index} href={item.link} target="_blank" >
                  {/* href={item.path} */}
                  { item.icon }
                  <SidebarLabel > {item.title} </SidebarLabel>
                  {/* <a href={item.path} target="_blank" >
                  </a> */}
                </DropdownLinkExternal>
              )
            }
            
          })}

        
    </>
  );
};

export default NavPropsSort;