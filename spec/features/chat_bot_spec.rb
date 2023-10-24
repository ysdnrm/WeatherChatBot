# spec/features/chat_bot_spec.rb

require 'rails_helper'

RSpec.describe 'ChatBot' do
  it 'responds with weather information' do
    visit '/'
    fill_in 'user-input', with: 'Tokyo'
    click_button '送信'
    expect(page).to have_content('チャットボット:')
  end
end
