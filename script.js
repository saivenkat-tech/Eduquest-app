function askAI() {
  const question = document.getElementById('question').value;
  document.getElementById('response').innerText = 'Thinking...';
  // Simulated response
  setTimeout(() => {
    document.getElementById('response').innerText = 'AI response to: ' + question;
  }, 1000);
}

function uploadFile() {
  const file = document.getElementById('fileInput').files[0];
  if (file) {
    alert('File "' + file.name + '" uploaded successfully (simulated).');
  } else {
    alert('Please select a file to upload.');
  }
}
