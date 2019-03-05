import Vue from 'vue';
import Button from './button/button';
import Icon from './Icon';
import ButtonGroup from './button/button-group';
import Input from './Input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Footer from './layout/footer'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import plugin from './plugin'
import Toast from './toast'
import Tabs from './tabs/tabs'
import TabsNav from './tabs/tabs-nav'
import TabsContent from './tabs/tabs-content'
import TabsItem from './tabs/tabs-item'
import TabsPanel from './tabs/tabs-panel'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapseItem'
import Cascader from './cascader/cascader'
import CascaderItems from './cascader/cascaderItems'


Vue.component('f-button',Button)
Vue.component('f-icon',Icon)
Vue.component('f-button-group',ButtonGroup)
Vue.component('f-input',Input)
Vue.component('f-row',Row)
Vue.component('f-col',Col)
Vue.component('f-layout',Layout)
Vue.component('f-footer',Footer)
Vue.component('f-header',Header)
Vue.component('f-sider',Sider)
Vue.component('f-content',Content)
Vue.component('f-toast',Toast)
Vue.component('f-tabs',Tabs)
Vue.component('f-tabs-nav',TabsNav)
Vue.component('f-tabs-content',TabsContent)
Vue.component('f-tabs-item',TabsItem)
Vue.component('f-tabs-panel',TabsPanel)
Vue.component('f-popover', Popover)
Vue.component('f-collapse', Collapse)
Vue.component('f-collapse-item', CollapseItem)
Vue.component('f-cascader', Cascader)
Vue.component('f-cascader-items', CascaderItems)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        sources: [
            {name: '广东省',children: [
                {name: '广州市',children: [
                    {name: '天河区'},
                ]},
                {name: '深圳市',children: [
                    {name: '南山区'},
                    {name: '宝安区'},
                    {name: '罗湖区'}
                ]},
            ]},
            {name: '湖北省',children: [
                {name: '武汉市',children:[
                    {name: '武昌区'},
                    {name: '江岸区'},
                ]},
                {name: '荆州市',children:[
                    {name: '石首市'},
                    {name: '监利县'}
                ]},
            ]}
        ]
    },
})
