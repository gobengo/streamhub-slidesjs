StreamHub-SlidesJS displays Collections of StreamHub Content as a slideshow using [SlidesJS](http://slidesjs.com/). It exposes a pluggable SlideshowView for [StreamHub-Backbone](https://github.com/gobengo/streamhub-backbone).

[Livefyre StreamHub](http://www.livefyre.com/streamhub/) is the web's first Engagement Management System. StreamHub turns your site into a real-time social experience. Curate images, videos, and Tweets from across the social web, right into live blogs, chats, widgets, and dashboards. The world's biggest publishers and brands use StreamHub to power their online Content Communities.

[StreamHub-Backbone](https://github.com/gobengo/streamhub-backbone) displays Collections of Content in StreamHub Networks. To get your own Network so you can create your own Collections, engage your own community of SSO Users, and curate Content that appeals to your users, [contact Livefyre](http://www.livefyre.com/streamhub/) about subscribing to StreamHub.

# Example Usage

    var app = new Hub({
        sdk: livefyreSdk,
        collection: {
            siteId: "303772",
            articleId: "prod0"
        },
        el: document.getElementById("example"),
        view: SlideshowView
    }).start();

# Using It

[Bower](http://twitter.github.com/bower/) is used for dependency management. You can install the dependencies with

    bower install

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

There is HTML documentation in the `docs/` directory.