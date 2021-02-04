# JavaScript Notes on RED

---

## Chap.1 Introduction

### JavaScript includes

- ECMAScript (defined and supported by ECMA-262)

  - host environment - Web browser / Server Node / Adobe Flash

- DOM / document object model

  Modify the leaves of the document by using DOM API

  - DOM Level 1 - aims to reflect the document structure
  - DOM Level 2 - add `DOM view` / `DOM event`/  `DOM style`/  `DOM traversal` 
  - DOM Level 3 - add `DOM Load and Save` / `DOM Validation`
  - DOM 4 - add `Mutation Observers`

- BOM / browser object model

  Some functions as:

  - add a new browser window
  - move / scale / close the window
  - object api
    - navigator - details on browser
    - location - details on loading pages
    - screen - details on screen resolution
    - performance - details on memory / navigator behaviors / time statics
  - support to cookie
  - XMLHttpRequest / ActiveXObject(IE)

## Chap.2 HTML

### \<script>

#### Attributes

- async

  upload the script right now

- charset (useless)

- crossorigin

  - crossorigin="anonymous" - requests have not to set the credentials
  - crossorigin="use-credentials" - means there will be credentials with requests outsides

- defer

  - means the script could be carry out after the window load
  - only function on extenal script

- integrity

  - means compare the source received with specified encrypted signature 

- language (abandaned already)

- src

- type

  replace `language` ; the value is always "text/javascript"; the script will be parsed as ES6 module when the value is `module`

  >  It will send a GET request when browser parses this resource

#### Position

before `</body>` or set `defer` 

#### Timing of Execution

- postpone execution

  defer

- Asynchronous execution

  async

- Dynamic loading

  based on DOM API like

  ```js
  let script = document.createElement('script')
  script.src = 'test.js'
  document.head.appendChild(script)
  // It's asynchronous loading 
  
  // But we can load this Synchronously like this
  script .async = false
  // However, the priority of the loading this script will be lower
  
  // So we can state it in the head explicitly
  <link rel="preload" href="test.js">
  ```

#### XHTML / Extensible HyperText Markup Language

repackage the HTML as XML

### Doctype

#### Standards mode

#### Quirks mode

### \<noscript>

A way for page downgrade elegantly while the javascript is not supported by browser

## Chap.3 Language

### Grammar

#### Strict mode

the script begins with `"use strict";`

#### Variable

##### var

- Scope - in the **function** 
- **Hoist** - the variable will be declared in the front of the function
- the variable will be add to the attribute of `window` if the declaration is in the global scope

##### let

- Scope - in the **block**

- Condition Statement

  We can use condition statement as follows to avoid the duplicate declaration

  ```js
  if ( typeof name === 'undefined') {
  	let name;
  }
  ```

##### const

- We must declare the value of variable when initialing

### Data Type

#### Operator

- typeof

#### Type

- undefined
- null
  - null == undefined  //true
- boolean
  - case sensitive
  - equal to false : "" / 0 / NaN / null / undefined
- number
  - able to identify other base like Binary or Octal or Hexademical
- string