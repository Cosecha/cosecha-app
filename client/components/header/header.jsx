Header = React.createClass({
	render(){
		return (
			<div>
				<span className="navbar-react">
					<h1>Cosecha</h1>
				</span>
				<div className="collapse navbar-collapse">
					<form id="signin" className="navbar-form navbar-right" role="form">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-user"></i>
							</span>
							<input ref="email" type="text" placeholder="Email Address" id="email" className="form-control" />
						</div>
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-lock"></i>
							</span>
							<input type="password" ref="password" placeholder="Password" className="form-control" />
						</div>
						<button className="btn btn-primary" type="submit">Login</button>
						<span className=""></span>
					</form>
				</div>
			</div>
		)
	}
});
