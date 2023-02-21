import { h } from 'preact';
import { useEffect, useState, useContext } from 'preact/hooks';

// Note: `user` comes from the URL, courtesy of our router
const Chat = ({ user, UserContext }) => {

	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);
	const [client, setClient] = useState({});
	
	async function connectToServer() {
        const ws = new WebSocket('ws://localhost:7071/ws');
		
        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {
				ws.onopen = (event) => {
					console.log('hello')
					
					//ws.send(JSON.stringify("Here's some text that the server is urgently awaiting!"));
				};
				ws.onmessage = (event) => {
					console.log( JSON.parse(event.data));
					if(JSON.parse(event.data).id){
						var updatedValue = {};
						updatedValue[JSON.parse(event.data).id] = JSON.parse(event.data)
						console.log(updatedValue)
						var msg = "<div class='card text-center p-1'><p><strong>"+ JSON.parse(event.data).id +":</strong> joined the Chat!</p></div>"
						$("#chatbox").append(msg);
					}else if(JSON.parse(event.data).sender){
						var updatedValue = {};
						updatedValue[JSON.parse(event.data).id] = JSON.parse(event.data)
						console.log(updatedValue)
						var msg = "<p><strong>"+ JSON.parse(event.data).sender +":</strong>"+ JSON.parse(event.data).msg +"</p>"
						
						var new_msg =	'<li class="d-flex justify-content-between mb-4">';
            			new_msg += '<img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"'
						new_msg += ' class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>'
						new_msg += '<div class="card mask-custom">'
						new_msg += '  <div class="card-header d-flex justify-content-between p-3"'
						new_msg += '    style="border-bottom: 1px solid rgba(255,255,255,.3);">'
						new_msg += '    <p class="fw-bold mb-0">'+ JSON.parse(event.data).sender +'</p>'
						new_msg += '    <p class="text-light small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>'
						new_msg += '  </div>'
						new_msg += '  <div class="card-body">'
						new_msg += '    <p class="mb-0">'
						new_msg +=  JSON.parse(event.data).msg;
						new_msg += '    </p>';
						new_msg += '  </div>';
						new_msg += '</div>';
						new_msg += '</li>';
						$("#chatbox").append(new_msg);
					}
					
				}
				window.addEventListener("beforeunload", (ev) => 
				{  
					ws.disconnect();
				});
                if(ws.readyState === 1) {
                    clearInterval(timer)
					$( "#submit" ).on( "click", {'ws': ws},function(event) {
						var ws = event.data.ws;
						event.preventDefault();
						console.log( 'testing submit');
						if($('#messageInput').val())
						ws.send(JSON.stringify($('#messageInput').val()));
						$('#messageInput').val('')
					});
                    resolve(ws);
                }
            }, 10);
			
        });
    }

	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const ws = await connectToServer();
		}
		// call the function
		fetchData()
		  // make sure to catch any error
		  .catch(console.error);
	}, [])

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
<div>
	{/* <div class="container">
		<h1>Chat: {user}</h1>
			<div class="row">
				<div class="card">
					<div class="card-body" id="chatbox">
						<p><strong>John:</strong> Hi, how are you?</p>
						<p><strong>Jane:</strong> I'm doing well, thanks for asking!</p>
						<p><strong>John:</strong> That's great to hear!</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div>
					<input type="text" class="form-control" id="messageInput" placeholder="Enter a Message" />
					<button class="btn btn-primary" id="submit">Send</button>
				</div>
        	</div>
	</div> */}










	
  <div class="container py-5 card m-2 bg-warning">

    <div class="row w-100">

      <div class="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">

	  	<div class="card text-center mt-3 mb-3">
            <h3>Member</h3>
        </div>

        <div class="card mask-custom">
          <div class="card-body">

            <ul class="list-unstyled mb-0">
              <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">John Doe</p>
                      <p class="small text-black">Hello, Are you there?</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">Just now</p>
                    <span class="badge bg-danger float-end">1</span>
                  </div>
                </a>
              </li>
              <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">Danny Smith</p>
                      <p class="small text-black">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">5 mins ago</p>
                  </div>
                </a>
              </li>
              <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">Alex Steward</p>
                      <p class="small text-black">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">Ashley Olsen</p>
                      <p class="small text-black">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">Kate Moss</p>
                      <p class="small text-black">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">Lara Croft</p>
                      <p class="small text-black">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">Yesterday</p>
                  </div>
                </a>
              </li>
              <li class="p-2">
                <a href="#!" class="d-flex justify-content-between link-light">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                      class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                    <div class="pt-1">
                      <p class="fw-bold mb-0">Brad Pitt</p>
                      <p class="small text-black">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="small text-black mb-1">5 mins ago</p>
                    <span class="text-black float-end"><i class="fas fa-check" aria-hidden="true"></i></span>
                  </div>
                </a>
              </li>
            </ul>

          </div>
        </div>

      </div>

      <div class="col-md-6 col-lg-7 col-xl-7" >

        <ul class="card p-3 bg-dark list-unstyled text-black" id="chatbox">
          <li class="d-flex justify-content-between mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
              class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div class="card mask-custom">
              <div class="card-header d-flex justify-content-between p-3"
                style="border-bottom: 1px solid rgba(255,255,255,.3);">
                <p class="fw-bold mb-0">Brad Pitt</p>
                <p class="text-light small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-4">
            <div class="card mask-custom w-100">
              <div class="card-header d-flex justify-content-between p-3"
                style="border-bottom: 1px solid rgba(255,255,255,.3);">
                <p class="fw-bold mb-0">Lara Croft</p>
                <p class="text-light small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
              </div>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
              class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60"/>
          </li>
          <li class="d-flex justify-content-between mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
              class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div class="card mask-custom">
              <div class="card-header d-flex justify-content-between p-3"
                style="border-bottom: 1px solid rgba(255,255,255,.3);">
                <p class="fw-bold mb-0">Brad Pitt</p>
                <p class="text-light small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
		</ul>
		<ul class="card list-unstyled text-black">
          <li class="mb-3">
				<input type="text" id="messageInput"placeholder="Enter a Message"  class="form-control float-left w-75"  />
				<button type="button"id="submit"  class="btn btn-light btn-lg btn-rounded float-right w-25">Send</button>
		  </li>
        </ul>

      </div>

    </div>

  </div>
</div>
	);
};

export default Chat;
