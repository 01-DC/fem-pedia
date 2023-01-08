import React from "react"
import { Button, Card, Input } from "antd"

const QuestionCard = ({ question }) => {
	return (
		<div>
			<Card
				title={`Q: ${question.question}`}
				style={{
					margin: "16px 0px",
				}}>
				<p className="inline text-xs font-bold p-2 rounded-full bg-gray-600 text-white">
					{question.tag}
				</p>
				<ol className="list-decimal list-inside mt-2 h-48 overflow-auto">
					{question.replies.map((r, i) => (
						<li key={i} className="text-sm my-2 border-y">
							{r}
						</li>
					))}
				</ol>
				<div className="flex items-center mt-2 bg-gray-500 rounded-lg">
					<Input placeholder="add comment" />
					<Button type="primary">Add</Button>
				</div>
			</Card>
		</div>
	)
}

export default QuestionCard
