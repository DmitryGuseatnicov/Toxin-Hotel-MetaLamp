# Toxin-Hotel-MetaLamp step 2
#### Задание номер 2 на верстку ui-kit и страниц сайта по поиску номеров отеля 

----------
1. [Макет](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/MetaLamp-(former-FSD)-frontend-education-program.-The-2nd-task?node-id=0%3A1)

2. [Стратовая страница проекта](https://dmitryguseatnicov.github.io/Toxin-Hotel-MetaLamp/)

----------

### Описание 
+ Задача была сверстать и написать логику для независимых компонентов UI-KIT и использовать их на станицах сайта по поиску номеров. Верстка должна была быть максимально отзывчивой, a также PixelPerfect

+ На стартовой странице распложены ссылки на результат верстки, навигация для просмотра страниц реализована через нее. 

+ Разработка велась под последние версии Chrome и Firefox

+ В верстке применялась методология (БЭМ), но без использования БЭМ миксинов 

+ Верста велась под размены экранов от 320px и выше

+ Для соблюдения единого стайлинга кода использовался стаилгайд от AirBnB

+ Все библиотеки и шрифты подключены локально 

----------


### Развертывание 
  * ##### Клонирование репозитория
```
  git clone https://github.com/DmitryGuseatnicov/Toxin-Hotel-MetaLamp.git
```
 * ##### Development c Dev-server
```
  npm start
```
 * ##### Development сборка 
```
  npm run dev
```
 * ##### Production сборка
```
  npm run build
```
 * ##### Deploy gh-pages
```
  npm run deploy
```
 
### Структура файлов
```
  src / -- корневая папка 
    pages/ 
      page-name/ -- папки с файлами для каждой отдельной страницы
        page-name.pug
        page-name.scss
        page-name.js
    styles/
      -- файлы со шрифтами, переменными и минимальными  глобальными стилями
  components/
    component-name/ -- папки компонентов
        component-name.pug
        component-name.scss
        index.js
        Classes/
          ClassName-- Классы с логикой относящиеся к данному компоненту
```          
### Инструменты используемые для разработки 
  1. WEBPACK - для сборки и минификации файлов
  2. PUG - для создания шаблонов и переиспользования их на страницах сайта
  3. SCSS - Для более удобного и читаемого css
  4. Babal - Для использования последних стандартов JS и совместимости в браузерах

### Стороние библиотеки 
  + [jquery](https://github.com/jquery/jquery)  version( 3.6.0 )
  + [air-datepicker](https://github.com/t1m0n/air-datepicker) version( 3.1.0 )
  + [chart.js](https://www.chartjs.org/) version( 3.7.0 )
  + [inputmask](https://github.com/RobinHerbots/Inputmask) version( 5.0.7 )
  + [nouislider](https://github.com/leongersen/noUiSlider) version(  15.5.0 )
  + [slick-carousel](https://github.com/kenwheeler/slick) version( 1.8.1 )
  + [wNumb](https://github.com/leongersen/wnumb) version( 1.2.0 )