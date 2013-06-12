// Generated by CoffeeScript 1.6.3
(function() {
  var Animal, Cat, Dog, cat, dog, dog2, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Animal = (function() {
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.say = function() {
      return console.log('');
    };

    return Animal;

  })();

  Dog = (function(_super) {
    __extends(Dog, _super);

    function Dog() {
      _ref = Dog.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Dog.prototype.say = function() {
      return console.log(this.name + 'say bowwow');
    };

    return Dog;

  })(Animal);

  Cat = (function(_super) {
    __extends(Cat, _super);

    function Cat() {
      _ref1 = Cat.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Cat.prototype.say = function() {
      return console.log(this.name + 'say meow');
    };

    return Cat;

  })(Animal);

  dog = new Dog('Pochi');

  cat = new Cat('Tama');

  dog2 = new Dog('Shiro');

  dog.say();

  cat.say();

  dog2.say();

}).call(this);
