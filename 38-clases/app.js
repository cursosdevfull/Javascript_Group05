const person = {
  firstname: "Gustavo",
  lastname: "Jimenez",
  age: 40,
  gender: "masculino",
  setData(p_name, p_age, p_gender) {
    this.firstname = p_name;
    this.age = p_age;
    this.gender = p_gender;
    //console.log(firstname);
  },
};

person.setData("Alfredo", 44, "masculino");
console.log(person);

class Person {
  firstname;
  lastname;
  age;
  gender;

  setData(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
  }
}

console.log(Person);

const objPerson = new Person();
objPerson.setData("Carlos", "Amoros", 34, "masculino");
console.log(objPerson);
console.log(objPerson.firstname);

class Student {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    //console.log("Constructor executed");
  }
}

const estudiante = new Student("Carmen", "Lozada", "famenino");
//console.log("student", estudiante);

class Animal {
  feed;
  kindOfAnimal = "Animal";

  constructor(feed) {
    this.feed = feed;
  }

  setFeed(feed) {
    this.feed = feed;
  }
}

class Elephant extends Animal {
  /*   feed;
  kindOfAnimal;

  setFeed(feed) {
    this.feed = feed;
  } */
}

const elephan = new Elephant();
elephan.setFeed("carrots");
console.log(elephan);

/*const animal = new Animal("rice");
console.log(animal);
animal.setFeed("fish");
console.log(animal);
animal.feed = "orange";

console.log(animal);*/

class Insect {
  kindOfInsect;

  constructor() {}

  assignKind(insect) {
    this.kindOfInsect = insect;
  }
}
/*const insect = new Insect();
insect.assignKind("butterfly");*/
//console.log(insect);
