// Модуль для работы с пользовательским интерфейсом
const UI = {
    // Показать уведомление
    showNotification(title, message, type) {
        const notification = document.querySelector('.notification');
        const notificationIcon = notification.querySelector('.notification-icon');
        const notificationContent = notification.querySelector('.notification-content');
        
        notificationContent.innerHTML = `<h4>${title}</h4><p>${message}</p>`;
        
        // Устанавливаем стили в зависимости от типа
        notification.className = 'notification';
        if (type === 'success') {
            notification.classList.add('notification-success');
            notificationIcon.innerHTML = '<i class="fas fa-check"></i>';
            notificationIcon.style.background = '#2ecc71';
        } else if (type === 'error') {
            notification.classList.add('notification-error');
            notificationIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            notificationIcon.style.background = '#e74c3c';
        } else {
            notification.classList.add('notification-info');
            notificationIcon.innerHTML = '<i class="fas fa-info-circle"></i>';
            notificationIcon.style.background = '#4361ee';
        }
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    },
    
    // Обновить информацию пользователя
    updateUserInfo() {
        const user = StorageService.getCurrentUser();
        if (user) {
            const firstLetter = user.name.charAt(0).toUpperCase();
            document.getElementById('userAvatar').textContent = firstLetter;
            document.getElementById('userAvatarLg').textContent = firstLetter;
            document.getElementById('userName').textContent = user.name;
            document.getElementById('userEmail').textContent = user.email;
            document.getElementById('photosCount').textContent = user.photos;
            document.getElementById('salesCount').textContent = user.sales;
            document.getElementById('balanceValue').textContent = `${user.balance} ₽`;
        } else {
            document.getElementById('userAvatar').textContent = 'Г';
            document.getElementById('userAvatarLg').textContent = 'Г';
            document.getElementById('userName').textContent = 'Гость';
            document.getElementById('userEmail').textContent = 'Вы не вошли в систему';
            document.getElementById('photosCount').textContent = '0';
            document.getElementById('salesCount').textContent = '0';
            document.getElementById('balanceValue').textContent = '0 ₽';
        }
    },
    
    // Загрузить портфолио
    loadPortfolio() {
        document.getElementById('portfolioGrid').innerHTML = `
            <div class="photo-card">
                <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Морской берег" class="photo-img">
                <div class="photo-info">
                    <div class="photo-title">Скалистый берег</div>
                    <div class="photo-meta">
                        <span>22 продажи</span>
                        <span class="photo-price">1,200 ₽</span>
                    </div>
                </div>
            </div>
            <div class="photo-card">
                <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Поле цветов" class="photo-img">
                <div class="photo-info">
                    <div class="photo-title">Цветущее поле</div>
                    <div class="photo-meta">
                        <span>12 продаж</span>
                        <span class="photo-price">750 ₽</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Загрузить рынок
    loadMarket() {
        document.getElementById('marketGrid').innerHTML = `
            <div class="photo-card">
                <img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Осенний лес" class="photo-img">
                <div class="photo-info">
                    <div class="photo-title">Осенний лес</div>
                    <div class="photo-meta">
                        <span>Автор: Анна Иванова</span>
                        <span class="photo-price">600 ₽</span>
                    </div>
                    <button class="btn btn-ruble" style="width:100%; margin-top:10px;">
                        <i class="fas fa-shopping-cart"></i>
                        Купить
                    </button>
                </div>
            </div>
            <div class="photo-card">
                <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Звездное небо" class="photo-img">
                <div class="photo-info">
                    <div class="photo-title">Звездное небо</div>
                    <div class="photo-meta">
                        <span>Автор: Сергей Петров</span>
                        <span class="photo-price">1,250 ₽</span>
                    </div>
                    <button class="btn btn-ruble" style="width:100%; margin-top:10px;">
                        <i class="fas fa-shopping-cart"></i>
                        Купить
                    </button>
                </div>
            </div>
        `;
    },
    
    // Загрузить историю продаж
    loadSales() {
        document.getElementById('salesTableBody').innerHTML = `
            <tr>
                <td>Горный пейзаж</td>
                <td>ООО "Рекламное агентство"</td>
                <td>12.05.2023</td>
                <td>850 ₽</td>
                <td><span style="color: #2ecc71;">Оплачено</span></td>
            </tr>
            <tr>
                <td>Туманный лес</td>
                <td>ИП Смирнов А.В.</td>
                <td>09.05.2023</td>
                <td>650 ₽</td>
                <td><span style="color: #2ecc71;">Оплачено</span></td>
            </tr>
        `;
    }
};

window.UI = UI;
