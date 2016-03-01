SidebarLeft = React.createClass({
	getInitialState(){
		var klass = this.props.klass ? this.props.klass : 'col-sm-3 hidden-xs';

		return {
			klass: klass
		}
	},
	render(){
		return (
			<div id="left-bar" className={this.state.klass}>
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
