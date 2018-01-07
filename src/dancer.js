/*// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};*/

// change makeDancer to Dancer
// remove line #4
// chnage any ref to dancer to this
// delete line #31
// make Dancer.prototype.step
// make Dancer.prototype.setPosition

var Dancer = function (top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function () {
  var context = this;
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);
  //console.log(this.timeBetweenSteps);
  //console.log('step function...');
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  //console.log('setPosition.....', top, left);
};

// --- TESTS ---
// var newDancer = new Dancer(10, 20, 100);
// console.log(newDancer);

