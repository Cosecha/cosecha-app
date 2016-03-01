ButtonSideBarLeft = React.createClass({
	handleClick(e){
		e.preventDefault();
		console.log('sidebar-left clicked!');
		
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
