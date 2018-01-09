describe('shakeyDancer', function() {

  var shakeyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakeyDancer = new ShakeyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(shakeyDancer.$node, 'fadeToggle');
    shakeyDancer.step();
    expect(shakeyDancer.$node.fadeToggle.called).to.be.true;
  });

  it('should have a step function that makes its node shake', function() {
    sinon.spy(shakeyDancer.$node, 'effect');
    shakeyDancer.step();
    expect(shakeyDancer.$node.effect.called).to.be.true;
    expect(shakeyDancer.$node.effect.calledWith('shake')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shakeyDancer, 'step');
      expect(shakeyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakeyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakeyDancer.step.callCount).to.be.equal(2);
    });
  });
});