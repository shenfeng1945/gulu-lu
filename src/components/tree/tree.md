### 使用示例

```vue
 <f-tree :data="data"></f-tree>
 
 data(){
     return {
         data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 1.1,
            label: '二级 1-1',
            children: [{
              id: 1.11,
              label: '三级 1-1-1'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 2.1,
            label: '二级 2-1',
            children: [{
              id: 2.11,
              label: '三级 2-1-1'
            }]
          }, {
            id: 2.2,
            label: '二级 2-2',
            children: [{
              id: 2.21,
              label: '三级 2-2-1'
            }]
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 3.1,
            label: '二级 3-1',
            children: [{
              id: 3.11,
              label: '三级 3-1-1'
            }]
          }, {
            id: 3.2,
            label: '二级 3-2',
            children: [{
              id: 3.21,
              label: '三级 3-2-1'
            }]
          }]
        }]
     }
 }
```