// Explicit binding
// call with out any argument (only default argument = object was passed)

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  },
};
const person2 = {
  firstName: "DR",
  lastName: "Jhatka",
};
person.fullName.call(person2);

// call with  argument
const human = {
  firstName: "dorae",
  lastName: "mon",
  fullName: function (margieStatus) {
    console.log(
      `my name is ${this.firstName} ${this.lastName} margie status ${margieStatus}`
    );
  },
};
const human2 = {
  firstName: "sizuka",
  lastName: "gota",
  margieStatus: true,
};
human.fullName.call(human2, human2.margieStatus);
