import React from "react"
import { Card } from "antd"
import axios from "axios"
import { questions } from "../assets/dummyData"
import QuestionCard from "./QuestionCard"

const TodayFeed = () => {
	return (
		<div className="bg-gray-300 px-4">
			<h3 className="font-bold text-2xl mt-4">Today's Feed</h3>
			<div className="mt-4">
				{questions?.map((q, i) => (
					<QuestionCard question={q} key={i} />
				))}
			</div>
		</div>
	)
}

export default TodayFeed
