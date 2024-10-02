---
id: 'alert'
---
import { Alert } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Alert
A component to display an important message/ information to the user.

## Info Alert 

<Playground>
        <Alert type='info' title="This is a Info-type Alert!" description="this is the info alert message description."/>
</Playground>
<Tabs>
<TabItem value="accordion" label="Code">
``` javascript
import { Alert } from 'adroit-ui';

function Alert() {
    return(
        <Alert type="info" title="This is a Info-type Alert!" description="this is the info alert message description."/>
    );
};
```
</TabItem>
</Tabs>
## Success Alert 

<Playground>
        <Alert type='success' title="This is a Success-type Alert!" description="this is the success alert message description."/>
</Playground>
<Tabs>
<TabItem value="Alert" label="Code">
``` javascript
import { Alert } from 'adroit-ui';

function Alert() {
    return(
        <Alert type="success" title="This is a Success-type Alert!" description="this is the success alert message description."/>
    );
};
```
</TabItem>
</Tabs>
## Warning Alert 

<Playground>
        <Alert type='warning' title="This is a Warning-type Alert!" description="this is the warning alert message description."/>
</Playground>
<Tabs>
<TabItem value="Alert" label="Code">
``` javascript
import { Alert } from 'adroit-ui';

function Alert() {
    return(
        <Alert type="warning" title="This is a Warning-type Alert!" description="this is the warning alert message description."/>
    );
};
```
</TabItem>
</Tabs>
## Error Alert 

<Playground>
        <Alert type='error' title="This is a Error-type Alert!" description="this is the error alert message description."/>
</Playground>
<Tabs>
<TabItem value="Alert" label="Code">
``` javascript
import { Alert } from 'adroit-ui';

function Alert() {
    return(
        <Alert type="error" title="This is a Error-type Alert!" description="this is the error alert message description."/>
    );
};
```
</TabItem>
</Tabs>

## Props

| Props | Values |
|-------|--------|
| type | `'info'` `'success'` `'warning'` `'error'` |
| title | `string` |
| description | `string` |