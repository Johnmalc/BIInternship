require 'csv'

# Populate the graph with some random points

#prvni = []
#test = []
#revenues = ["5", "9", "2"]

mail = CSV.read('jobs/mail.csv', "r", headers: true, col_sep:",", converters: :numeric)
cur= mail["revenue"][0]

points = []
(1..10).each do |i|
  points << { x: i, y: cur }
end

=begin
mail = CSV.read('mail.csv', "r", headers: true, col_sep:",", converters: :numeric)
cur= mail["revenue"][0]
puts cur
test << {x: cur, y: rand(10)}
puts test
=end

SCHEDULER.every '2s' do

  last_x = points.last[:x]
  points.shift
  last_x += 1
  points << { x: last_x, y: cur}

  send_event('convergence', points: points)
end
