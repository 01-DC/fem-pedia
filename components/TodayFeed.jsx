import React, { useEffect, useState } from "react"
import { Card } from "antd"
import axios from "axios"

const TodayFeed = () => {
	const [posts, setPosts] = useState([])

	const getData = async () => {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		)
		setPosts(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<h3 className="font-bold text-2xl mt-4">Today's Feed</h3>
			<div className="mt-4">
				{posts?.map((p, i) => (
					<Card
						title={`Q: ${p.title}`}
						key={i}
						style={{ margin: "16px 0px" }}>
						<p>{p.body}</p>
					</Card>
				))}
			</div>
		</div>
	)
}

export default TodayFeed
