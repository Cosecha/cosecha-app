Post = React.createClass({
	render(){
		return (
			<div className="col-sm-12">
				<div className="panel panel-white panel-shadow">
					<div className="post-heading">
						<div className="pull-left image">
							<img src="http://placehold.it/60x60" className="img-circle img-responsive" />

						</div>
						<div className="pull-left meta">
							<div className="title h5">
								<b>Celso</b> made a post.
							</div>
							<h6 className="text-muted time">An hour ago</h6>
						</div>
					</div>
					<div className="col-md-12 post-description">
						<h3>This is a post message</h3>
						<br/>
					</div>
					<div className="col-md-12">
						<img src="http://placehold.it/600x600" className="img-responsive" />
						<br />
						<div className="actions">
							<a href="#" className="btn btn-default stat-item">
								<i className="fa fa-thumbs-up icon"></i>
							</a>&nbsp;
							Likes
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
