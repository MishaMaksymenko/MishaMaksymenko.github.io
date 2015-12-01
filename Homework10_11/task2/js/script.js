var users = [];

createUsersList();

var currentUser = prompt('Введите имя пользователя');

if ( checkUser(currentUser) ) {
	alert(currentUser + ', вы успешно вошли');
} else {
	alert('Ошибка. Пользователя с таким именем не существует');
}

function createUsersList() { //Создает список из 5 пользователей
	for (var i = 0; i < 5; i++) {
	  var newUser = prompt('Введите имя нового пользователя');
	  users.push(newUser);
	}
}

function checkUser(currentUser) { //Проверяет существование пользователя
	for (var i = 0; i < users.length; i++) {
		if (users[i] == currentUser) {
			return true;
		} 
	}

	return false;
}