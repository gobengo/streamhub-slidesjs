define([
    'jasmine-jquery',
    'streamhub-slidesjs',
    'streamhub-backbone'],
function (jasmine, SlideshowView, Hub) {
describe('SlideshowView', function () {
    
    it ("throws if constructed without a Hub.Collection", function () {
        expect(function () {
            new SlideshowView();
        }).toThrow();
        expect(function () {
            new SlideshowView({});
        }).toThrow();
        expect(function () {
            new SlideshowView({
                collection: []
            });
        }).toThrow();
    });

    describe ("when constructed with only a Hub.Collection", function () {
        var view;
        beforeEach(function () {
            this.view = new SlideshowView({
                collection: new Hub.Collection()
            });
        });
        it ("is defined", function () {
            expect(this.view).toBeDefined();
        });
        it ("has an el that is not in the DOM", function () {
            expect($(document).find(this.view.el).length).toBe(0);
        });
        it ("has an .el with the correct .className", function () {
            var view = this.view;
            expect(view.$el.is('.'+view.className)).toBe(true);
        });
        describe ("when .setElement is later called", function () {
            beforeEach(function () {
                setFixtures('<div id="env"></div>');
                this.view.setElement($('#env'));
            });
            it ("has an el in the DOM", function () {
                expect($(document).find(this.view.el).length).toBe(1);
            });
            describe ("when .render is called", renderView);
        });
    });

    describe ("when constructed with an .el and a Hub.Collection", function () {
        beforeEach(function () {
            setFixtures('<div id="env"></div>');
            this.view = new SlideshowView({
                collection: new Hub.Collection(),
                el: $('#env')
            });
        });
        it ("is defined", function () {
            expect(this.view).toBeDefined();
        });
        it ("has an element that is in the DOM", function () {
            expect($(document).find(this.view.el).length).toBe(1);
        });
        describe ("when .render is called", renderView);
    });

    function renderView () {
        beforeEach(function () {
            this.view.render();
        });
        it ("has a .el with the correct .className", function () {
            expect(this.view.$el.is('.'+this.view.className)).toBe(true);
        });
    }

    describe ("when .collection.setRemote is called after construction", function () {
        xit ("should display data from the remote Collection", function () {
        });
    });
}); 
});