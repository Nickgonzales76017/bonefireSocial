import { h } from 'preact';
import style from './style.css';
import { useContext } from "preact/hooks";

const Home = () => {
	return (
		<div class={style.home}>
			<div>
				<img src="../../assets/fire_emoji.png" alt="Preact Logo" height="160" width="160" style="box-shadow:0 0 0 0" />
			</div>
			<h1>Get connected With BonFire!</h1>
			<section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					link="https://preactjs.com/tutorial/"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, check out our docs for where Preact differs"
					link="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Preact-CLI"
					description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
					link="https://github.com/preactjs/preact-cli#preact-cli--"
				/>
			</section>
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

export default Home;
