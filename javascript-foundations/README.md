# JAVASCRIPT FOUNDATIONS

# TYPES

> A type is an intrinsic, built-in set of characteristics that uniquely identifies the behavior of a particular value and distinguishes it from other values, both to the engine and to the developer.
  -Kyle Simpson

- null
- undefined
- number
- string
- boolean
- object
- symbol


The `typeof` operator shows the type of a value


```js
typeof 14 // number
typeof "14" // string
typeof true // boolean
typeof { number: 12 } // object
typeof undefined // undefined
typeof null // object ???? HOW

// IN ES6
typeof Symbol() // symbol
```

**Testing for `null`**

```js
a = null
if (!a && typeof a === 'object')
```

## Values as types

In JavaScript, variables do not have types, but values have types. For example

```js
var age = 21 
``` 
here `typeof age` return 'number'. If you do this 
```js
var age = 'I am 30 years'
```
then `typeof age`would be a string, meaning variables are not enforced with types. Instead values always have types. `typeof 21` would always be a number

### Undefined vs undeclared

```js
var a
typeof a // undefined
typeof c //undefined
```

You may think `a` and `c` are the same but nahh. they ain't. `a` is `undefined` while `c` is `undeclared`
logging out. 
```js
a // undefined
c // ReferenceError: c is not defined
```
How do we then safely check for an undeclared variable. we might use do something like this

```js
if (window.c) {
  // Do what we want
}
```

But if we want our code to be environment agnostic, 
```js
if (typeof c === 'undefined') {
  // Do what we want
}
```
Polyfills use this before injecting their code.

## Values

### Arrays and Strings

#### Arrays
They are sub-types of objects that are numerically indexed.

1.
```js
var a = []
a[13] = 32
a.length // ?
```
2.
```js
var a = []
a[0] = 'hi'
a['hi'] = 'hihi'
a['2'] = 'number 2'

a['hi'] // ?
a[2] // ?
a['2'] //?
a.length
```

**Array-Like**
There are times you might want to convert array-like objects to object. eg, DOMNodeList, arguments, HTMLCollection, string, to use arrays awesome methods.

```js
var array = Array.prototype.splice.call(arraylike)
```
But with ES6

```js
Array.from(arraylike) // OR
[...arraylike]
```

### Numbers

JavaScript has only one number type unlike other languages. Its number system is based on the 'IEE 754' standard

Due to boxing of the Number objec, we can access methods like

```js
var a = 12
a.toPrecision(3)
a.toFixed(3)
``` 
Also, we can define numbers in exponential form and in different bases

```js
var a = 1E4 // Exponential 1 X 10 ^ 4
var a = 0x54 // Base 16 
var a = 0O54 // Base 8 || Please don't do this
var a = 0b10000101010111 // base 2 
```
large numbers would be outputed in exp form automatically

**Small Decimal Values**

```js
0.1 + 0.2 === 0.3 // false huhnn??
```
Due to the number system used by JS. You can safe check with this

```js
function isKindaEqual(x, y) {
  return Math.abs(x - y) < Number.EPSILON // 2 ^ -52 (tolerance)
}
```
Other stuff
```js
Number.isInteger(int)
Number.MAX_SAFE_INTEGER
Number.MAX_VALUE
```

**Special values**

NUll, Undefined and NaN
