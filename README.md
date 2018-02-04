# react-dynamic-router
> Another react dynamic router config.

## install:
```bash
npm install -S afeiship/react-dynamic-router --registry=https://registry.npm.taobao.org
```

## confirguation:
```js
resolve: {
  alias:{
    admin: resolve(__dirname, '../src/admin')
  }
},
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      include: [
        resolve(__dirname, "../src"),
        resolve(__dirname, "../node_modules/react-dynamic-router")
      ]
    },
  ]
}
```

## usage:
```js
import ReactDynamicRouter from 'react-dynamic-router';
import {
  Route
} from 'react-router-dom';

const ROUTES = [
  '/admin/accounts/index',
  '/admin/accounts/add',
  '/admin/accounts/edit/:id'
];

<Content className="admin-content-area">
  { ReactDynamicRouter.build(Route, ROUTES) }
</Content>
```
