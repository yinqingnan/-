import Mock from 'mockjs'
const navlist = {
  code: 0,
  msg: '操作成功',
  data: [{
    code: '1',
    name: '系统管理',
    parentCode: '0',
    children: [{
      code: '6',
      name: '权限管理',
      parentCode: '1',
      children: null,
      path: 'root',
      menuType: null,
      selected: false,
      parentName: null,
      title: '权限管理',
      key: '6'
    }, {
      code: '8',
      name: '角色管理',
      parentCode: '1',
      children: null,
      path: 'role',
      menuType: null,
      selected: false,
      parentName: null,
      title: '角色管理',
      key: '8'
    }, {
      code: '7',
      name: '部门管理',
      parentCode: '1',
      children: null,
      path: 'dept',
      menuType: null,
      selected: false,
      parentName: null,
      title: '部门管理',
      key: '7'
    }, {
      code: '2',
      name: '用户管理',
      parentCode: '1',
      children: null,
      path: 'user',
      menuType: null,
      selected: false,
      parentName: null,
      title: '用户管理',
      key: '2'
    }, {
      code: '3',
      name: '菜单管理',
      parentCode: '1',
      children: null,
      path: 'menu',
      menuType: null,
      selected: false,
      parentName: null,
      title: '菜单管理',
      key: '3'
    }, {
      code: '4',
      name: '系统参数',
      parentCode: '1',
      children: null,
      path: 'param',
      menuType: null,
      selected: false,
      parentName: null,
      title: '系统参数',
      key: '4'
    }, {
      code: '5',
      name: '数据字典',
      parentCode: '1',
      children: null,
      path: 'dict',
      menuType: null,
      selected: false,
      parentName: null,
      title: '数据字典',
      key: '5'
    }],
    path: '',
    menuType: null,
    selected: false,
    parentName: null,
    title: '系统管理',
    key: '1'
  }, {
    code: '131',
    name: '网站设置',
    parentCode: '0',
    children: [{
      code: '132',
      name: '新闻管理',
      parentCode: '131',
      children: null,
      path: 'news',
      menuType: null,
      selected: false,
      parentName: null,
      title: '新闻管理',
      key: '132'
    }, {
      code: '133',
      name: '招聘管理',
      parentCode: '131',
      children: null,
      path: 'recruit',
      menuType: null,
      selected: false,
      parentName: null,
      title: '招聘管理',
      key: '133'
    }, {
      code: '134',
      name: '产品方案',
      parentCode: '131',
      children: null,
      path: 'product',
      menuType: null,
      selected: false,
      parentName: null,
      title: '产品方案',
      key: '134'
    }, {
      code: '135',
      name: '服务',
      parentCode: '131',
      children: null,
      path: 'serve',
      menuType: null,
      selected: false,
      parentName: null,
      title: '服务',
      key: '135'
    }],
    path: '',
    menuType: null,
    selected: false,
    parentName: null,
    title: '网站设置',
    key: '131'
  },
  {
    code: '140',
    name: '图表工具',
    parentCode: '0',
    children: [{
      code: '140',
      name: '折线图',
      parentCode: '140',
      children: null,
      path: 'line',
      menuType: null,
      selected: false,
      parentName: null,
      title: '折线图',
      key: '140'
    },
    {
      code: '140',
      name: '柱状图',
      parentCode: '140',
      children: null,
      path: 'bar',
      menuType: null,
      selected: false,
      parentName: null,
      title: '柱状图',
      key: '140'
    },
    {
      code: '140',
      name: '条形图',
      parentCode: '140',
      children: null,
      path: 'Histogram',
      menuType: null,
      selected: false,
      parentName: null,
      title: '条形图',
      key: '140'
    }, {
      code: '140',
      name: '饼图',
      parentCode: '140',
      children: null,
      path: 'pie',
      menuType: null,
      selected: false,
      parentName: null,
      title: '饼图',
      key: '140'
    }, {
      code: '140',
      name: '环图',
      parentCode: '140',
      children: null,
      path: 'ring',
      menuType: null,
      selected: false,
      parentName: null,
      title: '环图',
      key: '140'
    }, {
      code: '140',
      name: '瀑布图',
      parentCode: '140',
      children: null,
      path: 'waterfall',
      menuType: null,
      selected: false,
      parentName: null,
      title: '瀑布图',
      key: '140'
    }, {
      code: '140',
      name: '漏斗图',
      parentCode: '140',
      children: null,
      path: 'funnel',
      menuType: null,
      selected: false,
      parentName: null,
      title: '漏斗图',
      key: '140'
    },
    {
      code: '140',
      name: '雷达图',
      parentCode: '140',
      children: null,
      path: 'radar',
      menuType: null,
      selected: false,
      parentName: null,
      title: '雷达图',
      key: '140'
    }

    ],
    path: '',
    menuType: null,
    selected: false,
    parentName: null,
    title: '图表工具',
    key: '140'
  }]
}

Mock.mock(RegExp('/navlist'), 'get', () => {
  return navlist
})
