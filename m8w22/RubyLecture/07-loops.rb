=begin
    In JavaScript we had a few loops to pick from:
    * for
    * for...in
    * for...of
    * Array.forEach
    * while
=end



# An array!
# const array = ["Dog", "Cat", "Bird"]
# array[0]

# Ruby loop

counter = 0
# For loop
=begin
loop do 
    puts "Counter is at #{counter}"
    counter += 1
    # There is no ++
    break if counter > 6
end
=end
# While loop
=begin
while counter < 12 do
    puts "Counter is at #{counter}"
    counter += 1
end
=end

animals = ["Elephant", "Rhino", "Cat"]

=begin
 for of
    .forEach(element, index, array)
    
animals.each do | animal |
    puts animal
end

animals.each_with_index do | animal, index |
    puts "#{index}: #{animal}"
end

# Range of numbers
(30..40).each do |number|
    puts number
end

=end

# How to filter elements of an array

array_of_numbers = [5,23,80,90,2,6000,70,6,34,679]
# Filter out all numbers that are lower than 100
filtered_array = array_of_numbers.select do | number |
    number < 100
end
# puts .inspect
p filtered_array


