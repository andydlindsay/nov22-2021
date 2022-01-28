class Car < ParentClass

  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

#  attr_reader(:model, :year, :make)
#  attr_writer :model, :make, :year

#  attr_accessor(:year, :make, :model)
  attr_accessor :year, :make, :model

#  def make
#   @make
#  end
#  def make= new_make
#   @make = new_make
#  end

end

# car = new Car()
car = Car.new 'Toyota', 'Tercel', 1986

p car
puts car.make

# car.make=('Dodge')
car.make = 'Dodge'
p car

puts car.model
car.model = 'Ram'
p car

puts car.year
car.year = 2000
p car
