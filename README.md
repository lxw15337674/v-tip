# v-tip
消息提示
## todo
[vue-directive-tooltip](https://github.com/hekigan/vue-directive-tooltip)
## 特性

- 支持 dark/light 主题

## 用法

```
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
| position | 提示框位置   | String | false    | `right` \| `left` \| `right` \| `top` \| `auto` \| `curosr` | `cursor` |
| delay    | 显示延迟     | number | false    |                                                             | 200      |
| offset   | 提示框位移值 | number | false    |                                                             | 5        |
| triggers | 触发方式     | String | false    | `click` \| `hover`                                          | `hover`  |
## demo

```
    <div v-tip="'test'">test</div>
```

