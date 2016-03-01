Layout = React.createClass({
	render(){
		return (
			<div>	
				<Navbar/>
				{this.props.sidebar_left}
				{this.props.content}
				{this.props.sidebar_right}
			</div>
		)
	}
});
