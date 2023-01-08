import React from "react"
import Image from "next/image"
import { Input, Card } from "antd"
import img1 from "../assets/periods1.png"
import img2 from "../assets/motherbaby1.jpg"
import img3 from "../assets/pregnancy1.png"
import img4 from "../assets/hygeine1.png"

const { Meta } = Card
const { Search } = Input

const categories = [
	{ title: "Periods", img: img1 },
	{ title: "Mother & Baby", img: img2 },
	{ title: "Pregnancy", img: img3 },
	{ title: "Personal Hygiene", img: img4 },
]
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
						cover={<Image alt="example" src={c.img} />}
						hoverable>
						<Meta title={c.title} />
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
						Friendships between women, as any woman will tell you,
						are built of a thousand small kindnesses... swapped back
						and forth and over again. Michelle Obama, Becoming
					</p>
				</blockquote>
			</div>
		</div>
	)
}

export default CategoryBoard
