# class Rectangle {

# }

# const newRectangle = new Rectangle

class NewPet
    # What type are they
    # getters and setter
    # Reads
    # attr_reader :name, :type
    # Rewrite value
    # attr_writer :age

    # Access and rewrite all keys of the class
    attr_accessor :name, :type, :age

    def initialize(name, type, age)
        # this.name = name
        @name = name
        @type = type
        @age = age
    end
    private

    def say_hello
        puts "Hey my name is #{name}"
    end

    # Anything UNDER the private keyword can only be run within the class

end

new_pet = NewPet.new("Air bud", "Dog", "7")
p new_pet
puts new_pet.name
new_pet.age = 8
new_pet.say_hello

# How would I do this in javascript?
# Break it down
# And use google/ai tools if needed