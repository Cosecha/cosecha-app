Navbar = React.createClass({
	render(){
		return (
			<div>
				<div id="navbar">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-4 col-lg-4">
								<ButtonSideBarLeft />
							</div>
							<div className="col-xs-4 col-lg-4">
								<p className="text-center">
									<button type="button" className="btn btn-default center-logo" data-toggle="collapse" data-target="#profile-menu">
										<img src="img/logo.png" className="img-responsive img-center" alt="Cosecha"/>
										<i className="fa fa-chevron-down"></i>
									</button>
								</p>

								<div className="collapse" id="profile-menu">
									<nav className=" navbar-collapse nav-justified" aria-expanded="false">
										<ul className="nav navbar-nav">
											<li><a href="/profile">Edit Profile</a></li>
											<li><a href="/signout">Signout</a></li>

										</ul>
									</nav>
								</div>

							</div>
							<div className="col-xs-4 col-lg-4">
								<ButtonSideBarRight />
							</div>
						</div>
					</div>

				</div>

			</div>
		)
	}
});
