require 'csv'

agents_csv = CSV.read('jobs/agents.csv', "r", headers: true, col_sep:",")
agents = agents_csv["Agents"]
count = agents_csv["Count"]

#it = []
#it << {label: agents, value: count}
#puts it


SCHEDULER.every '2s' do
#agents_csv = CSV.read('jobs/agents.csv', "r", headers: true, col_sep:",")
#agents = agents_csv["Agents"]
#agents_count = agents_csv["Count"]
  #puts agents
  #buzzwords = agents
  #buzzword_counts = Hash.new({ value: 0 })

  #mail = CSV.read('jobs/mail.csv', "r", headers: true, col_sep:",", converters: :numeric)
  #cur= mail["revenue"][0]

  #count = Hash.new({value: agents_count})
  #random_buzzword = buzzwords.sample
  #count[agents] = {
  #   label: agents,
  #   value: (count[agents])
  #}
  it = []
  it << {label: agents, value: count}

  send_event('buzzwords', { items: it.values})
end
