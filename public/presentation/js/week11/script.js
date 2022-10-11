function createCartItem(price, type, name, count) {
  const cartItem = { price: price, type: type, name: name, count: count };
  return cartItem;
}

function createCartItem(price, type, name, count) {
  const cartItem = { price, type, name, count };
  return cartItem;
}

function createCartItem(price, type, name, count) {
  const cartItem = {};
  cartItem["price"] = price;
  cartItem["type"] = type;
  cartItem["name"] = name;
  cartItem["count"] = count;
  return cartItem;
}

function getCountry(place) {
  return place.country;
}

function getCountry(place) {
  return place["country"];
}

function getFoodCount(myCart) {
  const foodItems = [];
  for (let i = 0, len = myCart.length; i < len; i++) {
    const cartItem = myCart[i];
    if (cartItem.type === "food") {
      foodItems.push(cartItem);
    }
  }
  return foodItems.length;
}

function getFoodCount2(myCart) {
  let count = 0;
  for (let i = 0, len = myCart.length; i < len; i++) {
    const cartItem = myCart[i];
    if (cartItem.type === "food") {
      count = count + cartItem.count;
    }
  }
  return count;
}

let cart = [
  { id: 1, price: 3000, type: "food", name: "Milk", count: 2 },
  { id: 4, price: 2000, type: "food", name: "Butter", count: 1 },
  { id: 8, price: 1000, type: "cloth", name: "Shoes", count: 1 },
];

const foodCount = getFoodCount2(cart);
// console.log(foodCount);

function getTemperatureAverage(weather) {
  let sum = 0;
  for (let i = 0; i < weather.length; i++) {
    const city = weather[i];
    sum = sum + parseInt(city.temp);
  }

  let average = sum / weather.length;
  let cityTemperatureItem = weather[0];
  let cityName = cityTemperatureItem.city;
  let numberOfDays = weather.length;

  let result =
    "Temperature Average of " +
    cityName +
    " is " +
    average +
    "C in past " +
    numberOfDays +
    " days.";
  return result;
}

const weatherCities = [
  { city: "Tehran", month: "Aban", day: "23", temp: "4" },
  { city: "Tehran", month: "Aban", day: "24", temp: "12" },
  { city: "Tehran", month: "Aban", day: "25", temp: "8" },
  { city: "Tehran", month: "Aban", day: "26", temp: "-3" },
];

const myAverage = getTemperatureAverage(weatherCities);
console.log(myAverage);



