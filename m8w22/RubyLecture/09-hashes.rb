# Objects = Hashes


=begin
JS key-value pairs:

{
    key: "value"
}
=end

student = {
    "first_name" => "Bryan",
    "last_name" => "Gomes"
}
# 
# puts student["first_name"]


student = {
    :first_name "Bryan",
    :last_name "Gomes"
}
student = {
    first_name: "Bryan",
    last_name: "Gomes"
}
# 
puts student[:first_name]