=begin

callbacks
HigherOrderFunction(callbacks)

=end

def block_friendly_method
    # console.log("Running first line in the method")
    puts "Running first line in the method"
    yield #callback()
    puts "Running last line in the method"
end


block_friendly_method do
    puts "This is my callback"
end

# lambdas
# Blocks stored in memory

times_two_function = lambda {|x| x * 2}

puts times_two_function.call(5)


