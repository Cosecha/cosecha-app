Meteor.methods({
	'Posts.insert': function(title, imageurl){
		var actionPhrase = '';
		if(imageurl.length < 1){
			actionPhrase = 'wrote a post';
		}else{
			actionPhrase = 'posted a picture';
		}

		var post = {
			user: Meteor.user(),
			createdAt: new Date(),
			imageurl: imageurl,
			title: title,
			likes: [],
			comments: [],
			action: actionPhrase,
			actionurl: '#'
		};
		Posts.insert(post);
	},
	'changeAvatar': function(user,fileid){
		var file = 'http://placehold.it/150x150';
            if (fileid) {
                file = Images.findOne({_id: fileid});
            }
            var data = file._id;

            Meteor.users.update(Meteor.userId(), {$set: {'profile.avatar': data}});
	},
	'likePost': function(userid,postid){
		console.log(userid, postid);
    Posts.update(postid, {$addToSet: {likes: userid}});
	}
});
