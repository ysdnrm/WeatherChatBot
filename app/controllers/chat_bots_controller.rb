class ChatBotsController < ApplicationController
  
  def index
    @response = "チャットボット: こんにちは！何か質問があればどんどん聞いてください。"
  end
  
  def get_bot_response
    user_input = params[:user_input]
    chat_message = ChatMessage.find_by(question: user_input)
    if chat_message
      render plain: chat_message.answer
    else
      render plain: "チャットボット: ごめんなさい、よくわかりません。"
    end
  end
end
