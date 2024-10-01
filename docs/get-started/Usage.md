---
sidebar_position: 2
---
import { Button, Input } from 'adroit-ui';

# Usage

Use powers of AdroitUI - Usage and Examples

For showcasing how Adroit UI is used, let's go through **how imports work** and here is a **example repository** of how you can setup your project for the optimal usage of the library.

## Usage

1. Button Example
 ```jsx 
 import React from 'react';
import { Button } from 'adroit-ui';

export default function Button() {
  return (
    <>
      <Button size="lg" label="hello world" radius="sm"/>
    </>
  );
}
 ```
 <Button size="lg" label="hello world" radius="sm" className="mb-4"></Button>

2. Input Example

```jsx 
import React from 'react';
import { Input } from 'adroit-ui';

export default function Input() {
  return (
    <>
      <Input placeholder="name" label="Enter your name" helpText="" required='true' id='1'/>
    </>
  );
}
 ```

<div className="w-[40%]">
<Input placeholder="name" label="Enter your name" helpText="" required='true' id='1' />
</div>

## AdroitUI Example Repository

This is a **Github Repository** of a React project initialized using <span className='text-primary-9'>[Vite](https://vitepress.dev/)</span>.
This repository uses **React**, **TailwindCSS** and **AdroitUI** library.
<div>
<div className="p-4 flex flex-row justify-center items-center border border-1 rounded-md w-[50%] gap-4">
<img src="/img/adroitUI-whitebg.png" alt="Adroit UI logo" width="60px"/>
<div>
Get the project Here!

Click Here : <span className='text-primary-9'>[AdroitUI Repo Example](https://www.github.com/kartikbindra/adroit-ui)</span>
</div>
</div>
</div>
