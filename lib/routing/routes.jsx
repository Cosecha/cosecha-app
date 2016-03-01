publicRoutes = FlowRouter.group({
	name: 'publicRoutes'
});

privateRoutes = FlowRouter.group({
	name: 'privateRoutes',
	triggersEnter: [function(context,redirect){
		if(!Meteor.userId()){
			return FlowRouter.go('/');
		}
	}]
});

publicRoutes.route('/', {
	name: 'Home',
	action: function(){
		ReactLayout.render(HomeLayout,{

		})
	}
});

privateRoutes.route('/dashboard', {
	name: 'Dashboard',
	action: function() {
		ReactLayout.render(Layout);
	}
});

publicRoutes.route('/signout',{
	name: 'Signout',
	action: function(){
		Meteor.logout(function(e){
			if(e){
				console.log(e);
			}
		});
		FlowRouter.go('/');
	}
});
