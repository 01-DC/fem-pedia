import React, { useState } from "react"
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons"
import { Layout, Menu, theme } from "antd"
import "../styles/globals.css"

const { Header, Sider, Content } = Layout
const App = ({ Component, pageProps }) => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()
	return (
		<Layout>
			<Sider collapsible collapsed={collapsed}>
				<div className="logo text-white">loda lassan</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "1",
							icon: <UserOutlined />,
							label: "My Profile",
						},
						{
							key: "2",
							icon: <VideoCameraOutlined />,
							label: "My Questions",
						},
						{
							key: "3",
							icon: <UploadOutlined />,
							label: "My Answers",
						},
					]}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header
					style={{
						padding: "2px 12px",
						background: colorBgContainer,
					}}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: () => setCollapsed(!collapsed),
						}
					)}
				</Header>
				<Content
					style={{
						margin: "16px 16px",
						padding: 16,
						minHeight: "100vh",
						background: colorBgContainer,
					}}>
					<Component {...pageProps} />
				</Content>
			</Layout>
		</Layout>
	)
}
export default App
