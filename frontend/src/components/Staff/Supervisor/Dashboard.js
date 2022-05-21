import { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  LogoutOutlined,
  HomeOutlined,
  FolderOpenFilled,
  SnippetsFilled,
  WechatFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./styles/Dashboard.css";
import Logo from "./assets/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import CarouselView from "./DashboardSubComponents/CarouselView";

const { Header, Content, Footer, Sider } = Layout;

const SupervisorDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();

  const { username } = useParams();

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  useEffect(() => {
    switch (location.pathname) {
      case `/${localStorage.getItem("type")}-dashboard/${localStorage.getItem(
        "username"
      )}/research-topics`:
        setHeader("topics");
        break;
      case `/${localStorage.getItem("type")}-dashboard/${localStorage.getItem(
        "username"
      )}/evaluate-documents`:
        setHeader("documents");
        break;
      case `/${localStorage.getItem("type")}-dashboard/${localStorage.getItem(
        "username"
      )}/chat`:
        setHeader("chat");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  const setHeader = (type) => {
    switch (type) {
      case "dashboard":
        document.getElementById("header").innerHTML = "Dashboard";
        break;
      case "topics":
        document.getElementById("header").innerHTML = "Research Topics";
        break;
      case "documents":
        document.getElementById("header").innerHTML = "Evaluate Documents";
        break;
      case "chat":
        document.getElementById("header").innerHTML = "Chat With Groups";
        break;
      default:
        document.getElementById("header").innerHTML = "Dashboard";
        break;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.setItem("authToken", null);
    localStorage.removeItem("email");
    localStorage.removeItem("type");
    history("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        {collapsed === false ? (
          <div className="logo">
            <center>
              <p
                onClick={() => {
                  history(
                    `/${localStorage.getItem(
                      "type"
                    )}-dashboard/${localStorage.getItem("username")}`
                  );
                  setHeader("dashboard");
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={Logo} className="img" />
                SLIIT
              </p>
            </center>
          </div>
        ) : (
          <center>
            <HomeOutlined
              style={{ color: "white", marginTop: "50px", cursor: "pointer" }}
              onClick={() => {
                history(
                  `/${localStorage.getItem(
                    "type"
                  )}-dashboard/${localStorage.getItem("username")}`
                );
                setHeader("dashboard");
              }}
            />
          </center>
        )}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={
            location.pathname ===
            `/${localStorage.getItem("type")}-dashboard/${localStorage.getItem(
              "username"
            )}/research-topics`
              ? ["0"]
              : location.pathname ===
                `/${localStorage.getItem(
                  "type"
                )}-dashboard/${localStorage.getItem(
                  "username"
                )}/evaluate-documents`
              ? ["1"]
              : location.pathname ===
                  `/${localStorage.getItem(
                    "type"
                  )}-dashboard/${localStorage.getItem("username")}/chat` && [
                  "2",
                ]
          }
        >
          <Menu.Item
            key="0"
            icon={<FolderOpenFilled />}
            onClick={() => {
              setHeader("topics");
              history(
                `/${localStorage.getItem(
                  "type"
                )}-dashboard/${localStorage.getItem(
                  "username"
                )}/research-topics`
              );
            }}
          >
            Research Topics
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<SnippetsFilled />}
            onClick={() => {
              setHeader("documents");
              history(
                `/${localStorage.getItem(
                  "type"
                )}-dashboard/${localStorage.getItem(
                  "username"
                )}/evaluate-documents`
              );
            }}
          >
            Evaluate Documents
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<WechatFilled />}
            onClick={() => {
              setHeader("chat");
              history(
                `/${localStorage.getItem(
                  "type"
                )}-dashboard/${localStorage.getItem("username")}/chat`
              );
            }}
          >
            Chat With Groups
          </Menu.Item>
        </Menu>
        <br />
        <br />
        {collapsed === false ? (
          <center>
            <Button icon={<LogoutOutlined />} onClick={logoutHandler}>
              Sign Out
            </Button>
          </center>
        ) : (
          <center>
            <LogoutOutlined
              style={{ color: "white" }}
              onClick={logoutHandler}
            />
          </center>
        )}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <h1 id="header" style={{ fontFamily: "serif", fontSize: "20px" }}>
            {location.pathname ===
              `/${localStorage.getItem(
                "type"
              )}-dashboard/${localStorage.getItem("username")}` && "Dashboard"}
            {/* {location.pathname ===
              `/${localStorage.getItem(
                "type"
              )}-dashboard/${localStorage.getItem(
                "username"
              )}/research-topics` && "Research Topics"}
            {location.pathname ===
              `/${localStorage.getItem(
                "type"
              )}-dashboard/${localStorage.getItem(
                "username"
              )}/evaluate-documents` && "Evaluate Documents"}
            {location.pathname ===
              `/${localStorage.getItem(
                "type"
              )}-dashboard/${localStorage.getItem("username")}/chat` &&
              "Chat With Groups"} */}
          </h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{greet}</Breadcrumb.Item>
            <Breadcrumb.Item>{username}</Breadcrumb.Item>
          </Breadcrumb>
          {location.pathname ===
            `/${localStorage.getItem("type")}-dashboard/${localStorage.getItem(
              "username"
            )}` && <CarouselView />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} SLIIT
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SupervisorDashboard;
