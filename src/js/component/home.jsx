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

		<>
            <h3 className="mt-3">Get Todos</h3>
            <div className="card">
                <div className="card-header">
                    List Todos
                </div>
                <ul className="list-group list-group-flush">
                    {!posts ? <div className="spinner-border text-primary" role="status"> <span className="visually-hidden">Loading...</span>
                    </div> : posts.map((post, index) => {return <li className="list-group-item list-group list-group-action" key={index}>{post.id} - <strong>Title:</strong> {post.title} - {post.completed ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /> </svg> : <span className="text-danger">X</span>} </li>
                        })
                    }
                </ul>
            </div>

        </>


	);
};


		// <div className="text-center">
		// 	{!posts && 'Loading...'}
		// 	{posts.length > 0 && posts.map((post,index) => {
		// 		return (
		// 			<h1 key={index}>{post.title}</h1>
		// 		)
		// 	})}
		// </div>

export default Home;

