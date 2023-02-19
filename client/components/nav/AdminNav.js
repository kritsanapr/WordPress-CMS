import React, { useState, useEffect } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link";
import {
  PieChartOutlined,
  MailOutlined,
  PushpinOutlined,
  CameraOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  BgColorsOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  const onlyWidth = useWindowWidth();
  console.log(onlyWidth);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  useEffect(() => {
    if (onlyWidth < 800) {
      setCollapsed(true);
    } else if (onlyWidth > 800) {
      setCollapsed(false);
    }
  }, [onlyWidth < 800]);

  const activeName = (name) => `${current === name && "active"}`;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["2", "6", "10"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<SettingOutlined />}>
          <Link href="/admin" className={activeName("/admin")}>
            Dashboard
          </Link>
        </Menu.Item>

        {/* posts */}
        <SubMenu key="2" icon={<PushpinOutlined />} title="Posts">
          <Menu.Item key="3">
            <Link href="/admin/posts" className={activeName("/admin/posts")}>
              All Posts
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link
              href="/admin/posts/new"
              className={activeName("/admin/posts/new")}
            >
              Add New
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link
              href="/admin/categories"
              className={activeName("/admin/categories")}
            >
              Categories
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* library */}
        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item key="7">
            <Link
              href="/admin/media/library"
              className={activeName("/admin/media/library")}
            >
              Library
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link
              href="/admin/media/new"
              className={activeName("/admin/media/new")}
            >
              Add New
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* comments */}
        <Menu.Item key="9" icon={<CommentOutlined />}>
          <Link
            href="/admin/comments"
            className={activeName("/admin/comments")}
          >
            Comments
          </Link>
        </Menu.Item>

        {/* users */}
        <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
          <Menu.Item key="11">
            <Link href="/admin/users" className={activeName("/admin/users")}>
              All Users
            </Link>
          </Menu.Item>
          <Menu.Item key="12">
            <Link
              href="/admin/users/new"
              className={activeName("/admin/users/new")}
            >
              Add New
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* profile */}
        <Menu.Item key="13" icon={<UserOutlined />}>
          <Link href="/admin/userid" className={activeName("/admin/userid")}>
            Profile
          </Link>
        </Menu.Item>

        {/* Customize */}
        <Menu.Item key="14" icon={<BgColorsOutlined />}>
          <Link
            href="/admin/customize"
            className={activeName("/admin/customize")}
          >
            Customize
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminNav;
