/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/


// change makeBlinkyDancer to BlinkyDancer
// update line 2 call Dancer super class with (top, left, timeBetweenSteps)
// chnage any ref to blinkyDancer to this
// make BlinkyDancer.prototype.step
// remove line #18
// update spec file

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  //console.log(this.$node);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // console.log('BlinkyDancer.prototype.step');
  // console.log(this);
  // console.log(this.timeBetweenSteps);

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();

};


// --- TESTS ---
// var newBlinkyDancer = new BlinkyDancer(10, 20, 100);
// console.log(newBlinkyDancer);

