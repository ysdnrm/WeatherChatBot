import { getWeather } from './weather_api';  // weather_api.jsから関数をインポート

async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const chatLog = document.getElementById('chat-log');
  chatLog.innerHTML += `<p><strong>ユーザ:</strong> ${userInput}</p>`;

  // お天気情報を取得
  const weather = await getWeather(userInput);

  // チャットボットの応答を表示
  chatLog.innerHTML += `<p><strong>チャットボット:</strong> 今日の天気は「${weather}」です。</p>`;

  document.getElementById('user-input').value = '';  // 入力欄をクリア
}

