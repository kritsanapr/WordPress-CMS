import { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href="/">
          {/* <a>CMS</a> */}
          CMS
        </Link>
      </Menu.Item>
      <Menu.Item key="signup" icon={<UserAddOutlined />}>
        <Link href="/signup">{/* <a>Signup</a> */}Signup</Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<UserOutlined />}>
        <Link href="/signin">{/* <a>Signin</a> */}Signin</Link>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Dashboard"
        style={{ marginLeft: "auto" }}
      >
        <Menu.ItemGroup title="Management">
          <Menu.Item key="setting:2">
            <Link href="/admin">
              {/* <a>Admin</a> */}
              Admin
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item>
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
