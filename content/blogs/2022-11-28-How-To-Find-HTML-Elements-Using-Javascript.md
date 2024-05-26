---
layout:     post 
title:      "How To Find HTML Elements Using JavaScript"
subtitle:   "JavaScript Tutorial"
date:       2022-11-04
author:     "Mishal Abdullah"
image : "img/black.png"
URL: "jspart3"
tags:
  - JavaScript
---
![thumbnail](/img/jsimage.png)
There are three ways of finding HTML elements

- document.getElementById()
- document.getElementsByTagName()
- document.getElementsByClassName()

## Element By ID:-

The document.getElementById() method is the most common way to find HTML elements. You can assign a Tag any id you want and pass the the id as a parameter to the document.getElementByid()
**example**
```html
<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
    <h1 id="intro"> Hello World</h1>
  </body>
  <script>
    var value = document.getElementById("intro");
    value.style.color = "red";
  </script>
</html>
```

**Output**
![[Pasted image 20221229153711.png]]

## Element By Tag Name

The second way is to find elements by the tag name.
```html
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<h1 id="intro"> Hello World</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas at neque aliquid earum repudiandae, repellendus, consequatur atque itaque repellat veniam perferendis veritatis exercitationem
nam tempora ab vitae maxime facilis. Nobis.</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis unde possimus libero velit quas dolorum modi, impedit non atque debitis aut maxime doloribus laborum
reiciendis alias quis sunt numquam commodi.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque harum incidunt quibusdam aliquid, consectetur doloribus. Libero necessitatibus ratione nemo repudiandae 
aliquam dolore ipsam fuga reprehenderit magnam! Repellendus, accusamus minima.</p>
</body>
<script>

var value = document.getElementById("intro");

value.style.color = "red";

var para = document.getElementsByTagName("p");

console.log(para)

</script>
</html>
```

Here the function gets elements by their tag, 

**Output**

## Element By Class 

Similar to the document.getElementsByTagName() method, the document.getElementsByClassName() method is also used to find
multiple elements. It uses class name to find elements. The return type is an array.





