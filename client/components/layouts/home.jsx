HomeLayout = React.createClass({
	render(){
		return (
			<div>
				<Header/>
	
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<Values/>
						</div>

						<div className="col-md-6">
							Signup
						</div>
					</div>
				</div>
			</div>
		)
	}
});
