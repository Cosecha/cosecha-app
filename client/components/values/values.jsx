Values = React.createClass({
	values: [
		{icon: 'fa fa-image fa-2x', bigtext: 'Experience the movement', littletext: 'through crowdsourced media'},
		{icon: 'fa fa-share fa-2x', bigtext: 'Share Best Practices', littletext: 'with other organizers'},
		{icon: 'fa fa-search fa-2x', bigtext: 'Find Resources', littletext: 'through collaboration and discussion'}
	],
	render(){
		var rows = this.values.map(function(value){
			return (
				<li key={value.icon}>
					<h3 className="btn btn-lg">
						<i className={value.icon}></i>
						<br/>
						<span>
							<strong> {value.bigtext}</strong><br/>
							<small> {value.littletext}</small>
						</span>
					</h3>
				</li>
			)
		});
		return (
			<div>
				<h2 className="col-md-12 valuelist hidden-xs">
					Connect with organizers in the immigrant rights movement.
				</h2>
				<ul className="ds-btn hidden-xs">
					{rows}
				</ul>
			</div>
		)
	}
});
