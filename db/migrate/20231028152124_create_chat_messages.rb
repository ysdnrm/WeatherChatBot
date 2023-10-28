class CreateChatMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :chat_messages do |t|
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
