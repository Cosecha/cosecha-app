Session.set('lsbClass', 'hidden');
Session.set('rsbClass', 'hidden');

Layout = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		data.rsbClass = Session.get('rsbClass');
		data.lsbClass = Session.get('lsbClass');
		return data;
	},
	render(){
		return (
			<div id="layout-body">

				<Navbar/>

				<div className="main-wrapper">
					<div className="row">
						<div>
							<SidebarLeft klass={this.data.lsbClass}/>
						</div>

						<div className="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3" id="main-content">
							{this.props.content}
						</div>

						<div>
							<SidebarRight klass={this.data.rsbClass}/>
						</div>
					</div>
				</div>

			</div>
		)
	}
});
