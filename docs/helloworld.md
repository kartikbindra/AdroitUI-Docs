---
id: 'helloworld'
---
import { Button } from 'adroit-ui';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '../src/components/playground/playground';

# Hello Button

<Tabs>
<TabItem value='npm' label='npm' default>
```sh
npm i adroit-ui@latest
```
</TabItem>
<TabItem value='yarn' label='yarn' default>
```sh
yarn add adroit-ui
```
</TabItem>
</Tabs>

## Destructive

<Playground><Button variant='solid-destructive' size='lg' radius='sm' label='Log Out'/></Playground>
