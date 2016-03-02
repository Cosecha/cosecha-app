HomeLayout = React.createClass({
	render(){
		return (
			<div>
				<Header/>

				<div className="login-bg">
					<div className="white-overlay">
						<div className="container">
							<div className="row home-row">
								<div className="col-md-6 col-md-offset-3">
									<Signupform/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
