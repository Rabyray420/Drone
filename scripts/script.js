document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Здесь будет код для отправки данных на сервер

    alert("Сообщение отправлено!,".name);
    this.reset();
  });
