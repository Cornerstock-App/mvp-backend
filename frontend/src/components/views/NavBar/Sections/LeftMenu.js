import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Shops</span>}>
      <MenuItemGroup title="Shop1"/>
      <MenuItemGroup title="Shop2"/>
      <MenuItemGroup title="Shop3"/>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu