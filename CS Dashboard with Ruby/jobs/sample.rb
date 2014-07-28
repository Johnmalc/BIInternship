require 'csv'

current_valuation = 0
current_karma = 0


	#puts File.file?('jobs/mail.csv')
	#CSV.foreach('jobs/mail.csv', "r") do |row|
	#puts row.inspect
	#end
	#musi to byt slozka i kdyz to potom nefunguje localne
  #mail = CSV.read('mail.csv', "r", headers: true, col_sep: ",", converters: :numeric)
  #puts mail["num"][0]


SCHEDULER.every '2s' do
	last_valuation = current_valuation
	last_karma     = current_karma
	current_valuation = rand(100)
	current_karma     = rand(200000)

	#IMAIL anzahl, export to csv
	mail = CSV.read('jobs/mail.csv', "r", headers: true, col_sep:",", converters: :numeric)
	cur= mail["num"][0]

	send_event('valuation', { current: current_valuation, last: last_valuation })
	send_event('karma', { current: current_karma, last: last_karma })
	send_event('synergy',   { value: cur })
end
