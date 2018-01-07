// ExplodingDancer is a subclass of Dancer

var ExplodingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('exploding');
  //console.log(this.$node);
};

ExplodingDancer.prototype = Object.create(Dancer.prototype);

ExplodingDancer.prototype.constructor = ExplodingDancer;

ExplodingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  var context = this;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // context.$node.fadeOut( function() { context.$node.fadeIn(); }.bind(context));
  context.$node.fadeToggle("slow", "linear");
  context.$node.effect("explode", "slow");

};


// --- TESTS ---
// var newExplodingDancer = new ExplodingDancer(10, 20, 100);
// console.log(ExplodingDancer);

