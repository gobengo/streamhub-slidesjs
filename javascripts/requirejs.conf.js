require.config({
    urlArgs: 'cb=' + Math.random(),
    baseUrl: 'javascripts',
    packages: [{
        name: 'streamhub-backbone',
        location: 'lib/streamhub-backbone'
    },{
        name: 'streamhub-slidesjs',
        location: 'lib/streamhub-slidesjs'
    }],
    paths: {
        jquery: 'lib/jquery/jquery',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        mustache: 'lib/mustache/mustache',
        isotope: 'lib/isotope/jquery.isotope',
        text: 'lib/requirejs-text/text',
        jasmine: 'lib/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': 'lib/jasmine/lib/jasmine-core/jasmine-html',
        'jasmine-jquery': 'lib/jasmine-jquery/lib/jasmine-jquery',
        slidesjs: 'lib/slidesjs-bower/source/slides.jquery',
        fyre: 'http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'jasmine-jquery': {
            deps: ['jquery', 'jasmine']
        },
        slidesjs: {
            deps: ['jquery']
        },
        fyre: {
            exports: 'fyre'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});