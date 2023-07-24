function startTranscription() {
  const imageInput = document.getElementById('imageInput');
  const resultDiv = document.getElementById('result');
  const file = imageInput.files[0];

  if (!file) return;

  Tesseract.recognize(
    file,
    'eng', // 英語の文字起こしを行う場合
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    resultDiv.textContent = text;
  });
}
