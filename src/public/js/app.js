const messageList = document.quereySelectior("ul");
const messageForm = document.quereySelectior("form");
const socket = new WebSocket(`ws://${window.location.host}`);

function handleOpen() {
  console.log("Connected to Server");
}

socket.addEventListener("open", handleOpen);

socket.addEventListener("message", (message) => {
  console.log("New message:", message.data);
});

socket.addEventListener("close", () => {
  console.log("Connected from servcer X");
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.quereySelectior("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
