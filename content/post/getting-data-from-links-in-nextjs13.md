---
title: How To Get Data From URL In NEXTJS 13
subtitle: Javascript,Nextjs13
description: In this we are going to learn how to get data from the url of a NEXTjs application.In this blogs we will be taking a look at the latest version of nextjs which is version 13,it would be different for version 12 and so on. I am assuming you got npm installed or something similar to that for managing your packages.
date: 2023-09-27
author: Mishal Abdullah
tags:
  - nextjs
  - javascript

---

![thumbnail](/img/nextjslink.png)
In this we are going to learn how to get data from the url of a NEXTjs application.
In this blogs we will be taking a look at the latest version of nextjs which is version 13,
it would be different for version 12 and so on. I am assuming you got npm installed or something similar to that for managing your packages.

### Creating a NEXTjs Application

In NEXTjs 13 for creating an application just run.

```shell
npx create-next-app@latest app
```

in this tutorial we will be creating an app called app. By doing this you will get some prompts as for that you can accept and decline the suggestions according to your needs, but do remember to accpet **AppRouter** and also decine the use **/src** directory, we will be using the new app dir version.

### Creating A Link

For getting the data from url, I am going to the the `Link` function from `next/navigation`
below i would be showing an emaple of how to use link you can change how ever you want that to be.

```javascript
<Link
href="/hello?color=pink"
className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
target="_blank"
rel="noopener noreferrer"
>
<h2 className={`mb-3 text-2xl font-semibold`}>
Deploy{" "}
<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
-&gt;
</span>
</h2>
<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Pink</p>
</Link>
```

I this example do focus on the href part I am giving the value inside the href after the `?` symbol followed by a keyword and the date.

Here we are giving the page address followed by a question, Now this is the  syntax for Link after the question mark you are supposed to use a keyword that you can think of, which is used for accessing the value in an another page then atlast and `=` sign followed by the data which you want to pass 


### Accessing The Link 

Now for accessing the data from another page use need to import `searchParams` from `next/navigation`.

```javascript
"use client";

import { useSearchParams } from "next/navigation";

export default function Hello() {

const searchParams = useSearchParams();

const Color = searchParams.get("color");

return (

<div>

<div>

<h1>{Color}</h1>

</div>

</div>

);

}
```

Now we get the value passed using the `Color` variable.

