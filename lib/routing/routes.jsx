publicRoutes = FlowRouter.group({
	name: 'publicRoutes'
});

privateRoutes = FlowRouter.group({
	name: 'privateRoutes',
	triggersEnter: [function(context,redirect){
		Session.set('lsbClass', 'animated slideOutLeft col-xs-5 col-3 col-md-3');
		Session.set('rsbClass', 'animated slideOutRight col-xs-5 col-3 col-md-3');
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
		ReactLayout.render(Layout, {
			content: <Main />
		})
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

privateRoutes.route('/profile', {
	name: 'Profile',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Profile/>
		})
	}
});

// ======================================
// ======================================
//
// Start all the main page routes
//
// ======================================
// ======================================

privateRoutes.route('/dna', {
	name: 'DNA',
	action: function(){
		ReactLayout.render(Layout, {
			content: <DNA/>
		})
	}
});

privateRoutes.route('/wiki', {
	name: 'Wiki',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Wiki/>
		})
	}
});

privateRoutes.route('/forum', {
	name: 'Forum',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Forum/>
		})
	}
});

privateRoutes.route('/resources', {
	name: 'Resources',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Resources/>
		})
	}
});

privateRoutes.route('/circle', {
	name: 'Circle',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Circle/>
		})
	}
});

privateRoutes.route('/village', {
	name: 'Village',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Village/>
		})
	}
});

privateRoutes.route('/region', {
	name: 'Region',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Region/>
		})
	}
});

privateRoutes.route('/movement', {
	name: 'Movement',
	action: function(){
		ReactLayout.render(Layout, {
			content: <Movement/>
		})
	}
});
