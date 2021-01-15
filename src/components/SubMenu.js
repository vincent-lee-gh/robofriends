import { Link } from "react-router-dom";
import React, {useState} from 'react';
import styled from 'styled-components';



const SidebarLink = styled(Link)`
  display: flex;
  /* align-self: flex-start; */
  /* justify-self: flex-start; */
  flex-direction:  row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: clamp( 5px , 8vh , 100px  );
  margin: .5em auto ;
  padding: 0 1.5em;

  font-size: 1.3rem;
  color: #000000;
  text-decoration: none;
  /* border-left: 4px solid #632ce4; */
  /* background: #351fff; */

  transition: 
    background-color 230ms ,
    color  500ms ease-in-out,
    border-left  500ms ease-in-out;

  &:hover {
    color: #FFFFFF;
    background-color: #252831;
    border-left: 15px solid #2cb9e4;
  }
  
`;

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

  &:hover {
    color: #FFFFFF;
    background-color: #252831;
    /* border-left: 15px solid #2cb9e4; */
  }

`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
        <SidebarLink 
          to={item.path} 
          onClick={item.subNav && showSubnav}
          href={item.link}
          >
          <div>
            {item.icon}
            <SidebarLabel> {item.title} </SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav 
              ? item.iconOpened 
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {subnav && 
        item.subNav.map( ( item, index ) => {
          return (
            <DropdownLink to={item.path} key={index} >
              { item.icon }
              <SidebarLabel> {item.title} </SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;