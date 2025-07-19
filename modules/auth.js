// Модуль для работы с аутентификацией
const AuthService = {
    // Регистрация нового пользователя
    register(name, email, password) {
        const users = StorageService.getUsers();
        
        // Проверка, существует ли пользователь
        if (users.find(user => user.email === email)) {
            UI.showNotification('Ошибка', 'Пользователь с таким email уже существует', 'error');
            return false;
        }
        
        // Создание нового пользователя
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            photos: 0,
            sales: 0,
            balance: 0,
            joined: new Date().toISOString()
        };
        
        users.push(newUser);
        StorageService.saveUsers(users);
        StorageService.saveCurrentUser(newUser);
        
        UI.showNotification('Успех', 'Регистрация прошла успешно!', 'success');
        return true;
    },
    
    // Вход пользователя
    login(email, password) {
        const users = StorageService.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            StorageService.saveCurrentUser(user);
            UI.showNotification('Успех', 'Вход выполнен успешно!', 'success');
            return true;
        } else {
            UI.showNotification('Ошибка', 'Неверный email или пароль', 'error');
            return false;
        }
    },
    
    // Выход пользователя
    logout() {
        StorageService.clearCurrentUser();
        UI.showNotification('Информация', 'Вы вышли из системы', 'info');
    }
};

window.AuthService = AuthService;
