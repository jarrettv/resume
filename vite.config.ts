import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

const config: UserConfig = {
  plugins: [
    Vue(),
    Icons({      
      compiler: 'vue3',
      customCollections: {
        'my-icons': FileSystemIconLoader('./src/icons'),
      }
    }),
    Components({
      dts: true,
      resolvers: [
        IconsResolver({
          customCollections: ['my-icons'],
        }),
      ],
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  }
}
export default config