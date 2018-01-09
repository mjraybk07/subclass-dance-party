describe('explodingDancer', function() {

  var explodingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    explodingDancer = new ExplodingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(explodingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(explodingDancer.$node, 'fadeToggle');
    explodingDancer.step();
    expect(explodingDancer.$node.fadeToggle.called).to.be.true;
  });

  it('should have a step function that makes its node explode', function() {
    sinon.spy(explodingDancer.$node, 'effect');
    explodingDancer.step();
    expect(explodingDancer.$node.effect.called).to.be.true;
    expect(explodingDancer.$node.effect.calledWith('explode')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(explodingDancer, 'step');
      expect(explodingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(explodingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(explodingDancer.step.callCount).to.be.equal(2);
    });
  });
});