import { h } from 'preact';
import style from './style.css';
import { useContext } from "preact/hooks";
import { Link } from 'preact-router/match';

const Apps = () => {
	return (
<div class="container-fluid text-center card m-3">
	<h3 class="card cardhover bg-warning m-3 p-2">App Menus</h3>
<div class="row m-3">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">

        <div class="card cardhover bg-success text-white text-center mb-4">
			<Link style="color:white;text-decoration: none; " href="/profile_edit">
				<div class="card-body">
					<h5 class="card-title">&#9998; Profile Edit</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>

        <div class="card cardhover bg-info text-white text-end mb-4">
			<Link style="color:white;text-decoration: none; " href="/chat">
				<div class="card-body">
					<h5 class="card-title">&#128490; Chat</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
      	<div class="card cardhover bg-warning text-white mb-4">
		  <Link style="color:white;text-decoration: none; " href="/friends">
				<div class="card-body">
					<h5 class="card-title">&#128101; Friends</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">

        <div class="card cardhover bg-primary text-white mb-4 text-end">
			<Link style="color:white;text-decoration: none; " href="/near_by">
				<div class="card-body">
					<h5 class="card-title">&#128205; Nearby</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>

        <div class="card cardhover bg-danger text-white text-center my-4">
			<Link style="color:white;text-decoration: none; " href="/feed">
				<div class="card-body">
					<h5 class="card-title">&#128240; Feed</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
      	<div class="card cardhover bg-success text-white mb-4">
		  <Link style="color:white;text-decoration: none; " href="/linked_accounts">
				<div class="card-body">
					<h5 class="card-title">&#128279; Linked Accounts</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
        <div class="card cardhover bg-success text-white text-center mb-4">
			<Link style="color:white;text-decoration: none; " href="/markets">
				<div class="card-body">
					<h5 class="card-title">&#x1F6CD; Markets</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
        <div class="card cardhover bg-dark text-white mb-4">
			<Link style="color:white;text-decoration: none; " href="/currency">
				<div class="card-body">
					<h5 class="card-title">&#127974; Accounts</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
      	<div class="card cardhover bg-secondary text-white text-end mb-4">
	  		<Link style="color:white;text-decoration: none; " href="/organizations">
				<div class="card-body">
					<h5 class="card-title">&#127760; Organizations</h5>
					<small>Last updated 3 mins ago</small>
				</div>
			</Link>
        </div>
    </div>
</div>

</div>
	);
};

const Resource = props => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Apps;
