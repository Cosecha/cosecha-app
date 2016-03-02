Main = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		data.posts = Posts.find({}, {sort:{createdAt: -1}}).fetch();;
		return data;
	},
	render(){
		var posts = this.data.posts.map(function(record){
			return <Post key={record._id} post={record}/>
		});
		return (
			<div id="main">
				<Statusform/>
				{posts}
			</div>
		)
	}
});
