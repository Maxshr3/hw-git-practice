function validate(login, password) {
  if (!login || !password) {
    console.log("Логин или пароль невалиден!")
  }
  console.log("Функция validate");
  return console.log("Валидация успешна!");
}