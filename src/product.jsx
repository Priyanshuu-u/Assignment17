import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const User = (props) => {
	const params = useParams();
	const [users, setUsers] = useState({});
	console.log(params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://dummyjson.com/products/${params.id}`
			);
			console.log("INDI", res.data);
			setUsers(res.data);
		}
		fetchData();
	}, []);
	return (
		<div style={{ width: "80%", margin: "0 auto" }}>
			<div
				style={{
					margin: "20px",
					marginRight: "auto",
					borderRadius: "20px",
					border: "2px solid #000",
					width: "50%",
					padding: "10px",
				}}
			>
				<h1>Product Name : {users.title ? users.title : "Loading . . . . "}</h1>
			</div>
			<div
				style={{
					margin: "20px",
					marginLeft: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					width: "50%",
					padding: "10px",
				}}
			>
				<h1>Product Description: {users.description ? users.description : "Loading . . . ."}</h1>
			</div>
	
			<div
				style={{
					margin: "20px",
					margint: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					width: "50%",
					padding: "10px",
				}}
			>
				<h2>Thumbnail : <img src={users.thumbnail ? users.thumbnail : "Loading . . . ."}/> </h2>
			</div>
			<div
				style={{
					margin: "20px",
					marginLeft: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					width: "50%",
					padding: "10px",
				}}
			>
				<h2>Price : {users.price ? users.price : "Loading . . . ."}</h2>
			</div>
			<div
				style={{
					margin: "20px",
					marginRight: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					width: "50%",
					padding: "10px",
				}}
			>
				<h2>Rating : {users.rating ? users.rating : "Loading . . . ."}</h2>
			</div>
		</div>
	);
};

export default User;