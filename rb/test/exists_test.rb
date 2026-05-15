# Moonton SDK exists test

require "minitest/autorun"
require_relative "../Moonton_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MoontonSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
