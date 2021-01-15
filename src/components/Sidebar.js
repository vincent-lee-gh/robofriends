import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import {SidebarData} from './SidebarData';

const Nav = styled.div`
  opacity: ${({ sidebar }) => (sidebar ? '0' : '100%' )};
`;

const NavIcon = styled(Link)`
  /* margin-left: 2em; */
  /* align-self: center; */
  /* float: right; */
  
`;

const SidebarNav = styled.div `
  background: #35353530;
  width: 250px;
  height: 100vh;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%' )};
  top: 0;

  transition: 300ms;
`;

const TranspClosed = styled.div `
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%' )};;
  cursor: pointer;
  /* background: #353535; */
`;

const SiderbarWrap = styled.div `
  width: 100%;
  /* z-index: 1; */
`;


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div >
      <Nav sidebar={sidebar}>
        <NavIcon to="#" >
          <div className="menu-btn" onClick={showSidebar}>
          <CgIcons.CgMenuRight   />

          </div>
        </NavIcon>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        
          <SiderbarWrap>
              <NavIcon to="#" >
              <div className="menu-btn btn-menu-closed" onClick={showSidebar} >
              <AiIcons.AiOutlineClose />

              </div>
              </NavIcon>
            </SiderbarWrap>
        </SidebarNav>
        <TranspClosed sidebar={sidebar} onClick={showSidebar}>  
        </TranspClosed>
    </div>
  )
}

export default Sidebar;