import React from "react"
import { Card } from "antd"

const BlogCard = ({ blog }) => {
	return (
		<div>
			<Card
				title={blog.title}
				style={{
					margin: "16px 0px",
				}}>
				<div className="flex items-center justify-between">
					<p className="text-sm font-black border-2 border-gray-600 px-2 rounded-full">
						{blog.userName}
					</p>
					<p className="text-xs font-bold p-2 rounded-full bg-gray-600 text-white">
						{blog.tag}
					</p>
				</div>
				<p className="text-sm h-48 overflow-auto mt-2 border-y-2 p-2">
					{blog.content}
				</p>
			</Card>
		</div>
	)
}

export default BlogCard
