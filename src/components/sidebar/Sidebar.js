import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";

import { Link, NavLink } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter } from "react-pro-sidebar";
//import styles from "./Sidebar.module.css";
import "./Sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";
import icon_home from "../../assets/icon_home.png";
import icon_awan from "../../assets/icon_awan.png";
import icon_data from "../../assets/icon_data.png";
import icon_ikan from "../../assets/icon_ikan.png";
import icon_present from "../../assets/icon_present.png";
import icon_chevLeft from "../../assets/icon_chevLeft.png";
import icon_chevRight from "../../assets/icon_chevRight.png";
import icon_bullet from "../../assets/icon_bullet.png";
import { BsPeopleFill } from "react-icons/bs";

const Sidebar = (props) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [menuItemClicked, setMenuItemClicked] = useState(false);

  // passing value of menuCollapse to parent component
  props.handleSidebar(menuCollapse);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const menuItemClick = () => {
    if (menuItemClicked == true) {
      setMenuCollapse(true);
      setMenuItemClicked(false);
    } else {
      setMenuCollapse(true);
      setMenuItemClicked(true);
    }
  };
  // passing value and change state on child component

  // const collapsedButtonHandler =()=> {
  //   if
  // }
  useEffect(() => {
    if (props.clickBackground == true) {
      setMenuCollapse(true);
      props.setClickBackground(false);
    }
  });

  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <Menu>
              <MenuItem icon={menuCollapse ? <img src={icon_home} /> : ""}>
                <Link style={{ color: "#ffff" }} onClick={menuItemClick} to="/">
                  Halaman Utama
                </Link>
              </MenuItem>
              <MenuItem icon={<img src={icon_ikan} />}>
                {" "}
                <Link style={{ color: "#ffff" }} onClick={menuItemClick} to="/wpp-ri">
                  WPP RI
                </Link>
              </MenuItem>
              <MenuItem icon={<img src={icon_awan} />}>
                <Link style={{ color: "#ffff" }} onClick={menuItemClick} to="/iklim">
                  Artikel Iklim Laut
                </Link>
              </MenuItem>
              {/* <SubMenu title={<Link style={{ color: "#ffff" }}>Dashboard</Link>} icon={<img src={icon_present} />}>
                <MenuItem icon={<img src={icon_bullet} />}>
                  <Link style={{ color: "#ffff" }}>Iklim Gelombang</Link>
                </MenuItem>
                <MenuItem icon={<img src={icon_bullet} />}>
                  <Link style={{ color: "#ffff" }}>Siklon Tropis</Link>
                </MenuItem>
                <MenuItem icon={<img src={icon_bullet} />}>
                  <Link style={{ color: "#ffff" }}>Madden Jullian Oscillation</Link>
                </MenuItem>
              </SubMenu> */}
              <MenuItem icon={<img src={icon_present} />}>
                <Link style={{ color: "#ffff" }} onClick={menuItemClick} to="/dashboard">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem icon={<img src={icon_data} />}>
                <Link style={{ color: "#ffff" }} onClick={menuItemClick} to="/data">
                  Informasi Data
                </Link>
              </MenuItem>
              <MenuItem icon={menuCollapse ? <BsPeopleFill style={{ fontSize: "25px" }} /> : ""}>
                <Link style={{ color: "#ffff" }} onClick={menuItemClick} to="/tentang-kami">
                  Tentang
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <SidebarFooter>
          <div className={!menuCollapse ? "buttonmenu" : "buttonmenu-collapsed"} onClick={menuIconClick}>
            <img src={menuCollapse ? icon_chevRight : icon_chevLeft} />
          </div>
        </SidebarFooter>
      </div>
    </>
  );
};

export default Sidebar;
