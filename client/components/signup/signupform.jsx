Signupform = React.createClass({
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
			messageClass: 'alert alert-danger registerError'
		});
	},
	handleSubmit(e){
		e.preventDefault();
		this.setState({
			message: '',
			messageClass: 'hidden'
		});

		var that = this;
		var user_name = ReactDOM.findDOMNode(this.refs.user_name).value.trim();
		var zip = ReactDOM.findDOMNode(this.refs.zip).value.trim();
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		var user = {
			email: email,
			password: password,
			profile: {
				username: user_name,
				zip: zip,
				avatar: 'http://placehold.it/150x150',
				friends: [],
				circles: [],
				villages: [],
				regions: [],
				isAdmin: false
			}
		};

		Accounts.createUser(user, function(e){
			if(e){
				that.displayError(e.reason);
			}else{
				FlowRouter.go('/dashboard');
			}
		});
	},
	render(){
		return (
			<div className="row">
				<div className="signup">
					<h1>Join Cosecha</h1>
					<p className="text-muted">
						Create your account and get started.
					</p>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="col-sm-9">
						<div className="row">
							<div className="col-sm-6 form-group">
								<input className="form-control" name="user_name" type="text" ref="user_name" placeholder="Username" />
							</div>
							<div className="col-sm-6 form-group">
								<input className="form-control" type="number" ref="zip" name="zip" placeholder="Zip Code" />
							</div>
						</div>
						<div className="form-group">
							<input className="form-control" type="text" ref="email" name="email" placeholder="Email address" />
						</div>
						<div className="form-group">
							<input className="form-control" type="password" ref="password" name="password" placeholder="Your Password..." />
						</div>

						<button className="btn btn-md btn-success" type="submit">Sign Up</button>
						<span className={this.state.messageClass}>{this.state.message}</span>
					</div>

				</form>
			</div>
		)
	}
});
