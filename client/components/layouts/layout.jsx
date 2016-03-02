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
			<div>

				<Navbar/>

				<div className="main-wrapper">
					<div className="row">
						<div>
							<SidebarLeft klass={this.data.lsbClass}/>
						</div>

						<div className="col-sm-6 col-sm-offset-3 col-xs-12" id="main-content">
							<Main />
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
