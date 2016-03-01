Signupform = React.createClass({
	render(){
		return (
			<div className="row">
				<div className="signup">
					<h1>Join Cosecha</h1>
					<p className="text-muted">
						Create your account and get started.
					</p>
				</div>
				<form>
					<div className="col-sm-9">
						<div className="row">
							<div className="col-sm-6 form-group">
								<input className="form-control" name="user_name" type="text" ref="user_name" placeholder="Username" />
							</div>
							<div className="col-sm-6 form-group">
								<input className="form-control" type="number" ref="zip" name="zip" placeholder="Zip Code" />
							</div>
						</div>
						<div className="form-group">
							<input className="form-control" type="text" ref="email" name="email" placeholder="Email address" />
						</div>
						<div className="form-group">
							<input className="form-control" type="password" ref="password" name="password" placeholder="Your Password..." />
						</div>

						<button className="btn btn-md btn-success" type="submit">Sign Up</button>
						<span className=""></span>
					</div>

				</form>
			</div>
		)
	}
});
