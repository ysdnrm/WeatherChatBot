async function handleApiError(response) {
  const errorMessage = 'お天気情報を取得できませんでした。';
  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.message) {
      return errorData.message;
    }
  }
  return errorMessage;
}

export { handleApiError };