---
id: 'button'
---
import { Button } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Button
Buttons allows the user to take actions in the interface.

## Default
Default Button component example
<Playground><Button/></Playground>
<Tabs>
<!-- <TabItem value='button example' label='Preview' default>
<Playground><Button/></Playground>
</TabItem> -->
<TabItem value='button.jsx' label='Code' >
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    // default props: 
    // variant-"solid-primary" size-"sm" radius-"sm" label-"button" state-"default"
    return <Button/>;
};
```
</TabItem>
</Tabs>

## Solid Primary
<Playground><Button variant="solid-primary" label="Solid Button"/></Playground>
<Tabs>
<TabItem value='solid-primary.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant="solid-primary" label="Solid Button"/>;
};
```
</TabItem>
</Tabs>

## Solid Secondary
<Playground><Button variant="solid-secondary" label="Solid Inverted Button"/></Playground>
<Tabs>
<TabItem value='solid-secondary.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant="solid-secondary" label="Solid Inverted Button"/>;
};
```
</TabItem>
</Tabs>

## Outline Primary
<Playground><Button variant="outline-primary" label="Outline Button"/></Playground>
<Tabs>
<TabItem value='outline-primary.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant="outline-primary" label="Outline Button"/>;
};
```
</TabItem>
</Tabs>

## Neutral Primary
<Playground><Button variant="neutral-primary" label="Neutral Button"/></Playground>
<Tabs>
<TabItem value='neutral-primary.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant="neutral-primary" label="Neutral Button"/>;
};
```
</TabItem>
</Tabs>

## Neutral Secondary
<Playground><Button variant="neutral-secondary" label="Neutral Inverted Button"/></Playground>
<Tabs>
<TabItem value='neutral-secondary.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant="neutral-secondary" label="Neutral Inverted Button"/>;
};
```
</TabItem>
</Tabs>

## Outline Neutral
<Playground><Button variant="outline-neutral" label="Outline Button"/></Playground>
<Tabs>
<TabItem value='outline-neutral.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant="outline-neutral" label="Outline Button"/>;
};
```
</TabItem>
</Tabs>

## Destructive Primary
<Playground><Button variant='solid-destructive' label='Destructive Button'/></Playground>
<Tabs>
<TabItem value='solid-destructive.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant='solid-destructive' label='Destructive Button'/>;
};
```
</TabItem>
</Tabs>

## Destructive Outline
<Playground><Button variant='outline-destructive' label='Destructive Outline'/></Playground>
<Tabs>
<TabItem value='outline-destructive.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button variant='outline-destructive' label='Destructive Outline'/>;
};
```
</TabItem>
</Tabs>

## Disabled Button
<Playground><Button label="Disabled Button" state="disabled"/></Playground>
<Tabs>
<TabItem value='outline-destructive.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return <Button label="Disabled Button" state="disabled"/>;
};
```
</TabItem>
</Tabs>

## Button Sizes
Valid Values: `xs` `sm` `md` `lg` `xl` `2xl`
<Playground>
    <div className="flex gap-4">
        <Button size="xs" label="x-small"/>
        <Button size="sm" label="small"/>
        <Button size="md" label="medium"/>
        <Button size="lg" label="large"/>
        <Button size="xl" label="x-large"/>
        <Button size="2xl" label="xx-large"/>
    </div>
</Playground>
<Tabs>
<TabItem value='sizes.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return (
        <>
            <Button size="xs" label="x-small"/>
            <Button size="sm" label="small"/>
            <Button size="md" label="medium"/>
            <Button size="lg" label="large"/>
            <Button size="xl" label="x-large"/>
            <Button size="2xl" label="xx-large"/>
        </>
    );
};
```
</TabItem>
</Tabs>

## Border Radius
Valid Values: `none` `xs` `sm` `md` `lg` `xl` `2xl` `full`
<Playground>
    <div className="flex flex-col gap-4 flex-wrap">
        <div className="flex gap-4">
        <Button radius="none" label="none" size="lg"/>
        <Button radius="xs" label="x-small" size="lg"/>
        <Button radius="sm" label="small" size="lg"/>
        <Button radius="md" label="medium" size="lg"/></div>
    </div>
</Playground>
<Tabs>
<TabItem value='outline-destructive.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return (
        <div>
            <Button radius="none" label="none" size="lg"/>
            <Button radius="xs" label="x-small" size="lg"/>
            <Button radius="sm" label="small" size="lg"/>
            <Button radius="md" label="medium" size="lg"/>
        </div>
    );
};
```
</TabItem>
</Tabs>

## OnClick Function
Use the `onClick` function to add functionality to your button.
<Playground>
    <Button label="Click Me!" onClick={()=>{
        alert("Hello from Adroit UI");
    }}/>
</Playground>
<Tabs>
<TabItem value='button.jsx' label='Code' default>
``` javascript
import { Button } from 'adroit-ui';

function Button() {
    return (
        <Button label="Click Me!" onClick={()=>{
            alert("Hello from Adroit UI!");
        }}/>
    );
};
```
</TabItem>
</Tabs>

| Props | Values |
|-------|--------|
| Variants | `'solid-primary'` `'solid-secondary'` `'solid-destructive'` `'neutral-primary'` `'neutral-secondary'` `'oultine-primary'` `'outline-neutral'` `'outline-destructive'` |
| Sizes | `'xs'` `'sm'` `'md'` `'lg'` `'xl'` `'2xl'` |
| Border Radius | `'none'` `'xs'` `'sm'` `'md'` `'lg'` `'xl'` `'2xl'` `'full'` |
| State | `'default'` `'disabled'` |
| Label | `string` |
