import React from "react"
import { useRouter } from "next/router"

const SingleCategory = () => {
	const router = useRouter()
	const { catName } = router.query

	return (
		<div>
			<h3 className="font-bold text-2xl mt-4">Feed #{catName}</h3>
		</div>
	)
}

export default SingleCategory
