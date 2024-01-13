import Mock from 'better-mock'
import testApi from './test'

// js中的正则语法   /正则表达式主体/修饰符(可选)
Mock.mock(/\/api\/banner/, 'get', testApi.listBanner)