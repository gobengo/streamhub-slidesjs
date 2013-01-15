define([
'backbone',
'mustache',
'text!streamhub-backbone/templates/Content.html',
'streamhub-backbone/views/ContentView',
'streamhub-backbone/const/sources',
'slidesjs'
], function (
Backbone,
Mustache,
ContentTemplate,
ContentView,
sources,
slides) {

var SlideshowView = Backbone.View.extend(
/** @lends SlideshowView.prototype */
{
    /**
    SlideshowView displays Content using SlidesJS (http://slidesjs.com/)

    @class SlideshowView
    @param {Collection} opts.collection - A Collection of Content (see models/Collection)
    @param {Object} opts.contentViewOptions - Options to be passed to any Content Views this instantiates
           This is useful for passing custom templates for Content
    @param {Object} sources - An object to configure stuff on a per-source basis
           Supports `twitter` and `rss` sub objects with the same opts as this root level

    @augments Backbone.View
    @requires backbone
    @requires mustache

    @todo allow passing custom contentView
    */
    initialize: function (opts) {
        var that = this;
        this._sourceOpts = opts.sources || {};
        this._contentViewOpts = opts.contentViewOptions || {};

        this.collection.on('add', this._addItem, this);
        this.collection.on('initialDataLoaded', this.render, this);
    },
    tagName: "div",
    className: "hub-SlideshowView",
    events: {
    },
    /**
    Render the initial Content and init the slides plugin
    */
    render: function () {
        var self = this;

        // No streaming
        this.collection.off('add', this._addItem, this);

        this.$el.prev('.loading-indicator').hide();
        this.$el.html('<div class="slides_container"></div>');
        this.$el.addClass(this.className);
        
        if (this.collection) {
            this.collection.forEach(function(item, index, collection) {
                self._addItem(item, collection, {});
            });
        }

        this.$el.slides({
            container: 'slides_container',
            play: 5000,
            generatePagination: false,
            autoHeight: true
        });
        /** @todo allow passing slidesjs options to the view */
    }
});

/**
Add a pice of Content to the el
*/
SlideshowView.prototype._addItem = function(item, collection, opts) {
    var self = this,
        newItem = $(document.createElement('div')),
        data = item.toJSON();

    if ( ! data.author) {
        // TODO: These may be deletes... handle them.
        console.log("SlideshowView: No author for Content, skipping");
        return;
    }

    newItem.addClass('hub-item');

    // Interleave configured default opts with source-specific opts
    function _getContentViewOpts (content) {
        var opts = {},
            configuredOpts = _(opts).extend(self._contentViewOpts),
            perSourceOpts;
        if (content.get('source')==sources.TWITTER) {
            return _(configuredOpts).extend(self._sourceOpts.twitter||{});
        }
        if (content.get('source')==sources.RSS) {
            return _(configuredOpts).extend(self._sourceOpts.rss||{});
        }
        return configuredOpts;
    }

    // Create the ContentView so we can look at it and stuff!
    // render it in this newItem element
    var cv = new ContentView(_.extend({
        model: item,
        el: newItem
    }, _getContentViewOpts(item)));

    /**
    Put the newItem element in the DOM so we're done
    @todo do this in a more clever way to take into account
          the Collection's .comparator */
    if (collection.length - collection.indexOf(item)-1===0) {
        this.$el.find('.slides_container').prepend(newItem);
    } else {
        this.$el.find('.slides_container').append(newItem);
    }
};

return SlideshowView;
});