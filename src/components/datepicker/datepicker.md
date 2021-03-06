#### DatePicker需求分析
1. 选日期
  - 默认时间
  - 高亮今天
  - 清除
  - 日期范围
2. 选两个日期(日期范围)
3. 选择年/月

#### DatePicker API设计
```
<f-data-picker @update:value="xxx"> 选择一个时间
<f-daterange-picker v-model="xxx"> 选择一段时间
<f-month-picker> 选择一个月
<f-year-picker> 选择一年
```
#### 单个时间组件
顶部导航区，可选年，月，前进，后退
中部内容区，1. 星期与日，2. 年 3. 月
底部动作区，取消，清空，确定

#### 如何展示六行七列的数字
方案1：计算每个月的1号的星期和天数，如果1号星期六，则前面补五项，后面直到补充到42个为止。
方案2：算出这个月1号星期几，若星期日，则将起始时间回退六天前，得到面板第一天的时间，然后便利42次，每次加上一天。

#### 样式跨越组件限制
/deep/ .xxx{color: red;}

#### value 与display
选中的日期和展示的日期列表应区分开

#### 修改input输入框时，日历的时间如何动态修改。若输入值不符合规范，如何还原值。
value修改合理值时, 组件监听的input会修改datepicker组件的value值，但value修改为不合理值时，datepicker组件的value不会修改，只能对内部的input组件,加上一个可以修改原生input的值的函数。

#### 使用示例

```vue
<f-date-picker :value="value" @input="value = $event" :showActions="false" :reserveMonthAndYear="true"></f-date-picker>

data: {
  value: null
}

```

#### 待解决的bug

当选择的时间为空时，点下个月和切换月份存在bug，因为不存在时间，计算月份时一直是new Date()即当月的。

firstDayOfWeek 选择非'一'时，日期与星期没有对应起来
