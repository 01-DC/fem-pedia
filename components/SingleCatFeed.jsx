import React from "react"
import QuestionCard from "./QuestionCard"
import { questions } from "../assets/dummyData"

const SingleCatFeed = ({ catName }) => {
	const catQuestions = questions.filter((q) => q.tag === catName)
	return (
		<div className="bg-gray-300 px-4">
			<h3 className="font-bold text-2xl mt-4">Feed #{catName}</h3>
			<div className="mt-4">
				{catQuestions?.map((q, i) => (
					<QuestionCard question={q} key={i} />
				))}
			</div>
		</div>
	)
}

export default SingleCatFeed
