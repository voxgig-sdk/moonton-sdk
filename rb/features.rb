# Moonton SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MoontonFeatures
  def self.make_feature(name)
    case name
    when "base"
      MoontonBaseFeature.new
    when "test"
      MoontonTestFeature.new
    else
      MoontonBaseFeature.new
    end
  end
end
