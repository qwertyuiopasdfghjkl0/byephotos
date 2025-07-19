// Главный файл приложения
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация модулей
    NavigationService.init();
    UploadService.init();
    
    // Обновление информации пользователя
    UI.updateUserInfo();
    
    // Проверка авторизации
    const currentUser = StorageService.getCurrentUser();
    if (!currentUser) {
        document.getElementById('authModal').style.display = 'flex';
    }
    
    // Обработчики событий
    document.getElementById('logoutBtn').addEventListener('click', function() {
        AuthService.logout();
        UI.updateUserInfo();
        document.getElementById('authModal').style.display = 'flex';
    });
    
    document.getElementById('openChat').addEventListener('click', function() {
        UI.showNotification('Информация', 'Чат с поддержкой будет открыт в новом окне', 'info');
    });
    
    document.getElementById('startSellingBtn').addEventListener('click', function() {
        if (!StorageService.getCurrentUser()) {
            document.getElementById('authModal').style.display = 'flex';
        }
    });
    
    document.getElementById('closeAuthModal').addEventListener('click', function() {
        document.getElementById('authModal').style.display = 'none';
    });
    
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        if (AuthService.login(email, password)) {
            UI.updateUserInfo();
            document.getElementById('authModal').style.display = 'none';
        }
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        if (password !== confirmPassword) {
            UI.showNotification('Ошибка', 'Пароли не совпадают', 'error');
            return;
        }
        
        if (AuthService.register(name, email, password)) {
            UI.updateUserInfo();
            document.getElementById('authModal').style.display = 'none';
        }
    });
    
    // Переключение вкладок в модальном окне
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.getElementById(`${this.dataset.tab}Tab`).classList.add('active');
        });
    });
    
    // Принудительный сброс кэша при перезагрузке
    if (performance.navigation.type === 1) {
        window.location.href = window.location.href.split('?')[0] + '?nocache=' + Date.now();
    }
});
