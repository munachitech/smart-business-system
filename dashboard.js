let container = document.getElementById("messages");

if (container) {

  let messages =
    JSON.parse(localStorage.getItem("messages")) || [];

  if (messages.length === 0) {
    container.innerHTML = "<p>No messages yet.</p>";
  }

  messages.forEach(function(msg) {
    container.innerHTML += `
      <div>
        <h3>${msg.name}</h3>
        <p>${msg.email}</p>
        <p>${msg.message}</p>
        <hr>
      </div>
    `;
  });

}