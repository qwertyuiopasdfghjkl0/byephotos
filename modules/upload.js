// Модуль для загрузки фотографий
const UploadService = {
    // Инициализация загрузки файлов
    init() {
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const selectFileBtn = document.getElementById('selectFileBtn');
        const previewContainer = document.getElementById('previewContainer');
        const imagePreview = document.getElementById('imagePreview');
        
        // Обработчики событий для загрузки файлов
        selectFileBtn.addEventListener('click', () => {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', () => this.handleFileSelect(fileInput, imagePreview, previewContainer));
        
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#4361ee';
            uploadArea.style.backgroundColor = '#f0f4ff';
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = '#adb5bd';
            uploadArea.style.backgroundColor = '#fafbff';
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#adb5bd';
            uploadArea.style.backgroundColor = '#fafbff';
            
            if (e.dataTransfer.files.length) {
                fileInput.files = e.dataTransfer.files;
                this.handleFileSelect(fileInput, imagePreview, previewContainer);
            }
        });
        
        // Обработка отправки формы
        document.getElementById('uploadForm').addEventListener('submit', (e) => this.handleFormSubmit(e));
    },
    
    // Обработка выбранного файла
    handleFileSelect(fileInput, imagePreview, previewContainer) {
        const file = fileInput.files[0];
        
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                previewContainer.style.display = 'block';
                
                // Автозаполнение названия
                const fileName = file.name.split('.')[0];
                document.getElementById('photoTitle').value = fileName;
            }
            
            reader.readAsDataURL(file);
        } else {
            UI.showNotification('Ошибка', 'Пожалуйста, выберите файл изображения (JPG, PNG)', 'error');
        }
    },
    
    // Обработка отправки формы
    handleFormSubmit(e) {
        e.preventDefault();
        
        const fileInput = document.getElementById('fileInput');
        
        if (!fileInput.files.length) {
            UI.showNotification('Ошибка', 'Пожалуйста, выберите фотографию для загрузки', 'error');
            return;
        }
        
        const submitBtn = document.getElementById('submitBtn');
        
        // Показываем загрузку
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загрузка...';
        submitBtn.disabled = true;
        
        // Имитация отправки на сервер
        setTimeout(() => {
            // Показываем уведомление
            UI.showNotification('Успех', 'Фото успешно загружено и выставлено на продажу!', 'success');
            
            // Сбрасываем форму
            document.getElementById('uploadForm').reset();
            document.getElementById('previewContainer').style.display = 'none';
            fileInput.value = '';
            
            // Восстанавливаем кнопку
            submitBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Выставить на продажу';
            submitBtn.disabled = false;
        }, 1500);
    }
};

// Экспорт модуля
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = UploadService;
}