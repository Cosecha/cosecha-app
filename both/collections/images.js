Images = new FS.Collection('images', {
	stores:[new FS.Store.FileSystem('images', {path:'~/uploads'})],
	filter: {
    maxSize: 548576, // in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png', 'jpg', 'jpeg']
    },
    deny: {
      contentTypes: ['video/mp4'],
      extensions: ['mp4']
    },
  	onInvalid: function (message) {
      if (Meteor.isClient) {
				bootbox.alert(message + '<p>Please upload only PNG or JPG files.</p>');
				Session.set('fileError', 'error');
      }
    }
  }
});
Images.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});
