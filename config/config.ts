import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    //  node_modules 目录下依赖文件的编译方式
    type: 'none', // all 的慢一点，但兼容性好一点
  },
  routes: routes,
  fastRefresh: {}, // 快速刷新，保持组件状态
  devServer: {
    port: 8001,
  },
  title: 'umi3',
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },

});
