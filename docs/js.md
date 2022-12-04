# JS Notes

## set

- it is itrable
- sets also have its owen methods
- No index-bsed access
- Order is not guaranteed
- Uniqe items only ( No duplicates allowed )

```javascript
const array1 = ["item1", "item2", "item3"];
const array2 = ["item1", "item2", "item3"];

const numbers = new Set([1, 2, 3]);
numbers.add(4);
numbers.add(5);
numbers.add(array1);
numbers.add(array2);

// works because the memory location of both arrays is different.

for (let num of numbers) {
  console.log(num);
}

numbers.has(1); // return True or False
```

## MAP

- map is different than array.map() function
