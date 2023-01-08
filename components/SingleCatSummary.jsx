import React from "react"
import { Carousel } from "antd"
import { blogs } from "../assets/dummyData"
import BlogCard from "./BlogCard"

const contentStyle = {
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
}

const SingleCatSummary = ({ catName }) => {
	const catBlogs = blogs.filter((b) => b.tag === catName)

	return (
		<div>
			<Carousel autoplay>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
			<h3 className="font-bold text-2xl mt-4">Top Blogs #{catName}</h3>
			<div className="mt-4">
				{catBlogs?.map((b, i) => (
					<BlogCard blog={b} key={i} />
				))}
			</div>
		</div>
	)
}

export default SingleCatSummary
