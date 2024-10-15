---
id: 'checkbox'
---
import { Checkbox } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Checkbox
A component that allows multiple selections.

## Primary

<Playground>
        <Checkbox variant="primary"/>
</Playground>
<Tabs>
<TabItem value="checkbox" label="Code">
``` javascript
import { Checkbox } from 'adroit-ui';

function Checkbox() {
    return(
        <Checkbox id='primary1' variant="primary"/>
    );
};
```
</TabItem>
</Tabs>

## Neutral

<Playground>
        <Checkbox id='neutral1' variant="neutral"/>
</Playground>
<Tabs>
<TabItem value="checkbox" label="Code">
``` javascript
import { Checkbox } from 'adroit-ui';

function Checkbox() {
    return(
        <Checkbox id='neutral1' variant="neutral"/>
    );
};
```
</TabItem>
</Tabs>

## Error

<Playground>
        <Checkbox id='error1' variant="error"/>
</Playground>
<Tabs>
<TabItem value="checkbox" label="Code">
``` javascript
import { Checkbox } from 'adroit-ui';

function Checkbox() {
    return(
        <Checkbox id='error1' variant="error"/>
    );
};
```
</TabItem>
</Tabs>

## Success

<Playground>
        <Checkbox id='success1' variant="success"/>
</Playground>
<Tabs>
<TabItem value="checkbox" label="Code">
``` javascript
import { Checkbox } from 'adroit-ui';

function Checkbox() {
    return(
        <Checkbox id='success1' variant="success"/>
    );
};
```
</TabItem>
</Tabs>

## Warning

<Playground>
        <Checkbox id='warning1' variant="warning"/>
</Playground>
<Tabs>
<TabItem value="checkbox" label="Code">
``` javascript
import { Checkbox } from 'adroit-ui';

function Checkbox() {
    return(
        <Checkbox id='warning1' variant="warning"/>
    );
};
```
</TabItem>
</Tabs>

## Size
Available sizes:  `sm` `md` `lg`
<Playground>
        <Checkbox id='1' variant="primary" size='sm'/>
        <Checkbox id='2' variant="primary" size='md'/>
        <Checkbox id='3' variant="primary" size='lg'/>
</Playground>
<Tabs>
<TabItem value="checkbox" label="Code">
``` javascript
import { Checkbox } from 'adroit-ui';

function Checkbox() {
    return(
        <div className="flex gap-4 items-center">
            <Checkbox id='1' variant="primary" size='sm'/>
            <Checkbox id='2' variant="primary" size='md'/>
            <Checkbox id='3' variant="primary" size='lg'/>
        </div>
    );
};
```
</TabItem>
</Tabs>

## Props
| Props | Values |
|-------|--------|
| id | `string` |
| variant | `'primary'` `'neutral'` `'success'` `'warning'` `'error'` |
| label | `string` |
| size | `'sm'` `'md'` `'lg'` |
| Disabled | `true` or `false(default)` |