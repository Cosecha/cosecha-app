Main = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		var thePosts = [
			{
				_id: '234rtrvrc3',
				createdAt: new Date(),
				likes: 23,
				title: 'Web Dev Circle',
				imageurl: 'http://lorempixel.com/600/200/',
				user: {
					_id: '2n34beda53he',
					name: 'Celso'
				},
				action: 'started a circle',
				actionurl: '/circle/web-devs'
			},
			{
				_id: '234224c3',
				createdAt: new Date(),
				likes: 3,
				title: 'How to get more donations',
				imageurl: 'http://lorempixel.com/400/300/',
				user: {
					_id: '2ns3r4be53he',
					name: 'Billy'
				},
				action: 'shared a best practice',
				actionurl: '/forum/more-donations'
			},{
				_id: '23rv42234c3',
				createdAt: new Date(),
				likes: 2,
				title: 'Screen Printing Available',
				imageurl: 'http://lorempixel.com/400/600/',
				user: {
					_id: '2n34sbes53he',
					name: 'Jose'
				},
				action: 'posted a resource',
				actionurl: 'resources/screen-printing'
			}
		];
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
