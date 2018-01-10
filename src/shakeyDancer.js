// ShakeyDancer is a subclass of Dancer

var ShakeyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shakey');
  //console.log(this.$node);
};

ShakeyDancer.prototype = Object.create(Dancer.prototype);

ShakeyDancer.prototype.constructor = ShakeyDancer;

ShakeyDancer.prototype.step = function() {
  var context = this;

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(context, context.timeBetweenSteps);

  // console.log(this);
  // console.log('step... top.....', context.top);
  // console.log('step... left.....', context.left);

  //$(context).css({"position": "absolute"});
  context.$node.fadeToggle("slow", "linear");
  context.$node.effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );
  context.$node.effect( "shake", { direction: "left", times: 7, distance: 20}, 1000);
  // for (var i = 0; i < 3; i++) {
  //   context.setPosition(context.top + 30, context.left);
  //   context.setPosition(context.top - 60, context.left);
  //   context.setPosition(context.top + 30, context.left);
  //   context.setPosition(context.top - 60, context.left);
  // }

  // // for (var x = 1; x <= 3; x++) {
  // //   $(context).animate({ left: 43}, 10)
  // //     .animate({ left: 23 }, 50)
  // //     .animate({ left: 23 }, 10)
  // //     .animate({ left: 13 }, 50)
  // //     .animate({ left: 43 }, 50)
  // //     .animate({ left: 33 }, 50)
  // //     .animate({ left: 43 }, 50);
  // // }


};

// ShakeyDancer.prototype.lineUp = function (x, y) {
//   console.log('this is a test of ShakeyDancer lineUp');
//   this.$node.css({left: 100, top:300 });
// };


// --- TESTS ---
// var newShakeyDancer = new ShakeyDancer(10, 20, 100);
// console.log(newShakeyDancer);
