// Object property shorthand
const name = "Name";
const actualAge = 30;
const user = {
  // Here, instead, we can simply use name once. It'll assign the value of name field already defined above
  // name: name,
  name,
  age: actualAge,
};

console.log(user);

// Object destructuring

const someObject = {
  name: "Hi",
  surname: "Hello",
  height: 5,
  weight: 10,
};

// Instead of fetching each and every field individually and writing kind of redundant code, we will use object destructuring
// const height = someObject.height;
// const weight = someObject.weight;

// When any unknown field is fetched, it simply sets its value to undefined
// However, if its actually there and we provide its value here (below) as well, it will always return the actual value and not the overridden one
const { height, weight, size, surname = "Hey" } = someObject;
console.log(height);
console.log(weight);
console.log(size);
console.log(surname);

const destructuringInMethodParams = (memberType, { height, weight }) => {
    console.log(memberType, height, weight)
}

destructuringInMethodParams('Student', someObject)
