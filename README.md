# v-tip
消息提示框
## 参考
[vue-directive-tooltip](https://github.com/hekigan/vue-directive-tooltip)

[v-tooltip](https://github.com/Akryum/v-tooltip)

## 特性

- 支持 dark/light 主题

## 用法

```js
Vue.use(Vtip,{directiveName:'tip',theme:'dark'})
```

## 注册参数说明

| 参数          | 说明       | 类型   | 是否必填 | 可选值            | 默认值 |
| ------------- | ---------- | ------ | -------- | ----------------- | ------ |
| directiveName | 指令名     | String | no       |                   | tip    |
| theme         | 提示框主题 | Object | no       | `dark` \| `light` | `dark` |


## 指令参数说明

| 参数     | 说明         | 类型   | 是否必填 | 可选值                                                      | 默认值   |
| -------- | ------------ | ------ | -------- | ----------------------------------------------------------- | -------- |
| class | 自定义提示框类名，支持连写方式。例如:`tip-class1 tip-class2` | String | false |||
| position | 提示框位置   | String | false    | `right` \| `left` \| `right` \| `top` \| `curosr` | `cursor` |
| delay    | 显示延迟,仅`hover`触发方式可用 | number | false    |                                                             | 200      |
| offset   | 提示框偏移值 | number | false    |                                                             | 10       |
| triggers | 触发方式     | String | false    | `click` \| `hover`                                          | `hover`  |
## demo

```html
    <div v-tip="'test'">test</div>
```

