function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const chatLog = document.getElementById('chat-log');
  chatLog.innerHTML += `<p><strong>ユーザ:</strong> ${userInput}</p>`;

  // ユーザの入力に応じてチャットボットの応答を作成
  let botResponse;
  if (userInput.includes('こんにちは')) {
    botResponse = 'チャットボット: こんにちは！';
  } else if (userInput.includes('おはよう')) {
    botResponse = 'チャットボット: おはようございます！';
  } else {
    botResponse = 'チャットボット: ごめんなさい、よくわかりません。';
  }

  chatLog.innerHTML += `<p><strong>チャットボット:</strong> ${botResponse}</p>`;
  document.getElementById('user-input').value = '';  // 入力欄をクリア
}
