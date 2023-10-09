// app/javascript/packs/weather_api.js

async function getWeather(city) {
  const apiKey = '1b3220269c9857e1dbcedefa834b80c6';  // お天気APIのAPIキーを取得してここにセット

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data.weather[0].description;  // お天気の状態を返す
  } catch (error) {
    console.error('お天気情報の取得に失敗しました:', error);
    return 'お天気情報を取得できませんでした。';
  }
}

export { getWeather };

