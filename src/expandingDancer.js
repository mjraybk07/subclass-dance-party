// ExpandingDancer is a subclass of Dancer

var ExpandingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('expanding');
};

ExpandingDancer.prototype = Object.create(Dancer.prototype);

ExpandingDancer.prototype.constructor = ExpandingDancer;

ExpandingDancer.prototype.step = function() {
  var context = this;

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(context, context.timeBetweenSteps);

  this.$node.animate({width: '1px'});
  this.$node.animate({width: '84px'});

};
