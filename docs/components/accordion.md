---
id: 'accordion'
---
import { Accordion, AccordionItem } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../../src/components/playground/playground';

# Accordion
A collapsible component that displays the info in a vertical stack fashion.

## Default 
Default Accordion example

<Playground>
        <Accordion className="bg-white rounded-md shadow-md">
            <AccordionItem title="Accordion Item Title 1" description="this is the description for accordion item 1"/>
            <AccordionItem title="Accordion Item Title 2" description="this is the description for accordion item 2"/>
            <AccordionItem title="Accordion Item Title 3" description="this is the description for accordion item 3"/>
        </Accordion>
</Playground>
<Tabs>
<TabItem value="accordion" label="Code">
``` javascript
import { Accordion, AccordionItem } from 'adroit-ui';

function Accordion() {
    return(
        <Accordion className="bg-white rounded-md shadow-md">
            <AccordionItem title="Accordion Item Title 1" description="this is the description for accordion item 1"/>
            <AccordionItem title="Accordion Item Title 2" description="this is the description for accordion item 2"/>
            <AccordionItem title="Accordion Item Title 3" description="this is the description for accordion item 3"/>
        </Accordion>
    );
};
```
</TabItem>
</Tabs>

| Props | Values |
|-------|--------|
| title | `string` |
| description | `string` |