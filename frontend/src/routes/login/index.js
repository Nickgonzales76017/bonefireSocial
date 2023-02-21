import { h } from 'preact';
import { useEffect, useState, useContext } from 'preact/hooks';
import style from './style.css';
// Note: `user` comes from the URL, courtesy of our router
const Login = ({ user, UserContext }) => {
	var userState = useContext(UserContext);
	console.log(userState.login)
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
  	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");  
	const [message, setMessage] = useState("");  
	  let handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  let res = await fetch("http://localhost:3000/formSubmit/login", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
		    },
			body: JSON.stringify({
			  username: username,
			  password: password,
			}),
		  });
		  let resJson = await res.json().then(data=>{ 
			
		  if (res.status === 200) {
			setUsername("");
			setPassword("");
			setMessage("User Logged in");
			console.log(data[0].id); 
			sessionStorage.setItem("id", data[0].id);
			sessionStorage.setItem("login", true);
			window.location.replace('/profile?id='+data[0].id);
		  } else {
			setMessage("Some error occured");
		  }
		});
		} catch (err) {
		  console.log(err);
		}
	  };

	

	return (
		<div>
			
			<form class="p-3 bg-warning box flex justify-center text-white" onSubmit={handleSubmit}>
			<div class="text-center">
				<h1>Login</h1>
			</div>
			<div class="row mx-auto">
				<div class="col form-group">
					<label>Username</label>
					<input type="text" name="username" class="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
				</div>
				<div class="col form-group">
					<label>Password</label>
					<input type="text" name="password" class="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
			</div>
			<div class="text-center">
				<input  type="submit" class="btn btn-dark" value="Submit" />
			</div>
			
		</form>
	</div>
	);
};

export default Login;
