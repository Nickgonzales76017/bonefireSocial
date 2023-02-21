import { h } from 'preact';
import { useEffect, useState, useContext } from 'preact/hooks';
import style from './style.css';
// Note: `user` comes from the URL, courtesy of our router
const Signup = ({ user, UserContext}) => {
	var userState = useContext(UserContext);
	console.log(userState.login)
	//userState.setLogin(false);
	//sessionStorage.setItem("id", 0);
	//sessionStorage.setItem("login", false);
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
		  let res = await fetch("http://localhost:3001/formSubmit", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
		    },
			body: JSON.stringify({
			  fname: fname,
			  lname: lname,
			  email: email,
			  phone: phone,
			  username: username,
			  password: password,
			}),
		  });
		  let resJson = await res.json();
		  if (res.status === 200) {
			setFname("");
			setLname("");
			setUsername("");
			setPhone("");
			setEmail("");
			setPassword("");
			setMessage("User created successfully");
			sessionStorage.setItem("id", data[0].id);
			sessionStorage.setItem("login", true);
			
			window.location.replace('/profile?id='+data[0].id);
		  } else {
			setMessage("Some error occured");
		  }
		} catch (err) {
		  console.log(err);
		}
	  };


	return (
		<div>
			
			<form class="p-3 bg-warning box flex justify-center text-white" onSubmit={handleSubmit}>
			<div class="text-center">
				<h1>Signup</h1>
			</div>
			<div class="row mx-auto">
				<div class="col form-group">
					<label>First Name</label>
					<input type="text"name="fname"  class="form-control" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First name" />
				</div>
				<div class="col form-group">
					<label>Last Name</label>
					<input type="text" name="lname" class="form-control" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" />
				</div>
			</div>
			<div class="row mx-auto">
				<div class="col form-group">
					<label>Email</label>
					<input type="text"name="email"  class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
				</div>
				<div class="col form-group">
					<label>Phone Number</label>
					<input type="text"name="phone"  class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
				</div>
			</div>
			<div class="row mx-auto">
				<div class="col form-group">
					<label>Username</label>
					<input type="text" name="username" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
				</div>
				<div class="col form-group">
					<label>Password</label>
					<input type="text" name="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				</div>
			</div>
			<div class="text-center">
				<input  type="submit" class="btn btn-dark" value="Submit" />
			</div>
			
		</form>

		</div>
	);
};

export default Signup;
