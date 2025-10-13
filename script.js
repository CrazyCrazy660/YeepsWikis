setInterval(function() {
  fetch('/get_new_text')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    });
}, 5000);
