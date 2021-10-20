# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm i`

Прежде чем запустить приложение установите зависимости, прописав в терминале npm i


## `Что необходимо знать о приложении`

Приложение "депозитный калькулятор" предназначено для рассчета дохода, полученного от вклада под % на определенный 
срок в банк. Со всеми доступными сроками вклада / процентными ставкакми / типами вклада можно ознакомиться в JSON файле 
в 'src/response/depcalc'
Согласно ТЗ есть возможность распечатки в формате PDF информации по вкладку, но т.к в макете figma отсутствует кнопка печати, 
окно предварителнього просмотра запускается по нажатию на кнопку "Продолжить"
Для рассчета процента учтена продолжительность текущего года и учтены високосные года.
В качестве стейтменеджера использовался Redux , (использовал из-за требования к работе с MobX/Redux) , так же тут было бы достаточно хука контекста
Для компонентов использовался material-Ui, для работы со временем использовалась библиотека moment

