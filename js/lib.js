// Generated by CoffeeScript 1.3.3
var Poller;

(function() {

var _ref;

Poller = (function() {
  var getRandomNumber, sortData;

  function Poller(options, callback) {
    var defaults;
    this.callback = callback;
    defaults = {
      frequency: 60,
      limit: 10
    };
    this.config = $.extend(defaults, options);
    this.awesomeBands = ['Creed', 'Godsmack', 'Hoobastank', 'Insane Clown Posse', 'Kid Rock', 'Limp Bizkit', 'Mudvayne', 'Nickelback', 'Puddle Of Mudd', 'Staind'];
  }

  getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  sortData = function(data) {
    return data.sort(function(a, b) {
      return b.count - a.count;
    });
  };

  Poller.prototype.getData = function() {
    var awesomeBand, _i, _len, _ref, _results;
    _ref = this.awesomeBands;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      awesomeBand = _ref[_i];
      _results.push({
        name: awesomeBand,
        count: getRandomNumber(0, 1000)
      });
    }
    _results = sortData(_results);
    return _results;
  };

  Poller.prototype.processData = function() {
    return sortData(this.getData()).slice(0, this.config.limit);
  };

  Poller.prototype.start = function() {
    var _this = this;
    this.interval = setInterval((function() {
      return _this.callback(_this.processData());
    }), this.config.frequency * 1000);
    this.callback(this.processData());
    return this;
  };

  Poller.prototype.stop = function() {
    clearInterval(this.interval);
    return this;
  };

  return Poller;

})();

if ((_ref = window.massrel) == null) {
  window.massrel = {
    Poller: Poller
  };
}

}).call(this);
