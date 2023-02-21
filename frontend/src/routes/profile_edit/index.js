import { h } from 'preact';
import { useEffect, useState,useContext } from 'preact/hooks';

// Note: `user` comes from the URL, courtesy of our router
const Profile_edit = ({ user, UserContext }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
<div>
<div class="row m-3">
   <div class="card float-left m-3">
      <div class="card-body text-center">
         <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
                     <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Brad Macullam ({user})</h3>
						<p class="content-text"><i class="fa fa-map-marker"></i> Khumbu Valley Hotel</p>
						<p class="content-text"><i class="fa fa-map-marker"></i> Nepal</p>
                     </div>
        </a> </div>
         <h3 class="m-b-0">Brad Macullam ({user})</h3>
         <p>Web Designer &amp; Developer</p>
         <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
         <div class="row text-center m-t-20">
            <div class="col-lg-4 col-md-4 m-t-20">
               <h3 class="m-b-0 font-light">10434</h3>
               <small>Articles</small>
            </div>
            <div class="col-lg-4 col-md-4 m-t-20">
               <h3 class="m-b-0 font-light">434K</h3>
               <small>Followers</small>
            </div>
            <div class="col-lg-4 col-md-4 m-t-20">
               <h3 class="m-b-0 font-light">5454</h3>
               <small>Following</small>
            </div>
         </div>
      </div>
   </div>
   <div class="card  m-3 p-3">
   <div class="card m-3 p-3 text-center">
      <h3 class="m-b-0 ">Feed</h3>
      <div class="row ">
        
           
      </div>
   </div>
      <div class="row">
         <div class="card float-left m-3 p-3">
            <div class="card-body text-center">
               <h3 class="m-b-0">Links</h3>
               <div class="row text-center ">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">State</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
               <div class="row text-center ">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Country</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
               <div class="row text-center ">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Region</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
               <div class="row text-center m-t-20">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">City</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
            </div>
         </div>
         <div class="card float-right m-3 p-3">
            <div class="card-body text-center">
               <h3 class="m-b-0">Details</h3>
               <div class="row text-center ">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">State</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
               <div class="row text-center ">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Country</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
               <div class="row text-center ">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Region</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
               <div class="row text-center m-t-20">
                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">City</span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
   
   <div class="card w-100 m-3 p-3 text-center" style="height: 300px;">
      <h3 class="m-b-0 ">Music</h3>
      <div class="row ">
        
           
      </div>
   </div>
   <div class="card w-100 m-3 p-3 text-center" style="height: 300px;">
      <h3 class="m-b-0 ">Videos</h3>
      <div class="row ">
        
           
      </div>
   </div>
   
   
   
</div>





	);
};

export default Profile_edit;
