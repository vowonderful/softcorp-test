# 👍 _Реализация тестового задания для SoftCorp_
Демонстрация: [vowonderful.github.io/softcorp-test/dist/](https://vowonderful.github.io/softcorp-test/dist/) | [softcorp.nextwell.top](https://softcorp.nextwell.top)


## Исходный макет для выполнения задания
<details>
<summary>[показать макет]</summary>
<img src="https://github.com/vowonderful/softcorp-test/raw/master/layout.png" alt="Исходный макет тестового задания" />
</details>  


## 🗒️ Требование к заданию
1. Вёрстка должна быть адаптивной с минимальным разрешением для отображения 320px. Адаптив делается на Ваше усмотрение, однако при любом разрешении страница должна корректно отображаться в браузере.
2. Вёрстка с соблюдением структуры и нейминга в соответствии с методологией БЭМ.
3. Для стилей используется препроцессор SASS в диалекте SCSS.
4. Готовая вёрстка должна корректно отображаться на последних версиях всех актуальных браузеров (Chrome, Firefox, Edge (chromium), Safari), а также их мобильных аналогах.
5. Готовая страница, а также все ресурсы должны быть оптимизированы по "весу" и размеру.
6. Текст, количество пунктов в оформлении заказа, количество полей форм могут меняться - вёрстка должна это предусматривать.
7. В футере платежные системы - не ссылки, а контакты - ссылки.
8. Форма должна быть подготовленной к работе (каждое поле должно быть input[name='....']).
9. Шапка (header) должна прилипать к верху страницы про скролле.
10. Не допускается использование html/css-фреймоворков или сеток по типу bootstrap и др.
11. Приветствуется инициативность в создании динамики на странице (анимации, hover).
12. Допускается использование сторонних плагинов для стилизации элементов, если это необходимо.
13. Выполненное тестовое задание должно быть загружено на github со страницей на github pages.


## 🚀 Результаты PageSpeed Insights
<details>
<summary>[результат для десктопов]</summary>
<img src="https://github.com/vowonderful/softcorp-test/raw/master/pagespeed-desktop.png" alt="Результат PageSpeed Insights для мобильных десктопов" />
</details>  
<details>
<summary>[результат для мобильных устройств]</summary>
<img src="https://github.com/vowonderful/softcorp-test/raw/master/pagespeed-mobile.png" alt="Результат PageSpeed Insights для мобильных устройств" />
</details>  

## 🔥 Особенности проекта
* именование классов реализовано по методологии __БЭМ__
* используется файловая __БЭМ__-структура для компонентного подхода к разработке
* используются препроцессоры __Pug__ и __SCSS__
* используется __Webpack__ для сборки JavaScript-модулей


## ⚙️ Установка
* установите __NodeJS__
* установите глобально:
    * __Yarn__: ```npm i -g yarn```
    * __Gulp__: ```npm i -g gulp```
    * __Bem Tools__: ```npm i -g bem-tools-core```
* скачайте сборку с помощью __Git__: ```git clone https://github.com/vowonderful/softcorp-test.git```
* перейдите в скачанную папку со сборкой: ```cd softcorp-test```
* введите ```yarn set version berry```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

Если Вы всё сделали правильно, должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

bgfgd
