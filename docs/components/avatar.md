---
id: 'avatar'
---
import { Avatar, Alert } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Avatar
Used to represent users or things, supporting the display of images, icons, or characters.

## Default Fallback Avatar

<Playground>
        <Avatar size="2xl"/>
</Playground>
<Tabs>
<TabItem value="avatar" label="Code">
``` javascript
import { Avatar } from 'adroit-ui';

function Avatar() {
    return(
        <Avatar size="2xl"/>
    );
};
```
</TabItem>
</Tabs>
## Letter Fallback Avatar

<Playground>
        <Avatar fallback="John Doe" size="2xl"/>
</Playground>
<Tabs>
<TabItem value="avatar" label="Code">
``` javascript
import { Avatar } from 'adroit-ui';

function Avatar() {
    return(
        <Avatar fallback="John Doe" size="2xl"/>
    );
};
```
</TabItem>
</Tabs>
## Image Avatar

<Playground>
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="2xl"/>
</Playground>
<Tabs>
<TabItem value="avatar" label="Code">
``` javascript
import { Avatar } from 'adroit-ui';

function Avatar() {
    return(
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="2xl"/>
    );
};
```
</TabItem>
</Tabs>
## Avatar Sizes
Available sizes: `sm` `md` `lg` `xl` `2xl`

<Playground>
<div className="flex gap-4 items-center">
        <Avatar size="sm"/>
        <Avatar size="md"/>
        <Avatar size="lg"/>
        <Avatar size="xl"/>
        <Avatar size="2xl"/>
        </div>
</Playground>
<Tabs>
<TabItem value="avatar" label="Code">
``` javascript
import { Avatar } from 'adroit-ui';

function Avatar() {
    return(
        <div className="flex gap-4 items-center">
            <Avatar size="sm"/>
            <Avatar size="md"/>
            <Avatar size="lg"/>
            <Avatar size="xl"/>
            <Avatar size="2xl"/>
        </div>
    );
};
```
</TabItem>
</Tabs>
## Avatar Shapes
Available shapes: `circle(default)` `square`

<Playground>
    <div className="flex gap-4 items-center">
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="2xl"/>
        <Avatar shape="square" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="2xl"/>
    </div>
</Playground>
<Tabs>
<TabItem value="avatar" label="Code">
``` javascript
import { Avatar } from 'adroit-ui';

function Avatar() {
    return(
        <div className="flex gap-4 items-center">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="2xl"/>
            <Avatar shape="square" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="2xl"/>
        </div>
    );
};
```
</TabItem>
</Tabs>

## Props

| Props | Values |
|-------|--------|
| size | `'sm'` `'md'` `'lg'` `'xl'` `'2xl'` |
| fallback | `string` |
| src | `Link(string)` |
| shape | `'circle'` `'square'` |