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

## loader 
webpack原生只支持js,json两种文件类型，通过loader去支持其他文件类型并把他们转化成有效的模块，并添加到依赖图中。

本身是一个函数，接受源文件作为参数，返回转换的结果。


### 常见的loader 

名称        | 描述
---|---
babel-loader | 转换ES6等新特性语法
css-loader   | .css文件的加载和解析
less-loader  | 将less文件转为css
ts-loader    | 将TS转为js
file-loader  | 进行字体，图片的打包
raw-loader   | 将文件以字符串的形式导入
thread-loader| 多线程打包css，js

### 使用
放在module中，test用来指定匹配规则，use指定使用的loader名称

```
module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader'}
        ]
    }
```

## plugins 
插件用于bundle文件的优化，资源管理，环境变量的注入，作用于整个构建过程。loader没法做的事情，都是plugins来完成。


### 常见的plugins

名称                         | 描述
---|---
html-webpack-plugin          | 创建html文件去承载输出的bundle
clean-webpack-plugin         | 用于在打包前清理上一次项目生成的 bundle 文件
splitChunks                  | 提取被重复引入的文件，单独生成一个或多个文件，这样避免在多入口重复打包文件（替换CommonsChunkPlugin） 
copy-webpack-plugin          | 将文件或文件夹拷贝到构建的输出目录
extract-text-webpack-plugin  | 抽离 css 样式,防止将样式打包在 js 中引起页面样式加载错乱的现象
UglifyJsPlugin               | 压缩js
ZipWebpackPlugin             | 将打包的出的资源生成一个zip包

### 使用
放在plugins数组中：

```
plugins: [
        //moment这个库中，如果引用了./locale/目录的内容，就忽略掉，不会打包进去
        new Webpack.IgnorePlugin(/\.\/locale/, /moment/),
    ]

```
