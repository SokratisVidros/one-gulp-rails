module JsonResponseAssertions
  def assert_json_response_empty
    assert_empty response.body.strip
  end

  def assert_json_response_has_key(key)
    assert json_response_body.has_key?(key.to_sym)
  end

  def refute_json_response_has_key(key)
    assert json_response_body.has_key?(key.to_sym)
  end

  def assert_json_response_equal(json)
    assert_equal json_response_body, json
  end

  def json_response_body(options = {symbolize_names: true})
    JSON.parse(response.body.strip, options)
  end
end
