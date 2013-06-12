class Animal
    constructor: (name) ->
        @name = name
    say: ->
       console.log ''


class Dog extends Animal
    say: ->
        console.log @name + 'say bowwow'

class Cat extends Animal
    say: ->
        console.log @name + 'say meow'

dog = new Dog 'Pochi'
cat = new Cat 'Tama'
dog2 = new Dog 'Shiro'

dog.say()
cat.say()
dog2.say()
