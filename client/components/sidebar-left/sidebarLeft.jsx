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
						<h2>Circles</h2>
					</div>
					<div className="row">
						<h2>Village</h2>
					</div>
					<div className="row">
						<h2>Region</h2>
					</div>
					<div className="row">
						<h2>Movement</h2>
					</div>
				</div>
			</div>
		)
	}
});
