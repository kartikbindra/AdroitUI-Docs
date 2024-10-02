---
id: 'breadcrumb'
---
import { Breadcrumb, BreadcrumbItem } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Breadcrumb
A collapsible component that displays the info in a vertical stack fashion.

## With Default Seperator
Breadcrumb with default seperator

<Playground>
        <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/docs/category/components/">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
</Playground>
<Tabs>
<TabItem value="breadcrumb" label="Code">
``` javascript
import { Breadcrumb, BreadcrumbItem } from 'adroit-ui';

function Accordion() {
    return(
        <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/docs/category/components/">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
    );
};
```
</TabItem>
</Tabs>

## With Custom Seperator
Breadcrumb with custom seperator using `seperator` prop

<Playground>
        <Breadcrumb seperator=">">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/docs/category/components/">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
</Playground>
<Tabs>
<TabItem value="breadcrumb" label="Code">
``` javascript
import { Breadcrumb, BreadcrumbItem } from 'adroit-ui';

function Accordion() {
    return(
        <Breadcrumb seperator=">">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/docs/category/components/">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
    );
};
```
</TabItem>
</Tabs>

## Props
| Props | Values |
|-------|--------|
| children | `ReactObj` |
| href | `Link(string)` |
| seperator | `string / ReactObj` |