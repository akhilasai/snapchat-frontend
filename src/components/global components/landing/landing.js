import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Landing extends Component {
	render() {
		return (
			<>
				<div style={{ textAlign: "center", padding: "10px" }} className="d-flex flex-row justify-content-center">

					<div className="card d-flex flex-column align-items-center" style={{ borderRadius: "10px", backgroundColor: "white", padding: "100px", width: "50vw", height: "80vh" }}>
						<h1 style={{ color: "yellow" }}>welcome to snapchat</h1>
						<Link to="/Login">
							<div>
								<button className='btn btn-primary mb-3'>Login</button>
							</div>
						</Link>
						<Link to="SignUp">
							<div>
								<button className='btn btn-primary'>Signup</button>
							</div>
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default Landing;
