import React from "react"
import { Input, Card } from "antd"
const { Meta } = Card
const { Search } = Input

const categories = ["Periods", "Mother & Baby", "Pregnancy", "Personal Hygiene"]
const onSearch = (value) => console.log(value)

const CategoryBoard = () => {
	return (
		<div>
			<Search
				placeholder="input search text"
				onSearch={onSearch}
				enterButton
				allowClear
			/>
			<h3 className="font-bold text-2xl mt-4">Categories</h3>
			<div className="flex flex-wrap gap-4 mt-4">
				{categories.map((c, i) => (
					<Card
						key={i}
						style={{
							width: 300,
						}}
						cover={
							<img
								alt="example"
								src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
							/>
						}
						hoverable>
						<Meta title={c} />
					</Card>
				))}

				<blockquote className="text-xl italic font-semibold text-white border-l-4 border-gray-500 bg-gray-800 p-4">
					<svg
						aria-hidden="true"
						className="w-10 h-10 text-gray-500"
						viewBox="0 0 24 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
							fill="currentColor"
						/>
					</svg>
					<p>
						"Flowbite is just awesome. It contains tons of
						predesigned components and pages starting from login
						screen to complex dashboard. Perfect choice for your
						next SaaS application."
					</p>
				</blockquote>
			</div>
		</div>
	)
}

export default CategoryBoard
