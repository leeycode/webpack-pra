# webpack-pra

webpack手册，包含基础概念，基础用法，和进阶用法，持续更新！

## webpack 核心概念

1. [webpack 核心概念之 entry/output](./doc/1.md)
2. [webpack 核心概念之 loader/plugin](./doc/2.md)
3. [webpack 核心概念之 mode](./doc/3.md)


## webpack 基础用法

1. [webpack 基础用法之 ES6 解析](./doc/4.md)
2. [webpack 基础用法之 JSX 解析](./doc/5.md)
3. [webpack 基础用法之 CSS 解析](./doc/6.md)
4. [webpack 基础用法之 图片解析](./doc/7.md)
5. [webpack 基础用法之 字体解析](./doc/8.md)
6. [webpack 基础用法之 资源解析](./doc/9.md)
7. [webpack 基础用法之 文件监听和热更新](./doc/10.md)
8. [webpack 基础用法之 文件指纹](./doc/11.md)
9. [webpack 基础用法之 HTML/CSS/JS 压缩](./doc/12.md)

## webpack 进阶用法

1. [webpack 进阶用法之 自动清理构建目录产物](./doc/13.md)
2. [webpack 进阶用法之 PostCSS 插件 autoprefixer 自动补齐 css3前缀](./doc/14.md)
3. [webpack 进阶用法之 移动端 CSS px 自动转化成 rem](./doc/15.md)
4. [webpack 进阶用法之 静态资源内联](./doc/16.md)
5. [webpack 进阶用法之 多页面（MPA）应用打包方案](./doc/17.md)
6. [webpack 进阶用法之 source map 使用](./doc/18.md)
7. [webpack 进阶用法之 提取公共资源](./doc/19.md)
8. [webpack 进阶用法之 tree-shaking](./doc/20.md)
9. [webpack 进阶用法之 Scope Hoisting](./doc/21.md)
10. [webpack 进阶用法之 代码分割和动态import](./doc/22.md)
11. [webpack 进阶用法之 和ESLint 结合](./doc/23.md)
12. [webpack 进阶用法之 优化构建时命令行的显示日志](./doc/24.md)
13. [webpack 进阶用法之 构建异常和中断处理](./doc/25.md)

## webpack 优化策略

1. 速度分析
2. 体积分析 
3. 多进程/多实例 构建
4. 多进程并行压缩代码
5. 使用 exterals 分离基础包
6. 利用缓存提升二次构建速度
7. 缩小构建目标
8. 使用 Tree-shaking 擦除无用的 JS 和 CSS
9. 使用动态 Polyfill
10. 使用 webpack 进行图片压缩

## webpack 源码分析

1. webpack 的本质和 Tapable 介绍
2. Tapable 中的 Sync* 类型的钩子
3. Tapable 中的 Async* 类型的钩子
4. webpack 事件流
5. compile 和 compilation 对象介绍
6. 编译和构建主流程
7. 通过 emit 输出构建资源到 Path
8. 写一个简易的 webpack

## 编写 loader 和插件

1. loader 的执行顺序
2. loader 匹配文件的可选方式
3. 写一个自动合成雪碧图的loader
4. 写一个压缩构建资源为 zip 包的插件



### [强烈推荐极客时间的这个视频 - 玩转webpack](https://time.geekbang.org/course/intro/190)