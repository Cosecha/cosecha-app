SidebarRight = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		data.myClasses = this.props.klass;
		return data;
	},
	render(){
		return (
			<div id="right-bar" className={this.data.myClasses}>
				<div className="container">
					<div className="row">
						<h2>DNA</h2>
					</div>
					<div className="row">
						<h2>Wiki</h2>
					</div>
					<div className="row">
						<h2>Forum</h2>
					</div>
					<div className="row">
						<h2>Resources</h2>
					</div>
				</div>
			</div>
		)
	}
});
