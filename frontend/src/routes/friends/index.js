import { h } from 'preact';
import { useEffect, useState,useContext } from 'preact/hooks';

// Note: `user` comes from the URL, courtesy of our router
const Friends = ({ user, UserContext }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
<div>   
        <div class="card text-center">
            <h3>Friends</h3>
        </div>
        <div class="card float-left m-3"> 
            <div class="card-body text-center">
				<div class="content"> <a href="#">
						<div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
						<div class="content-details fadeIn-bottom">
							<h3 class="content-title">Brad Macullam</h3>
							<p class="content-text"><i class="fa fa-map-marker"></i> Khumbu Valley Hotel</p>
							<p class="content-text"><i class="fa fa-map-marker"></i> Nepal</p>
						</div>
				</a> </div>
                <h3 class="m-b-0">Brad Macullam</h3>
                <p>Web Designer &amp; Developer</p> <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
                <div class="row text-center m-t-20">
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">10434</h3><small>Articles</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">434K</h3><small>Followers</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">5454</h3><small>Following</small>
                    </div>
                </div>
            </div>
        </div>
		<div class="card float-right m-3"> 
            <div class="card-body text-center">
				<div class="content"> <a href="#">
						<div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
						<div class="content-details fadeIn-bottom">
							<h3 class="content-title">Brad Macullam</h3>
							<p class="content-text"><i class="fa fa-map-marker"></i> Khumbu Valley Hotel</p>
							<p class="content-text"><i class="fa fa-map-marker"></i> Nepal</p>
						</div>
				</a> </div>
                <h3 class="m-b-0">Brad Macullam</h3>
                <p>Web Designer &amp; Developer</p> <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
                <div class="row text-center m-t-20">
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">10434</h3><small>Articles</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">434K</h3><small>Followers</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">5454</h3><small>Following</small>
                    </div>
                </div>
            </div>
        </div>
</div>


	);
};

export default Friends;
