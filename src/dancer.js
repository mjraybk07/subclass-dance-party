// Dancer Super Class Creates and returns a new dancer object that can step

var Dancer = function (top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // schedules the next step
  this.step();
  // sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.step = function () {
  var context = this;
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);

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

Dancer.prototype.lineUp = function () {
  this.$node.css({top: 100, left:100});
  console.log('lineUp function');
};

// --- TESTS ---
// var newDancer = new Dancer(10, 20, 100);
// console.log(newDancer);

