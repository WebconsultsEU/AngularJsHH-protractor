'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('angularTrafficControl', function() {

    browser.get('index.html');

    describe('Form is present and has correct input set', function( ) {

        beforeEach(function() {
            browser.get('index.html#/view1');
        });

        it('Should have an input form', function () {
            var form = element(by.css('form'));
            expect(form).toBeDefined();
        });
        it('Should have an input for speed', function () {
            var speedInput = element(by.model('speed'));
            expect(speedInput).toBeDefined();
        });

        it('Should have an input area', function () {
            var areaInput = element(by.model('area'));
            expect(areaInput).toBeDefined();
        });
        it('Should have a submit button', function () {
            var submitInput = element(by.css('input[type="submit"]'));
            expect(submitInput).toBeDefined();
        });
        it('Should be submittet when the enter key was hit', function() {
            element(by.model('speed')).sendKeys(protractor.Key.ENTER);
            var feeP = element(by.css('p.fee'));
            expect(feeP).toBeDefined();
        });
    });
    describe('Handle the form areas', function() {

        beforeEach(function() {
            browser.get('index.html#/view2');
        });

        it('should display error when speed is not a number', function() {

        });
        it('should display error when area is empty', function() {

        });

    });
});
