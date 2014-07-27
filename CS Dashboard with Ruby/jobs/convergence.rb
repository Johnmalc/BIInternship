require 'csv'

# Populate the graph with some random points
points = []
(1..10).each do |i|
  points << { x: i, y: rand(50) }
end
last_x = points.last[:x]

prvni = []
test = []
revenues = ["5", "9", "2"]

=begin
mail = CSV.read('mail.csv', "r", headers: true, col_sep:",", converters: :numeric)
cur= mail["revenue"][0]
puts cur
test << {x: cur, y: rand(10)}
puts test
=end

SCHEDULER.every '2s' do
  points.shift
  last_x += 1
  points << { x: last_x, y: rand(50) }
  prvni << { x: revenues[0], y:revenues[1] }

  mail = CSV.read('jobs/mail.csv', "r", headers: true, col_sep:",", converters: :numeric)
  cur= mail["revenue"][0]
  test << {x: rand(10), y: cur}

  send_event('convergence', points: test)
end
