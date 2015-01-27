'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

/**
 Tabelle Ausserorts
 bis 10 km/h	10 EUR\n\n
 11 bis 15 km/h	20 EUR
 16 bis 20 km/h	30 EUR
 21 bis 25 km/h	70 EUR	1
 26 bis 30 km/h	80 EUR	1
 31 bis 40 km/h	120 EUR	1
 41 bis 50 km/h	160 EUR	2	1 Monat
 51 bis 60 km/h	240 EUR	2	1 Monat
 61 bis 70 km/h	440 EUR	2	2 Monate
 über 70 km/h	600 EUR	2	3
 */
/*
$arrayAusserorts = array(
    "0" => array("betrag" => "0 EUR", "punkte" => 0, "sperre" => 0),
"1" => array("betrag" => "10 EUR", "punkte" => 0, "sperre" => 0),
"11" => array("betrag" => "20 EUR", "punkte" => 0, "sperre" => 0),
"16" => array("betrag" => "30 EUR", "punkte" => 0, "sperre" => 0),
"21" => array("betrag" => "70 EUR", "punkte" => 1, "sperre" => 0),
"26" => array("betrag" => "80 EUR", "punkte" => 1, "sperre" => 0),
"31" => array("betrag" => "120 EUR", "punkte" =>1, "sperre" => 0),
"41" => array("betrag" => "160 EUR", "punkte" => 2, "sperre" => 1),
"51" => array("betrag" => "240 EUR", "punkte" => 2, "sperre" => 1),
"61" => array("betrag" => "440 EUR", "punkte" => 2, "sperre" => 2),
"71" => array("betrag" => "600 EUR", "punkte" => 2, "sperre" => 3)
);*/

/**
 Tabelle Innerorts
 Geschwindigkeitsüberschreitung Innerorts
 bis 10 km/h	15 EUR
 11 bis 15 km/h	25 EUR
 16 bis 20 km/h	35 EUR
 21 bis 25 km/h	80 EUR	1
 26 bis 30 km/h	100 EUR	1
 31 bis 40 km/h	160 EUR	2	1 Monat
 41 bis 50 km/h	200 EUR	2	1 Monat
 51 bis 60 km/h	280 EUR	2	2 Monate
 61 bis 70 km/h	480 EUR	2	3 Monate
 über 70 km/h	680 EUR	2	3 Monate
 */

/*$arrayInnerorts = array(
    "0" => array("betrag" => "0 EUR", "punkte" => 0, "sperre" => 0),
"1" => array("betrag" => "15 EUR", "punkte" => 0, "sperre" => 0),
"11" => array("betrag" => "25 EUR", "punkte" => 0, "sperre" => 0),
"16" => array("betrag" => "35 EUR", "punkte" => 0, "sperre" => 0),
"21" => array("betrag" => "80 EUR", "punkte" => 1, "sperre" => 0),
"26" => array("betrag" => "100 EUR", "punkte" => 1, "sperre" => 0),
"31" => array("betrag" => "160 EUR", "punkte" =>1, "sperre" => 1),
"41" => array("betrag" => "200 EUR", "punkte" => 2, "sperre" => 1),
"51" => array("betrag" => "280 EUR", "punkte" => 2, "sperre" => 2),
"61" => array("betrag" => "480 EUR", "punkte" => 2, "sperre" => 3),
"71" => array("betrag" => "680 EUR", "punkte" => 2, "sperre" => 3)
);*/


describe('angularTrafficControl Correct Seed', function() {

    browser.get('index.html');

    // how to set examples to fixtures

    /*var $expected = {
    {except: {speed : 0, inTown : false}, strafe: {fee: 0, points: 0, blocked: 0 }},
     
    }*/



    describe('Should calculate correct fees', function( ) {

        it('Should have an input form', function () {

        });
        it('Should have an input for speed', function () {

        });

        it('Should have an input area', function () {

        });
        it('Should have a submit button', function () {

        });
        it('Should be submittet when the enter key was hit', function () {

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
