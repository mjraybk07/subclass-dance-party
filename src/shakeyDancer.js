// ShakeyDancer is a subclass of Dancer

var ShakeyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shakey');
  //console.log(this.$node);
};

ShakeyDancer.prototype = Object.create(Dancer.prototype);

ShakeyDancer.prototype.constructor = ShakeyDancer;

ShakeyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this.timeBetweenSteps);

  var context = this;
  // console.log(this);
  // console.log('step... top.....', context.top);
  // console.log('step... left.....', context.left);

  context.$node.fadeToggle("slow", "linear");
  context.$node.effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );
  context.$node.effect( "shake", { direction: "left", times: 7, distance: 20}, 1000);
};


// --- TESTS ---
// var newShakeyDancer = new ShakeyDancer(10, 20, 100);
// console.log(newShakeyDancer);
