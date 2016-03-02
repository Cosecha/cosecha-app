Statusform = React.createClass({
	getInitialState(){
		return {
			image: ''
		}
	},
	resetFields(){
		ReactDOM.findDOMNode(this.refs.title).value = '';
		ReactDOM.findDOMNode(this.refs.imageid).value = '';
		ReactDOM.findDOMNode(this.refs.title).focus();
	},
	submitForm(e){
		e.preventDefault();
	var title = this.refs.title.value;
	var imageid = this.refs.imageid.value;
	var imageurl = '';
	if(imageid.length > 0){
		var image = Images.findOne({_id:imageid});
		if(image){
			imageurl = image.url();
		}
	}else{
		throw 'No file selected!';
	}
	Meteor.call('Posts.insert', title, imageid, imageurl, function(err){
		if(err){
			console.log(err);
		}
	});
	this.setState({image:'', filename:''});
	this.resetFields();

	},
	uploadFile(e){
		e.preventDefault();
		var that = this;
		FS.Utility.eachFile(e, function(file){
			Images.insert(file,function(err,fileObj){
				if(err){
					console.log(err);
				}else{
					that.setState({imageurl: '/cfs/files/images/' + fileObj._id + '/' + fileObj.data.blob.name ,filename:fileObj.data.blob.name });
				}

			});
		});
	},render(){
		return (
			<div className="panel panel-default">
				<div className="panel-content">
					<div className="panel-heading">
						Update Status
					</div>
					<form onSubmit={this.submitForm} className="form center-block">
						<input type="hidden" ref="imageid" value={this.state.imageurl}/>
						<div className="panel-body">
							<div className="form-group">
								<textarea placeholder="What do you want to share?" className="form-control input-lg" ref="title" id="title">

								</textarea>
								<p>{this.state.filename||''}</p>
							</div>
							<div className="panel-footer">
								<ul className="pull-left list-inline">
									<li><input onChange={this.uploadFile} ref="file" type="file" className="filepicker"/></li>
								</ul>
								<button className="btn btn-primary btn-sm postbutton">Post</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
});
