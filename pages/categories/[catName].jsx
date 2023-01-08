import React from "react"
import { useRouter } from "next/router"
import SingleCatFeed from "../../components/SingleCatFeed"
import SingleCatSummary from "../../components/SingleCatSummary"

const SingleCategory = () => {
	const router = useRouter()
	const { catName } = router.query

	return (
		<div className="grid grid-cols-2 gap-8">
			<SingleCatFeed catName={catName} />
			<SingleCatSummary catName={catName} />
		</div>
	)
}

export default SingleCategory
