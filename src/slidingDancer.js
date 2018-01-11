// SlidingDancer is a subclass of Dancer

var SlidingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sliding');
};

SlidingDancer.prototype = Object.create(Dancer.prototype);

SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {
  var context = this;
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(context, context.timeBetweenSteps);
  context.$node.animate({left: $(window).width() - 100}, 1000, function() {
    context.bounce();
  });
};

SlidingDancer.prototype.bounce = function() {
  var context = this;
  context.$node.animate({left: 500}, 600, function() {
    context.step();
  });
};


