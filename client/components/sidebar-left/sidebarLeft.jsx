SidebarLeft = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		data.myClasses = this.props.klass;
		return data;
	},
	render(){
		return (
			<div id="left-bar" className={this.data.myClasses}>
				<div className="container">
					<div className="row">
						<h3><a href="/circle">Circle</a></h3>
					</div>
					<div className="row">
						<h3><a href="/village">Village</a></h3>
					</div>
					<div className="row">
						<h3><a href="/region">Region</a></h3>
					</div>
					<div className="row">
						<h3><a href="/movement">Movement</a></h3>
					</div>
				</div>
			</div>
		)
	}
});
