require "test_helper"

class ChatBotsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chat_bots_index_url
    assert_response :success
  end
end
