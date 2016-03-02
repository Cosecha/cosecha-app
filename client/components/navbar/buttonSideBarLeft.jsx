ButtonSideBarLeft = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};

		return data;
	},
	getInitialState(){
		return {
			toggleState: false
		};
	},
	toggleVisibility(){
		if(this.state.toggleState){
			Session.set('lsbClass', 'animated slideOutLeft col-xs-5 col-3 col-md-3');
			this.data.toggle = !this.data.toggle;
			this.state.toggleState = !this.state.toggleState;
		}else{
			Session.set('lsbClass', 'animated slideInLeft  col-xs-5 col-3 col-md-3');
			this.state.toggleState = !this.state.toggleState;
		}
	},
	handleClick(e){
		e.preventDefault();
		this.toggleVisibility();
	},
	render(){
		return (
			<div>
				<button onClick={this.handleClick} id="sidebar-left" className="btn btn-primary">
					<i className="fa fa-bars fa-3x"></i>
				</button>
			</div>
		)
	}
});
