Header = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		data.currentUser = Meteor.user();
		return data;
	},
	getInitialState(){
		return {
			message: '',
			messageClass: 'hidden'
		}
	},
	displayError(message){
		this.setState({
			message: message,
			messageClass: 'alert alert-danger message'
		});
	},
	handleSubmit(e){
		e.preventDefault();
		this.setState({message: '', messageClass: 'hidden'});

		var that = this;
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		Meteor.loginWithPassword(email, password, function(e){
			if(e) {
				that.displayError(e.reason);
			} else{
				FlowRouter.go('/dashboard');

			}
		});
	},
	render(){
		return (
			<div>
				<div id="header-wrapper" className="header">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-4 col-sm-12">
								<div className="navbar-react" id="header">
									<img src="img/logo.png" alt="Cosecha Logo"/>
									<h1>Cosecha</h1>
								</div>
							</div>
							<div className="col-md-8 col-sm-12">
								<form onSubmit={this.handleSubmit} id="signin" className="navbar-form navbar-right" role="form">
									<div className="input-group">
										<span className="input-group-addon">
											<i className="fa fa-user"></i>
										</span>
										<input ref="email" type="text" placeholder="Email Address" id="email" className="form-control" />
									</div>
									<div className="input-group">
										<span className="input-group-addon">
											<i className="fa fa-lock"></i>
										</span>
										<input type="password" ref="password" placeholder="Password" className="form-control" />
									</div>
									<button className="btn btn-primary" type="submit">Login</button>
									<span className={this.state.messageClass}>{this.state.message}</span>
								</form>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
});
