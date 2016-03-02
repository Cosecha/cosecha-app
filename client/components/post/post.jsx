Post = React.createClass({
	render(){
		return (
			<div className="col-sm-12">
				<div className="panel panel-white panel-shadow">
					<div className="post-heading">
						<div className="pull-left image">
							<Avatar klass="img-circle avatar" user={this.props.post.user._id} />

						</div>
						<div className="pull-left meta">
							<div className="title h5">
								<b>{this.props.post.user.name}</b> <span className="action-type">{this.props.post.action}</span>.
							</div>
							<h6 className="text-muted time">An hour ago</h6>
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
						<div className="post-footer">
							Comment List
						</div>
					</div>
				</div>
			</div>
		)
	}
});
