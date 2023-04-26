// Zadanie nr 1. Napisz funkcję mapującą, która utworzy klucz(właściwość) nickname na każdej osobie
//      w tablicy w następujący sposób:
//     a) pobierze 3 pierwsze litery imienia, odwróci ich kolejność i zapisze do zmiennej
//     //onazoL
//     //Lozano
//     b) pobierze 3 ostatnie litery nazwiska, zamieni kolejnością pierwszą i ostatnią i dołączy powstały string do poprzedniego
//     c*) Zmieni wielkość liter w taki sposób, żeby powstały nick zaczynał się wielką literą i nie miał żadnych wielkich liter poza 1.
//     d) Jeżeli liczba znaków w imieniu bądź nazwisku jest mniejsza niż 3, nickname będzie odpowiednio krótszy
//     e) rozważcie wszystkie skrajne przypadki, ponieważ Waszą funkcję mapującą wrzucimy do testów na platformie
//     e) Have fun :)
// 2.
// a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli
//  tekst powitalny. Oczywiście tekst powinien wyświetlić się dopiero po wywołaniu funkcji.
// Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
// "Cześć jestem Bartolomeo Lozano, ale w szkole mówią na mnie [Rabona]"
// Natomiast wywołanie funkcji: people[0].introduceYourself()
// b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien pojawić się tekst powitalny dla każdej osoby w tablicy
// 3.a) Dodaj do każdego obiektu funkcję getFavouriteColor
// b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
// c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//     - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//     - podałeś za dużą liczbę, liczba nie może być większa niż 30
// d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
// e) funkcja powinna zsumować wszystkie litery imienia, nazwiska i przezwiska,
// odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
// wyznaczyć index
// f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
/*
    4. Napisz funkcję analogiczną do funkcji z zadania 3, ale nie dodawaj jej w obiekcie.
    a) funkcja powinna przyjąć 2 parametry (obiekt osoby i liczbę z zakresu 1 - 30)
    b) funkcja powinna wykonać dokładnie takie samo działanie jak poprzednia
    c) Za pomocą pętli for of przeiteruj po wszystkich osobach z tablicy i wyświetl ich ulubione kolory
*/
//   5. Zadanie polega na użyciu .filter() .map() .reduce w wersji łańcuchowej,
//  czyli nie twórz nowych tablic w momencie wykonanie jednej z powyższych metod, połącz wykonanie ze sobą w jeden  "łańcuch" tzn. const wynik = arr.filter().map().reduce()
//   a) Przefiltruj tablicę w taki sposób, aby zostały w niej osoby,
//   których imię kończy się na literę 'a' lub 'k'
//   i nazwisko ma więcej znaków niż 6
//   i nick zawiera w sobie przynajmniej jedną literę a
//   b) do powyższego warunku dodaj "furtkę" w postaci parametru isElite. Zmienna isElite powinna być obliczona
//   za pomocą generatora liczb pseudolosowych Math.random(). Za pomocą tego generatora wylosujcie liczbę z zakresu 0 - 100.
//   Jeżeli wartość losowej liczby będzie liczbą pierwszą lub będzie podzielna przez 3 i 5, ustawcie isElite na true, w pozostałych przypadkach
//   isElite powinno być ustawione na false
//   c) jeżeli zmienna isElite ma wartość true, nie bierzcie pod uwagę warunku z punktu a przy filtracji

console.log(
  "Musiałem dodać swoje dane do tablicy 'people' aby moc wykonac szukania wskazanych liter"
);
const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
  {
    firstName: "Bartek",
    lastName: "Krysztofik",
  },
];
nameBase = people;
function lettering(firstName, lastName) {
  for (i = 0; i < nameBase.length; i++) {
    nameBase[i].nickname;
    technicalPerson1 = nameBase[i].firstName
      .split("")
      .splice(0, 3)
      .reverse()
      .join("")
      .toLowerCase()
      .split("");
    technicalPerson1A = technicalPerson1.shift(0).toUpperCase();
    technicalPerson1.unshift(technicalPerson1A);
    technicalPerson1a = technicalPerson1.join("");
    technicalPerson2 = nameBase[i].lastName
      .split("")
      .reverse()
      .splice(0, 3)
      .join("")
      .toLowerCase();
    technicalNick = technicalPerson1a + technicalPerson2;
    nameBase[i].nickname = technicalNick;
  }
  return;
}
lettering();

function introduceYourself(nameBase) {
  for (i = 0; i < nameBase.length; i++) {
    const result = `Cześć, jestem ${nameBase[i].firstName} ${nameBase[i].lastName}, ale w szkole mówią na mnie ${nameBase[i].nickname}`;
    nameBase[i].introduceYourself = result;
  }
  return;
}
introduceYourself(nameBase);

nameBase.forEach((element) => console.log(`Siema ${element.firstName}`));
let wskazanaLiczba = -1;
wskazanaLiczbaPoZmianie = Math.abs(wskazanaLiczba);

function getFavouriteColor(nameBase) {
  if (wskazanaLiczbaPoZmianie < 1) {
    wskazanaLiczbaPoZmianie = 5;
    console.log("Podana liczba jest za mała");
  } else if (wskazanaLiczbaPoZmianie > 30) {
    wskazanaLiczbaPoZmianie = 5;
    console.log("Podana liczba jest za duza");
  } else if (wskazanaLiczbaPoZmianie == undefined) {
    wskazanaLiczbaPoZmianie = 5;
    console.log("Nie podales liczby, przypisalismy Ci liczbę 5");
  }
  return nameBase;
}
getFavouriteColor(nameBase);
const colors = ["red", "green", "yellow", "blue", "pink", "orange"];
function sum(a, b, c) {
  for (i = 0; i < nameBase.length; i++) {
    const a = nameBase[i].firstName.length;
    const b = nameBase[i].lastName.length;
    const c = nameBase[i].nickname.length;
    suma = (a + b + c - wskazanaLiczba) % colors.length;
    nameBase[i].sumaLiczb = colors[suma];
  }
  return suma;
}
sum();
console.log(nameBase);

function wyszukiwanieOsob(nameBase) {
  let wynik;
  let losowaLiczba;
  let tabPierwszych;
  const min = 0;
  const max = 100;
  let result;
  if (
    (wynik = people.filter(
      (el) =>
        (el.firstName.charAt(el.firstName.length - 1) == "a" ||
          el.firstName.charAt(el.firstName.length - 1) == "k") &&
        el.lastName.length > 6 &&
        el.nickname.search("a") != -1
    ))
  );
  {
    console.log("Wynik przeszukania tabeli po wskazanych parametrach:", wynik);
  }

  result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("Losowa liczba to: ", result);

  if (testerPierszejLiczby(result) == undefined) {
    console.log("liczba pierwsza", true);
  } else if (
    (result % 3 == 0 && result != 0) ||
    (result % 5 == 0 && result != 0)
  ) {
    console.log("podzielna", true);
  } else {
    console.log("false", false);
  }

  return;
}
wyszukiwanieOsob();

function testerPierszejLiczby(losowaLiczba) {
  if (losowaLiczba < 2) {
    return false;
  } else {
    for (i = 2; i < losowaLiczba; i++) {
      if (losowaLiczba % i == 0) {
        return false;
      } else {
        tabPierwszych = losowaLiczba;
      }
    }
  }
  console.log("tabPierwszych", tabPierwszych);
  return;
}
//   d) za pomocą funkcji map i for in odwróccie wartości i klucze w obiekcie, usuwając przy tym funkcje
// e) zredukuj tablicę obiektów do pojedynczego obiektu, który będzie zawierał wszystkie klucze i wartości wszystkich obiektów z tablicy, dzięki temu, że w punkcie d) odwrócilismy klucze z wartościami, nie będzie z tym problemu :)
let outputNameBAse = [];
for (i = 0; i < nameBase.length; i++) {
  console.log("nameBase", i, nameBase[i]);
  outputNameBAse[nameBase[i].firstName] = "firstName";
  outputNameBAse[nameBase[i].lastName] = "lastName";
  outputNameBAse[nameBase[i].nickname] = "nickName";
}
console.log("outputNameBase", outputNameBAse);

/*
    *6. Currying function
    a) Napisz taką funkcję mnożącą 2 liczby, aby możliwe były następujące wywołania:
    - multi(5)(6)
    - const multiplyBySix = sum(6)
      multiplyBySix(10)
    b) Analogicznie napisz funkcję, która mnoży 4 liczby i możliwe jest wywołanie
    - multi(4)(5)(6)(10)
*/
function multi(a) {
  let startowaLiczba = a;
  const kolejnaLiczba = (b) => {
    startowaLiczba = startowaLiczba * b;
    console.log("Wynik funkcji multi", startowaLiczba);
    return kolejnaLiczba;
  };
  kolejnaLiczba.result = () => startowaLiczba;
  return kolejnaLiczba;
}
multi(2)(2)(2)(2);

function multi1(a) {
  return function (b) {
    return a * b;
  };
}
console.log("5x5", multi1(5)(5));

const multiplyBySix = multi1(6);
console.log("multiplyBySix", multiplyBySix(6));

const multiplyByTen = multi1(10);
console.log("multiplyByTen", multiplyByTen(10));

//
/*
    **7. Rekurencja
     a) Mając zagnieżdżony obiekt, wyciągnij z niego wszystkie imiona i dodaj do tablicy
     ***b) Jeżeli osoba ma więcej niż jedno imię, te imiona powinny znajdować się w jednym stringu w tablicy
     Na przykład 'Kamil Bartek'
    INPUT:
*/
const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let myTree = [];
let moje = [];
let poligonJs = [];
const isObject = function (val) {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};

const searchInTree = function (obj) {
  for (let val in obj) {
    if (isObject(obj[val])) {
      searchInTree(obj[val], val);
    } else {
      if (Array.isArray(obj)) {
        poligonJs.push(val + " " + obj[val]);
      } else {
        poligonJs.push(val + " " + obj[val]);
      }
    }
  }
  return poligonJs;
};
searchInTree(nestedObject);
const dataProcessing = function (obj) {
  for (i = 0; i < poligonJs.length; i++) {
    if (poligonJs[i].charAt(4) == " ") {
      myTree.push(poligonJs[i].substr(5));
    }
    if (poligonJs[i].charAt(4) == "2") {
      myTree.push(poligonJs[i].substr(5));
      myTree[i - 1] = myTree[i - 1] + myTree[i];
    }
    if (poligonJs[i].charAt(4) == "3") {
      myTree.push(poligonJs[i].substr(5));
      myTree[i - 2] = myTree[i - 2] + myTree[i];
    }
  }
  myTreeLength = myTree.length;
  for (i = 0; i < myTreeLength; i++) {
    if (!myTree[i].startsWith(" ")) {
      moje.push(myTree[i]);
    }
  }
  return moje;
};
console.log("dataProcessing", dataProcessing(nestedObject));
