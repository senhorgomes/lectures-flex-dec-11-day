# In JS we had: == / ===

p (true == true)
p (true == false) # False
p ("true" == true) # False
p (3 == 3)
p (3 == 3.00)
p (3 == "3") # False

# if else
=begin

if(user_num > 10){
    console.log("This name is greater than 10")
} else if(user_num < 5) {
    console.log("This name is lesser than 5")
} else {
    console.log("This number falls between 5-10")
}
=end
user_num = 1
if user_num > 10
    puts "This number is greater than 10"
elsif user_num < 5 
    puts "This number is lesser than 5"
else 
    puts "This number falls between 5-10"
# When does this function end? We need to be specific
end

# Switch statements

=begin
switch(user_num) {
    case user_num > 10:
        console.log("This number is greater than 10")
        break;
    default:
        console.log("This number falls between 5-10")
}
=end

case user_num 
    when user_num > 10:
        puts "This number is greater than 10"
    when user_num < 5:
        puts "This number is lesser than 5"
    else # Default action
        puts "This number falls between 5-10"
end
# Short hand
# (5> 3) && console.log("5 is greater than 3")
# &&

puts "5 is greater than 3" if 5 > 3

snowing = false

puts "Put away that shovel and enjoy the sun!" unless snowing