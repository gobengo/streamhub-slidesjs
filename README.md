StreamHub-SlidesJS displays Collections of StreamHub Content as a slideshow using [SlidesJS](http://slidesjs.com/). It exposes a pluggable SlideshowView for [StreamHub-Backbone](https://github.com/gobengo/streamhub-backbone).

<img src="http://d.pr/i/AjVB+" alt="StreamHub-Isotope Screenshot" height="300px"/>

[Livefyre StreamHub](http://www.livefyre.com/streamhub/) is the web's first Engagement Management System. StreamHub turns your site into a real-time social experience. Curate images, videos, and Tweets from across the social web, right into live blogs, chats, widgets, and dashboards. The world's biggest publishers and brands use StreamHub to power their online Content Communities.

[StreamHub-Backbone](https://github.com/gobengo/streamhub-backbone) displays Collections of Content in StreamHub Networks. To get your own Network so you can create your own Collections, engage your own community of SSO Users, and curate Content that appeals to your users, [contact Livefyre](http://www.livefyre.com/streamhub/) about subscribing to StreamHub.

# Example Usage
    
    // Load a Livefyre JS App
    fyre.conv.load({
        network: 'labs.fyre.co'
    },
    // specifically, the 'sdk' App
    [{app: 'sdk'}],
    
    function loadSlideshowView (sdk) {
        // Create a Collection and a View
        var slidesCollection = new Hub.Collection(),
            slideshowView = new SlideshowView({
                el: document.getElementById('slideshow'),
                collection: slidesCollection,
            });
            
        // Bind the mediaCollection to a remote source
        slidesCollection.setRemote({
            	sdk: sdk,
            	siteId: 320568,
                articleId: 'home_editorial'
        });
    });

# Getting Started

Install npm

Use npm to install this package

    npm install

[Bower](http://twitter.github.com/bower/) is used for dependency management. The npm postinstall script will run `bower install` and put dependencies in `lib/`.

StreamHub-SlidesJS is written as an [AMD](http://requirejs.org/docs/whyamd.html) module. You will need to use an AMD loader like [RequireJS](http://requirejs.org/) to use it. Add it as a package in your RequireJS config:

    packages: [{
        name: 'streamhub-slidesjs',
        location: './path/to/streamhub-slidesjs'
    }]

Then you can use it like:

    require(['streamhub-slidesjs'], function (SlideshowView) {
        // Hub some Streams, yo
    })

# Documentation
You can access the API Reference [on GitHub](http://gobengo.github.com/streamhub-isotope/docs)

The API reference also lives in the `docs/` directory. You can view them in your browser with:

    open docs/index.html

You can re-build the documentation using:

    npm run-script doc

# Tests
Behavior tests are included in the `tests/spec` directory. You can access an online test runner for the latest release [on GitHub](http://gobengo.github.com/streamhub-slidesjs/tests).

You can also run the tests via:

    npm test