// Модуль для работы с localStorage
const StorageService = {
    // Ключи для хранения данных
    STORAGE_KEYS: {
        USERS: 'photoMarketUsers',
        CURRENT_USER: 'photoMarketCurrentUser',
        PHOTOS: 'photoMarketPhotos'
    },
    
    // Загрузить данные из localStorage
    loadData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    
    // Сохранить данные в localStorage
    saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Получить список пользователей
    getUsers() {
        return this.loadData(this.STORAGE_KEYS.USERS) || [];
    },
    
    // Сохранить список пользователей
    saveUsers(users) {
        this.saveData(this.STORAGE_KEYS.USERS, users);
    },
    
    // Получить текущего пользователя
    getCurrentUser() {
        return this.loadData(this.STORAGE_KEYS.CURRENT_USER);
    },
    
    // Сохранить текущего пользователя
    saveCurrentUser(user) {
        this.saveData(this.STORAGE_KEYS.CURRENT_USER, user);
    },
    
    // Удалить текущего пользователя
    clearCurrentUser() {
        localStorage.removeItem(this.STORAGE_KEYS.CURRENT_USER);
    },
    
    // Получить список фотографий
    getPhotos() {
        return this.loadData(this.STORAGE_KEYS.PHOTOS) || [];
    },
    
    // Сохранить список фотографий
    savePhotos(photos) {
        this.saveData(this.STORAGE_KEYS.PHOTOS, photos);
    }
};

// Экспорт модуля
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = StorageService;
}