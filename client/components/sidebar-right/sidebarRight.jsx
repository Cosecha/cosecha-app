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
						<h3><a href="/dna">DNA</a></h3>
					</div>
					<div className="row">
						<h3><a href="/wiki">Wiki</a></h3>
					</div>
					<div className="row">
						<h3><a href="/forum">Forum</a></h3>
					</div>
					<div className="row">
						<h3><a href="/resources">Resources</a></h3>
					</div>
				</div>
			</div>
		)
	}
});
