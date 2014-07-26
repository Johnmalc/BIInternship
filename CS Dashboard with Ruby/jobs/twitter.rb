require 'twitter'


#### Get your twitter keys & secrets:
#### https://dev.twitter.com/docs/auth/tokens-devtwittercom
twitter = Twitter::REST::Client.new do |config|
  config.consumer_key = 'NOrVFOrKaGpOsD1LHjlDmD9lA'
  config.consumer_secret = '8Lg3hdsmIbEn9Q1fLTiWbCqHD7vp2OSc21mvTGElnudCr5jM7p'
  config.access_token = '49683260-3QMRZMbL2dwlgt2DgC6G5cX8JIw2ZDiEZrl8oFLZN'
  config.access_token_secret = 'WOaplOfNUT4TAJk5bPV0MrTTPm9Z5m5PRUTpYM7MwHvxL'
end

search_term = URI::encode('#time:matters')

SCHEDULER.every '10m', :first_in => 0 do |job|
  begin
    tweets = twitter.search("#{search_term}")

    if tweets
      tweets = tweets.map do |tweet|
        { name: tweet.user.name, body: tweet.text, avatar: tweet.user.profile_image_url_https }
      end
      send_event('twitter_mentions', comments: tweets)
    end
  rescue Twitter::Error
    puts "\e[33mFor the twitter widget to work, you need to put in your twitter API keys in the jobs/twitter.rb file.\e[0m"
  end
end