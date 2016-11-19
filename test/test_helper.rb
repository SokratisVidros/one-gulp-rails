ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'mocha/mini_test'

Dir[File.dirname(__FILE__) + '/support/*.rb'].each { |file| require file }

# Suppress deprecation warnings caused be cancancan using before_filter method
ActiveSupport::Deprecation.silenced = true

class ActiveSupport::TestCase
  fixtures :all

  include ArrayAssertions
  include JsonResponseAssertions
end
