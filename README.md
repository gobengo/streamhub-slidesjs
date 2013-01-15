StreamHub-SlidesJS displays Collections of StreamHub Content as a slideshow using [SlidesJS](http://slidesjs.com/).

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

[SlidesJS](http://slidesjs.com/) is used for the slideshow functionality, but cannot currently be downloaded using Bower. You can download this from [here](http://slidesjs.com/downloads/slides.zip). You should unzip it in your 'components' directory. I have an issue open to get SlidesJS working with Bower: https://github.com/nathansearles/Slides/issues/488

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