/* // Creating Objects
    //1st Method
    const obj = {name: 'Aadil',age : 18,Gender : "Male"};
    console.log(obj);

    //2nd Method using new Keyword
    const obj2 = new Object();

    //Adding Values
    obj2.name = "Aadil";
    obj2.age = 18;
    obj2.Gender = "Male";

    console.log(obj2);

    //3rd Method using Class
    class Person {
        constructor(name,age,gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }

    //Adding Values
    const Per1 = new Person("Aadil", 18 ,"Male");
    const Per2 = new Person("Ammi",49,"Female");

    //Printing 
    console.log(Per1,Per2);

*/

/* //Accesing particular Key Value Pairs in Object
    // 1st Using (.)
    const obj = {name: 'Aadil',age : 18,Gender : "Male"};

    console.log(obj.name);

    //2nd Using square[] brakets

    const obj2 = new Object();
    obj2.name = "Aadil";
    obj2.age = 18;
    obj2.Gender = "Male";

    console.log(obj2["age"]); // or obj2[age];

    //Special Case for Number,Null and Undefined
    const obj4 = {
        0:20,
        1:50,
        2:70, 
        "account number": 231230,
        undefined: 30,
        null:"mohan",
    }


    console.log(obj4["undefined"]);
    console.log(obj4["null"]);
    console.log(obj4['0']);
    console.log(obj4[1]);
    console.log(obj4[2]);
*/

/* In JavaScript, you can **add**, **delete**, and **modify** key-value pairs in objects using simple syntax. Here's a quick guide:

---

### ✅ 1. **Adding a Key-Value Pair**

```js
let obj = { name: "Aadil" };
obj.age = 20;           // Dot notation
obj["city"] = "Nagpur"; // Bracket notation
console.log(obj);
// Output: { name: 'Aadil', age: 20, city: 'Nagpur' }
```

---

### ✅ 2. **Modifying a Value**

```js
obj.name = "Mohammad";         // Change existing value
obj["city"] = "Mumbai";
console.log(obj);
// Output: { name: 'Mohammad', age: 20, city: 'Mumbai' }
```

---

### ✅ 3. **Deleting a Key-Value Pair**

```js
delete obj.age;
console.log(obj);
// Output: { name: 'Mohammad', city: 'Mumbai' }
```

---

### Summary Table:

| Operation | Syntax               |
| --------- | -------------------- |
| Add       | `obj.key = value`    |
| Modify    | `obj.key = newValue` |
| Delete    | `delete obj.key`     |

---*/

