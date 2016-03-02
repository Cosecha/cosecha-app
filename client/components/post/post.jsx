Post = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};
		var createdAt =  this.props.post.createdAt ? this.props.post.createdAt : new Date();
		data.time = moment(createdAt).fromNow();
		return data;
	},
	getInitialState(){
		var createdAt =  this.props.post.createdAt ? this.props.post.createdAt : new Date();
		return {
			time: moment(createdAt)
		}
	},
	render(){
		return (
			<div>
				<div className="col-sm-12">
					<div className="panel panel-white panel-shadow post">
						<div className="post-heading">
							<div className="pull-left image">
								<Avatar klass="img-circle avatar" user={this.props.post.user._id} />

							</div>
							<div className="pull-left meta">
								<div className="title h5">
									<b><Username user={this.props.post.user._id}/></b> <span className="action-type">{this.props.post.action}</span>.
								</div>
								<h6 className="text-muted time">{this.data.time}</h6>
							</div>
						</div>
						<div className="col-md-12 post-description">
							<h4><a href={this.props.post.actionurl}>{this.props.post.title}</a></h4>
							<br/>
						</div>
						<div className="col-md-12">
							<a href={this.props.post.actionurl}><img src={this.props.post.imageurl} className="img-responsive" /></a>
							<br />
							<div className="actions">
								<a href="#" className="btn btn-default stat-item">
									<i className="fa fa-thumbs-up icon"></i>
								</a>&nbsp;
								{this.props.post.likes} Likes
							</div>
							<div className="post-footer CommenList">

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
