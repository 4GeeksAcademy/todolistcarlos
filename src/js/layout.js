import React from "react";

import Home from "./component/home.jsx";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {

	return (
		<Home/>
	);
};

export default injectContext(Layout);