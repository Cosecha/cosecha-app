Layout = React.createClass({
	render(){
		return (
			<div>
				<Navbar/>
				<div className="main-wrapper">
					<div className="row">
						<div>
							<SidebarLeft klass="col-sm-3 hidden-xs"/>
						</div>

						<div className="col-sm-6 col-xs-12">
							<Main />
						</div>

						<div>
							<SidebarRight klass="col-sm-3 hidden-xs"/>
						</div>
					</div>
				</div>

			</div>
		)
	}
});
