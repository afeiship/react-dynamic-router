# react-dynamic-router
> Another react dynamic router config.


## properties:
```javascript
BACKUP_PROPERTIES
```

## usage:
```js
//webpack:
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, "../src"),
          resolve(__dirname, "../node_modules/mixin-decorator"),
          resolve(__dirname, "../node_modules/react-dynamic-router")
        ]
      }
    ]
}

resolve: {
  extensions: ['.js', '.json', '.scss', '.css'],
  alias:{
    admin: resolve(__dirname, '../src/admin')
  }
}
```
