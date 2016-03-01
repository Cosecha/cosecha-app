Layout = React.createClass({
	render(){
		return (
			<div>
				<Navbar/>
				<div className="main-wrapper">
					<div className="row">
						<div className="col-sm-3 hidden-xs">
							{this.props.sidebar_left}
						</div>

						<div className="col-sm-6 col-xs-12">
							{this.props.content}
						</div>

						<div className="col-sm-3 hidden-xs">
							{this.props.sidebar_right}
						</div>
					</div>
				</div>

			</div>
		)
	}
});
