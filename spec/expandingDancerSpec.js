describe('expandingDancer', function() {

  var expandingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    expandingDancer = new ExpandingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(expandingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(expandingDancer.$node, 'animate');
    expandingDancer.step();
    expect(expandingDancer.$node.animate.called).to.be.true;
  });

  it('should have a step function that makes its node expand', function() {
    sinon.spy(expandingDancer.$node, 'animate');
    expandingDancer.step();
    expect(expandingDancer.$node.animate.calledWith({width: '1px'})).to.be.true;
    expect(expandingDancer.$node.animate.calledWith({width: '84px'})).to.be.true;
    expect(expandingDancer.$node.animate.calledWith({width: '33px'})).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(expandingDancer, 'step');
      expect(expandingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(expandingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(expandingDancer.step.callCount).to.be.equal(2);
    });
  });
});