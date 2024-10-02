---
id: 'badge'
---
import { Badge, Alert } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Badge
A component used to label and highlight a data for the user.

## Primary 

<Playground>
        <Badge type="primary" content="Primary"/>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <Badge type="primary" content="Primary"/>
    );
};
```
</TabItem>
</Tabs>
## Secondary 

<Playground>
        <Badge type="secondary" content="Secondary"/>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <Badge type="secondary" content="Secondary"/>
    );
};
```
</TabItem>
</Tabs>
## Outline 

<Playground>
        <Badge type="outline" content="Outline"/>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <Badge type="outline" content="Outline"/>
    );
};
```
</TabItem>
</Tabs>
## Success 

<Playground>
        <Badge type="success" content="Success"/>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <Badge type="success" content="Success"/>
    );
};
```
</TabItem>
</Tabs>
## Warning 

<Playground>
        <Badge type="warning" content="Warning"/>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <Badge type="warning" content="Warning"/>
    );
};
```
</TabItem>
</Tabs>
## Error 

<Playground>
        <Badge type="error" content="Error"/>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <Badge type="error" content="Error"/>
    );
};
```
</TabItem>
</Tabs>
## Badge Sizes 
Available sizes: `xs` `sm` `md`
<Playground>
    <div className="flex gap-4 items-center">
        <Badge size="xs"/>
        <Badge size="sm"/>
        <Badge size="md"/>
    </div>
</Playground>
<Tabs>
<TabItem value="badge" label="Code">
``` javascript
import { Badge } from 'adroit-ui';

function Badge() {
    return(
        <div className="flex gap-4 items-center">
            <Badge size="xs"/>
            <Badge size="sm"/>
            <Badge size="md"/>
        </div>
    );
};
```
</TabItem>
</Tabs>


## Props

| Props | Values |
|-------|--------|
| type | `'primary'` `'secondary'` `'outline'` `'success'` `'warning'` `'error'` |
| size | `'xs'` `'sm'` `'md'` |
| content | `string` |