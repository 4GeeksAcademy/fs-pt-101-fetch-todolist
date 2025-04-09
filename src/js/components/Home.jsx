import React from "react";
import { Ricky } from "./ricky.jsx";
import { TodoList } from "./todoList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
            {/* <Ricky/> */}
			<TodoList />
		</div>
	);
};

export default Home;