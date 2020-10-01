- TECHNIKI PROGRAMOWANIA

1. Programowanie PROCEDURALNE - funkcje operują na danych i obie te kategorie są od siebie niezależne. 

2. Programowanie OBIEKTOWE - program zbudowany jest z obiektów oraz relacji i zależności między nimi. Dane i metody są połączone. 

Modelowanie w OOP:

Model - uproszczona rzeczywistość zbudowana za pomocą obiektów (określane jako abstrakcja). Dla tworzenia modelu kluczowa jest perspektywa programisty, który musi uchwycić całość rzeczywistości, którą opisuje. 

Cechy obiektu - właściwości i metody potrzebne do wykonania zadania

Relacja między obiektami - przede wszystkim kompozycja i dziedziczenie

Zadanie obiektu - obiekt tworzony jest po to aby realizował konkretne zadanie 

Obiekt posiada dane (właściwości) oraz zachowanie (metody).

Obiekt kontroluje też dostęp do składowych.

Technicznie obiekt to: nieuporządkowany zbiór (kolejność nie ma znaczenia) właściwości, które składają się z pary key-value. Wartością może być dowolny typ. !! JEŚLI WARTOŚĆ JEST FUNKCJĄ TO TAKĄ WŁAŚCIWOŚĆ NAZYWAMY METODĄ !!

const student = {
    name: "Anna",
    age: 38,
    showName: function () {
        console.log(`Cześć ${name}`);
    },
    showAge() {
        console.log(`Wiek ${this.name} to ${this.age}`);
    }
}

student.showName();

LUB

const student = new Object();

student.name = "Anna";
student.age = "38";
student.showName = function () {
    console.log(`Cześć ${this.name}`);
};

student.showAge = function () {
    console.log(`Wiek ${this.name} to ${this.age}`);
}

console.log(student.name);
console.log(student.age);
console.log(student.showName());
console.log(student.showAge());

CZYM JEST INSTANCJA I CO ROBI FUNKCJA CONSTRUCTOR

Instancja to obiekt stworzony zgodnie z wzorcem w konstruktorze. 

Powstający obiekt jest niezależnym bytem, który posiada własne właściwości i metody nadane mu przez obiekt wzorcowy (funkcja konstruktora) oraz ma dostęp do metod i właściwości będących w posiadaniu takiego obiektu wzorcowego (poprzez odwołanie się do prototypu konstruktora).

const Animal = function (name, species) {
    this.name = name;
    this.species = species;
};

Animal.prototype.showName = function (someName) {
    console.log(`Name of animal is ${this.name}`)
}

const dog = new Animal("Drop", "Wyżeł");

console.log(Animal);

console.log(dog.showName());

SŁOWO KLUCZOWE THIS 

This jest wiązaniem z obiektem, które następuje w chwili wywołania metody. 

This jest tworzone w momencie, kiedy funkcja jest wywoływana. 


1. HERMETYZACJA (enkapsulacja)

Grupowanie (zamykanie) metod i właściwości w obiekcie. 

Ukrywanie danych. 

Gettery i Settery - metody pobierające i dostępowe do danych w obiekcie. 

Implementacja sprawia, że wszystko działa mimo ukrytych danych, a jest udostępniany za pomocą interfejsu.  

2. DZIEDZICZENIE 

3. POLIMORFIZM

Ta sama metoda po dostarczeniu różnych danych może zachowywać się inaczej. 

Metoda obiektu podrzędnego przysłania metodę obiektu nadrzędnego. 

4. ABSTRACKJA