---
id: 'Radio'
---
import { Radio } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Radio
A component that allows single selection.

## Primary

<Playground>
        <div>
            <Radio id='primary1' variant="primary" size='md' label='Radio'/>
            <Radio id='primary2' variant="primary" size='md' label='Radio'/>
            <Radio id='priamry3' variant="primary" size='md' label='Radio'/>
        </div>
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <Radio id='primary1' variant="primary"/>
    );
};
```
</TabItem>
</Tabs>

## Neutral

<Playground>
        <Radio id='neutral1' variant="neutral" size='md' />
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <Radio id='neutral1' variant="neutral"/>
    );
};
```
</TabItem>
</Tabs>

## Error

<Playground>
        <Radio id='error1' variant="error" size='md' />
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <Radio id='error1' variant="error"/>
    );
};
```
</TabItem>
</Tabs>

## Success

<Playground>
        <Radio id='success1' variant="success" size='md' />
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <Radio id='success1' variant="success"/>
    );
};
```
</TabItem>
</Tabs>

## Warning

<Playground>
        <Radio id='warning1' variant="warning" size='md' />
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <Radio id='warning1' variant="warning"/>
    );
};
```
</TabItem>
</Tabs>
## Disabled

<Playground>
        <Radio id='primary4' variant="primary" size='md' Disabled="true"/>
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <Radio variant="primary" Disabled="true"/>
    );
};
```
</TabItem>
</Tabs>

## Size
Available sizes:  `sm` `md` `lg`
<Playground>
        <Radio id='1' variant="primary" size='sm'/>
        <Radio id='2' variant="primary" size='md'/>
        <Radio id='3' variant="primary" size='lg'/>
</Playground>
<Tabs>
<TabItem value="Radio" label="Code">
``` javascript
import { Radio } from 'adroit-ui';

function Radio() {
    return(
        <div className="flex gap-4 items-center">
            <Radio id='1' variant="primary" size='sm'/>
            <Radio id='2' variant="primary" size='md'/>
            <Radio id='3' variant="primary" size='lg'/>
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