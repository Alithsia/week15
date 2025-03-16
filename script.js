const listOfCities = document.querySelector(".block-cities");
const cities = ["Москва", "Санкт-Петербург", "Сочи", "Самара"];
const temperatureInCities = [];
const citiesAndTemperature = [];
let maxTemperature;
let minTemperature;

//получить температуру
for (let item of cities) {
  let temperature = Number(prompt(`Введите температуру для города ${item}`));
  if (Number.isNaN(temperature)) {
    temperature = Number(
      prompt(`Введите корректную температуру для города ${item}`)
    );
    temperatureInCities.push(temperature);
  } else {
    temperatureInCities.push(temperature);
  }
}

//заполнить массив объектами
for (let i = 0; i < cities.length; i++) {
  citiesAndTemperature[i] = {
    city: cities[i],
    temperature: temperatureInCities[i],
  };
}

//добавить элементы списка: город - температура
for (let item of citiesAndTemperature) {
  let city = document.createElement("p");
  city.classList.add("city");

  city.innerText = `${item.city} - ${item.temperature}\u00B0C`;
  listOfCities.append(city);
}

//нахождение max и min значений

maxTemperature = document.createElement("p");
maxTemperature.classList.add("temperature");

minTemperature = document.createElement("p");
minTemperature.classList.add("temperature");

maxTemperature.innerText =
  "Максимальная температура: " + Math.max(...temperatureInCities);
minTemperature.innerText =
  "Минимальная температура: " + Math.min(...temperatureInCities);

listOfCities.append(maxTemperature);
listOfCities.append(minTemperature);

// console.log(citiesAndTemperature);
// console.log(temperatureInCities);
