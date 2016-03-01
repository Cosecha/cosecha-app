Navbar = React.createClass({
	render(){
		return (
			<div>
				<div id="navbar">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-4 hidden-sm hidden-md hidden-lg">
								<ButtonSideBarLeft />
							</div>
							<div className="col-xs-4 col-sm-12">
								<p className="text-center">
									<img src="img/logo.png" className="img-responsive img-center" alt="Cosecha"/>
								</p>

							</div>
							<div className="col-xs-4 hidden-sm hidden-md hidden-lg">
								<ButtonSideBarRight />
							</div>
						</div>
					</div>

				</div>

			</div>
		)
	}
});
