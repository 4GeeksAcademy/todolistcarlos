import React, { useState } from "react";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1> TodosList </h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
								c
							}
						}}
						placeholder="Add a Task" ></input>
				</li>
				{todos.map((item, index) => (
					<li class="line">
						<p class="item-name">{item}{""}</p>

						<button
							class="button"
							onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)

							}
						>Delete</button>
					</li>
				))}
			</ul>
			<div>{todos.length} task</div>
		</div>
	);
};

export default Home;
