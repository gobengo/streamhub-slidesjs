require(['requirejs.conf'], function () {

require([
	'fyre',
	'streamhub-backbone',
	'streamhub-slidesjs'],
function (fyre, Hub, SlideshowView) {
	var Config = {
		el: document.getElementById('example'),
		network: 'livefyre.com',
		siteId: 323690,
		articleId: 'blizz_0'
	};
	fyre.conv.load({
		network: Config.network
	}, [{ app: 'sdk' }],
	function (sdk) {
		var collection = new Hub.Collection(),
			view = new SlideshowView({
				el: Config.el,
				collection: collection
			});
		collection.setRemote({
			sdk: sdk,
			siteId: Config.siteId,
			articleId: Config.articleId
		});
	});
});

});