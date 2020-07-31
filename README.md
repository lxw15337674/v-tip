# v-tip
基于rollup、ts、vue的自定义指令提示框

## 参考
[vue-directive-tooltip](https://github.com/hekigan/vue-directive-tooltip)

[v-tooltip](https://github.com/Akryum/v-tooltip)

## 特性

- 支持 `dark`/`light` 主题
- 支持`ref`形式，提示框可以显示复杂的dom元素。
- 支持全局默认配置

## TODO

1. 增加[手动模式](https://akryum.github.io/v-tooltip/#/)

2. 增加自动隐藏开关

	> 目前`hover`为自动隐藏，`click`为手动隐藏

3. 增加上传、npm发布脚本

## 用法

1. 安装插件

   ```
   npm install -s @lxw15337674/v-tip
   ```

2. 注册为全局组件

   ```
   import tip from '@lxw15337674/v-tip';
   
   Vue.use(tip,{directiveName:'tip',theme:'dark'})
   ```

   [详细全局参数配置](#注册参数)

3. 使用示例：

   ```html
   <!--  基本模式  -->
   <div v-tip="'test'">test</div>
   
   <!--  基于content属性  -->
   <div v-tip="{
           content: 'test',
           delay: 1000,
           theme:'dark',
           positions: 'top',
           triggers: 'click',
           class: 'tooltip-custom tip',
         }" >
       test
   </div>
   
   
   <!--  基于ref属性  -->
   <div v-tip="{
           ref: 'tipContent',
           delay: 1000,
         }" >
       test
   </div>
   <div ref='tipContent'>
       tipContent
   </div>
   ```

   [详细参数配置](#指令参数)

## 注册参数

| 参数          | 说明                                                         | 类型   | 是否必填 | 可选值                                             | 默认值   |
| ------------- | ------------------------------------------------------------ | ------ | -------- | -------------------------------------------------- | -------- |
| directiveName | 指令名                                                       | String | false    |                                                    | tip      |
| theme         | 提示框主题                                                   | Object | false    | `dark` \| `light`                                  | `dark`   |
| class         | 自定义提示框类名，支持连写方式。例如:`tip-class1 tip-class2` | String | false    |                                                    |          |
| position      | 提示框位置                                                   | String | false    | `right` \| `left` \| `bottom` \| `top` \| `curosr` | `bottom` |
| delay         | 显示延迟,仅`hover`触发方式可用                               | number | false    |                                                    | 200      |
| offset        | 提示框偏移值                                                 | number | false    |                                                    | 10       |
| triggers      | 触发方式                                                     | String | false    | `click` \| `hover`                                 | `hover`  |

> 注册参数一般用于全局配置，优先级低于指令参数。

## 指令参数

| 参数     | 说明         | 类型   | 是否必填 | 可选值                                                      | 默认值   |
| -------- | ------------ | ------ | -------- | ----------------------------------------------------------- | -------- |
| content | 提示框内容 | string | false |  |  |
| ref | 通过ref属性传递提示框内容 | string | false |  |  |
| theme | 提示框主题 | Object | false | `dark` \| `light` | `dark` |
| class | 自定义提示框类名，支持连写方式。例如:`tip-class1 tip-class2` | String | false |||
| position | 提示框位置   | String | false    | `right` \| `left` \| `bottom` \| `top` \| `curosr` | `bottom` |
| delay    | 显示延迟,仅`hover`触发方式可用 | number | false    |                                                             | 200      |
| offset   | 提示框偏移值 | number | false    |                                                             | 10       |
| triggers | 触发方式     | String | false    | `click` \| `hover`                                          | `hover`  |
> 注意：
> `ref`属性优先级低于`content`属性



## 暂存问题

`ref`内容模式：

- 多个tip引用一个ref，只有第一个tip会正常引用
- 动态修改ref，不会变化。
- ref引用的元素有v-tip指令，tip会被元素本身遮挡，所以不建议使用`cursor`模式
