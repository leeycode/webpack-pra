# webpack-pra
webpack练习

# 默认安装
npm init -y

# 安装webpack相关
npm install webpack webpack-cli --save-dev

# 检查webpack版本 cd node_modules/.bin
webpack -v

# 通过npm stript运行webpack,否则只能在.bin下面执行
```
package.json中添加 **build": "webpack"**
```

# 核心概念
## entry
entry是webpack打包文件的入口。入口可以设置多个，比如多页面应用。两者的写法有差异，但入口接收一个字符串，多入口写成对象的形式。

### 单入口写法

```
module.exports = {
    entry: "./path/to/my/entry/file.js"
}
```

### 多入口写法
```
module.exports = {
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
    }
}

```

## output
output用来指定打包输出。多个文件的时候通过占位符做区分 ，比如[name]。

```
module.exports = {
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/
    }
}

```



