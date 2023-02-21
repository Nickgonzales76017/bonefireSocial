import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';


const Header = (UserContext) => {
	let login_sesh = sessionStorage.getItem("login");
if(login_sesh == 'true'){
	return (
	
		<header class={style.header}>
			<a href="/" class={style.logo}>
						<h1 > &#914;<img src="../../assets/fire_emoji.png"  style="box-shadow:0 0 0 0" alt="Preact Logo" height="30" width="30" />&#886;&#988;&#943;&#588;&#280; </h1>
						{/* <h1 > B&#x1F525;nFire </h1> */}
			</a>
			<nav>
				<Link activeClassName={style.active} href="/">
					Home
				</Link>
				<Link activeClassName={style.active} href="/profile_edit">
					Profile
				</Link>
				<Link activeClassName={style.active} href="/chat">
					Chat
				</Link>
				<Link activeClassName={style.active} href="/apps">
					Apps
				</Link>
				<Link activeClassName={style.active} href="/logout">
					Logout
				</Link>
			</nav>
		</header>
		
	)

}else{
	return (
	
		<header class={style.header}>
			<a href="/" class={style.logo}>
						<h1 > &#914;&#x1F525;&#886;&#988;&#943;&#588;&#280; </h1>
						{/* <h1 > B&#x1F525;nFire </h1> */}
			</a>
			<nav>
				<Link activeClassName={style.active} href="/">
					Home
				</Link>
				<Link activeClassName={style.active} href="/login">
					Login
				</Link>
				<Link activeClassName={style.active} href="/signup">
					Sign-Up
				</Link>
			</nav>
		</header>
		
	)
}
};

export default Header;
