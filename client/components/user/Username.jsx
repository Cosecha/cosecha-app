Username = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		var data = {};
		data.usr = Meteor.users.findOne({_id: this.props.user});
		return data;
	},render(){
		var username = '';
		var personlink = '';
		if(this.data.usr){
			username = this.data.usr.profile.username;
			personlink = '/user/' + this.data.usr.profile.username.toLowerCase();
		}
		return (

				<a href={personlink} className="user-link">{username}</a>
			

		)
	}
});
