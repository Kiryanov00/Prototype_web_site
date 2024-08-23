// Массив с путями к изображениям
// console.log("1");
const images = [
    "https://sun9-47.userapi.com/impg/tno0fYj8r4YZzMNZLvhPLuSe-tkbSpxawI1P3g/3H0gg4k9lbs.jpg?size=1280x853&quality=96&sign=1b6fa6486ecfca51ce8a3fb40fb32885&type=album",
    "https://sun9-77.userapi.com/impg/VuNkDe3zsemDTRht26fqWEe7ESTgNARUAQYVnQ/BBmeRA4pnp8.jpg?size=2560x1712&quality=96&sign=429bd5ab535532f9f143330a803f9f91&type=album",
    "https://sun9-8.userapi.com/impg/POt7AfLHFNS2g2vZeXJ_WUXy9qGDq4AHKHCpjw/89GtLJSqHXU.jpg?size=2100x1400&quality=95&sign=7ccd9cff73eccefa342f258f4f83cceb&type=album",
    "https://sun9-3.userapi.com/impf/c844722/v844722510/44e/uzy5asWTYRk.jpg?size=2500x1662&quality=96&sign=0ae2c3cee0cbcb0e7a24128e5542e2ac&type=album"
];
//предварительная загрузка изображений
//создаем JQuery функцию, которая будет подгружать изображения в буфер
jQuery.preloadImages = function()
 {
  for(var i = 0; i < arguments.length; i++)
  {
   jQuery("<img>").attr("src", arguments[ i ]);
  }
 };
//указываем путь к изображению, которое нужно подгрузить
$.preloadImages(images);



  
  // Текущий индекс изображения
  let currentImageIndex = 0;
  
  // Функция для изменения фона
  function changeBackground() {
    // Изменение фона
     const img = document.getElementById('fon');
    // const fon = document.getElementsByClassName('fon');
    img.src = images[currentImageIndex];
  
    // Увеличение индекса
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // console.log(currentImageIndex);
  }
  
  
  // Установка таймера для изменения фона каждые 3 секунды
  setInterval(changeBackground, 5000); // 3000 миллисекунд = 3 секунды