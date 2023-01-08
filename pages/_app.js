import React, { useState } from "react"
import Link from "next/link"
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	BookOutlined,
	UserOutlined,
	QuestionOutlined,
	HomeOutlined,
	CheckOutlined,
} from "@ant-design/icons"
import { Button, Layout, Menu, theme } from "antd"
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
				<Menu
					theme="dark"
					mode="inline"
					style={{ position: "sticky", top: "0px" }}
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "1",
							icon: <HomeOutlined />,
							label: <Link href="/">Home</Link>,
						},
						{
							key: "2",
							icon: <UserOutlined />,
							label: <Link href="/profile">My Profile</Link>,
						},
						{
							key: "3",
							icon: <QuestionOutlined />,
							label: <Link href="/questions">My Questions</Link>,
						},
						{
							key: "4",
							icon: <CheckOutlined />,
							label: <Link href="/answers">My Answers</Link>,
						},
						{
							key: "5",
							icon: <BookOutlined />,
							label: <Link href="/blogs">My Blogs</Link>,
						},
					]}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header
					style={{
						padding: "2px 12px",
						background: colorBgContainer,
						position: "sticky",
						top: "0px",
						zIndex: "50",
					}}>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div>
								{React.createElement(
									collapsed
										? MenuUnfoldOutlined
										: MenuFoldOutlined,
									{
										className: "trigger",
										onClick: () => setCollapsed(!collapsed),
									}
								)}
							</div>
							<div className="font-black italic text-2xl">
								Fem-Pedia
							</div>
						</div>
						<div>
							<Button
								type="primary"
								size="large"
								className="bg-blue-500 rounded-lg">
								Login
							</Button>
						</div>
					</div>
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
