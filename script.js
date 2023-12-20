document.addEventListener('DOMContentLoaded', function() {
    // Путь к вашему XML файлу
    var xmlFilePath = 'file.xml';

    // Создание объекта XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Открытие запроса на получение данных из XML файла
    xhr.open('GET', xmlFilePath, true);

    // Установка обработчика события загрузки
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Обработка данных после успешной загрузки
            var xmlData = xhr.responseXML;
            displayProducts(xmlData);
            displayProducts1(xmlData);
        } else {
            console.error('Ошибка при загрузке XML файла:', xhr.statusText);
        }
    };

    // Отправка запроса
    xhr.send();

    // Функция для отображения данных из XML
    function displayProducts(xml) {
        var products = xml.getElementsByTagName('product');
        var output = '';

        for (var i = 0; i < products.length; i++) {
            var id = products[i].getElementsByTagName('id')[0].textContent;
            var name = products[i].getElementsByTagName('name')[0].textContent;
            var price = products[i].getElementsByTagName('price')[0].textContent;
            var category = products[i].getElementsByTagName('category')[0].textContent;

            output += '<div class="container">';
            output += '<section  id="catalog2" class="catalog">'
            output += '<article  id ="article2" class="product">';
            output += '<img src="images/product.png" alt="Product 1">';
            output += '<h2>' + name + '</h2>';
            output += '<p class="productkategory">' + category + '</p>';
            output += '<p class="price">Цена: '+ price +'</p>';
            output += '<button class="korzina">Добавить в корзину</button>'
            output += '<button class="korzina">Подробнее</button>'
            output += '</article>';
            output += '</section>';
            output += '</div>';
        }

        // Вывод данных на странице
        var xmlDataContainer = document.getElementById('container1');
        if (xmlDataContainer) {
            xmlDataContainer.innerHTML = output;
        } else {
            console.error('Элемент с id "xmlData" не найден на странице.');
        }

    }

    function displayProducts1(xml) {
        var products = xml.getElementsByTagName('product');
        var output = '';

        for (var i = 0; i < products.length; i++) {
            var id = products[i].getElementsByTagName('id')[0].textContent;
            var name = products[i].getElementsByTagName('name')[0].textContent;
            var price = products[i].getElementsByTagName('price')[0].textContent;
            var category = products[i].getElementsByTagName('category')[0].textContent;
            if (id ==='1' || id === '2') {
                output += '<div class="container">';
                output += '<section  id="catalog2" class="catalog">'
                output += '<article  id ="article2" class="product">';
                output += '<img src="images/product.png" alt="Product 1">';
                output += '<h2>' + name + '</h2>';
                output += '<p class="productkategory">' + category + '</p>';
                output += '<p class="price">Цена: ' + price + '</p>';
                output += '<button class="korzina">Добавить в корзину</button>'
                output += '<button class="korzina">Подробнее</button>'
                output += '</article>';
                output += '</section>';
                output += '</div>';
            }
        }

        // Вывод данных на странице
        var xmlDataContainer = document.getElementById('container2');
        if (xmlDataContainer) {
            xmlDataContainer.innerHTML = output;
        } else {
            console.error('Элемент с id "xmlData" не найден на странице.');
        }

    }
});





document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.toggle-button');
    var menu = document.querySelector('.menu');

    menuButton.addEventListener('mouseenter', function () {
        menu.classList.add('active');
    });

    menuButton.addEventListener('mouseleave', function () {
        menu.classList.remove('active');
    });
});
function ClickG() {
    document.querySelectorAll('.container, .gkategory1, .line').forEach(function (container) {
        container.style.display = 'flex';
    });
    document.querySelectorAll('.product').forEach(function (product) {
        product.style.display = 'block';
    });
}

function toggleCategoryList() {
    var categoryList = document.getElementById('categoryList');
    categoryList.style.display = (categoryList.style.display === 'block') ? 'none' : 'block';
}



// JavaScript для выбора категории
//function selectCategory(category) {
    //alert('Выбрана категория: ' + category);
    // Дополнительные действия при выборе категории
    // Например, можно добавить код для изменения содержимого страницы на основе выбранной категории
//}



// Закрытие всплывающего списка при клике вне списка
document.addEventListener('click', function(event) {
    var categoryList = document.getElementById('categoryList');
    var categoryButton = document.querySelector('.category-button');

    if (event.target !== categoryButton && event.target.closest('#categoryList') !== categoryList) {
        categoryList.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Получаем список продуктов и список категорий
    var products = document.querySelectorAll('.product');
    var categoryList = document.getElementById('categoryList');

    // Обработчик события выбора категории
    categoryList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            var selectedCategory = event.target.textContent;
            filterProductsByCategory(selectedCategory);
        }
    });

    // Функция фильтрации продуктов по категории
    function filterProductsByCategory(category) {
        products.forEach(function (product) {
            var productCategory = product.querySelector('.productkategory').textContent;

            // Сравниваем категорию продукта с выбранной
            if (productCategory === category) {
                product.style.display = 'block'; // Отображаем продукт
            } else {
                product.style.display = 'none'; // Скрываем продукт
            }
            document.querySelectorAll('.line').forEach(function (product) {
                product.style.display = 'none';
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Используем AJAX для загрузки данных
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);

            // Теперь переменная 'data' содержит данные из базы данных
            console.log(data);

            // Далее вы можете использовать 'data' по своему усмотрению
        }
    };
    xhr.open("GET", "get_data.php", true);
    xhr.send();
});
