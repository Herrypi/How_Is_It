import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

function Sidebar() {

  const menus = [
    { name: "공지사항", path: "/VMnews" },
    { name: "이벤트", path: "/members" },
    { name: "약관 및 정책", path: "/cashes" }
  ];

  return (
    <Side>
      <Menu>
      {menus.map((menu, index) => {
        return (

          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
            </Link>
            
        );
      })}
        </Menu>
    </Side>
  );
}

export default Sidebar;

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`