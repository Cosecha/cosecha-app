Navbar = React.createClass({
	render(){
		return (
			<div>
				<div id="navbar">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-4">
								<ButtonSideBarLeft />
							</div>
							<div className="col-xs-4">
								<img src="img/logo.png" className="img-responsive img-center" alt="Cosecha"/>
							</div>
							<div className="col-xs-4">
								<ButtonSideBarRight />
							</div>
						</div>
					</div>

				</div>

			</div>
		)
	}
});
