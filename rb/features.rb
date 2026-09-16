# Moonton SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MoontonFeatures
  def self.make_feature(name)
    case name
    when "base"
      MoontonBaseFeature.new
    when "ratelimit"
      MoontonRatelimitFeature.new
    when "retry"
      MoontonRetryFeature.new
    when "test"
      MoontonTestFeature.new
    when "timeout"
      MoontonTimeoutFeature.new
    else
      MoontonBaseFeature.new
    end
  end
end
