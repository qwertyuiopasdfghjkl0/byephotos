// Модуль для работы с навигацией
const NavigationService = {
    // Инициализация навигации
    init() {
        // Показываем главную страницу при загрузке
        this.showPage('home');
        document.querySelector('[data-page="home"]').classList.add('active');
        
        // Обработчики для навигационных ссылок
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Удаляем активный класс у всех ссылок
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                // Добавляем активный класс текущей ссылке
                link.classList.add('active');
                
                const pageId = link.dataset.page;
                this.showPage(pageId);
            });
        });
    },
    
    // Показать страницу
    showPage(pageId) {
        // Скрываем все страницы
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Показываем выбранную страницу
        document.getElementById(pageId).classList.add('active');
        
        // Обновляем данные на странице
        if (pageId === 'portfolio') {
            UI.loadPortfolio();
        } else if (pageId === 'market') {
            UI.loadMarket();
        } else if (pageId === 'sales') {
            UI.loadSales();
        }
    }
};

// Экспорт модуля
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = NavigationService;
}