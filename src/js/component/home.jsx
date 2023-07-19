import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {
	const [posts, setPosts] = useState([])

	const getPosts = async () => {
		let url = 'https://jsonplaceholder.typicode.com/'
		let resource = "posts"

		const response = await fetch(url + resource)
		const data = await response.json()

		setPosts(data)

		console.log(data)
	}

	useEffect(() => { 
		getPosts()
	},[])

	return (
		<div className="text-center">
			{!posts && 'Loading...'}
			{posts.length > 0 && posts.map((post,index) => {
				return (
					<h1 key={index}>{post.title}</h1>
				)
			})}
		</div>
	);
};

export default Home;
