document.addEventListener('DOMContentLoaded', function() {
    // Инициализация модулей
    NavigationService.init();
    UploadService.init();
    
    // Обновление информации пользователя
    UI.updateUserInfo();
    
    // Обработчики событий
    document.getElementById('logoutBtn').addEventListener('click', function() {
        AuthService.logout();
        UI.updateUserInfo();
    });
    
    document.getElementById('openChat').addEventListener('click', function() {
        UI.showNotification('Информация', 'Чат с поддержкой будет открыт в новом окне', 'info');
    });
    
    // Принудительный сброс кэша при перезагрузке
    if (performance.navigation.type === 1) {
        window.location.href = window.location.href.split('?')[0] + '?nocache=' + Date.now();
    }
});
