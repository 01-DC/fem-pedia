import React from "react"
import { Card } from "antd"

const QuestionCard = ({ question }) => {
	return (
		<div>
			<Card
				title={`Q: ${question.question}`}
				style={{ margin: "16px 0px" }}>
				<p className="inline p-2 border-2 rounded-full bg-gray-600 text-white">
					{question.tag}
				</p>
				<ol className="list-decimal list-inside mt-4">
					{question.replies.map((r, i) => (
						<li key={i} className="text-xs my-2 border-y">
							{r}
						</li>
					))}
				</ol>
			</Card>
		</div>
	)
}

export default QuestionCard
