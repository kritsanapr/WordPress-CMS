import { Layout } from "antd";
import AdminNav from "../nav/AdminNav";

const { Content, Sider } = Layout;

function AdminLayout({ children }) {
  return (
    <Layout>
      <AdminNav />
      <Layout>
        <Content style={{ padding: "10px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
