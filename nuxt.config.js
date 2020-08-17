
	
var Prismic = require('prismic-javascript');
const prismicEndpoint = 'https://cholo-portfolio.cdn.prismic.io/api/v2';

// TODO: Factor in Page Size > 100
const routes = () =>
	Prismic.getApi(prismicEndpoint)
		.then(api =>
			api.query(Prismic.Predicates.at('document.type', 'projects'), {
        pageSize: 100,
        orderings : '[my.projects.date desc]'
			}),
		)
		.then(res => {
			if (res.total_pages > 1) {
				console.warn('we have more than 100 pages, fix it');
				process.exit(1);
      }
      
			return res.results.map(page=> `/projects/${page.uid}/`);
		});

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // target: 'static',
  buildDir: 'nuxt-dist',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/prismic',
    '@/modules/static',
    '@/modules/crawler',
    [
    'nuxt-fontawesome', {
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]
    }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
	
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },

  // Netlify reads a 404.html, Nuxt will load as an SPA
  generate: {
    fallback: '404.html',
    // routes: ['/projects/1'],
    routes
    
  },
  		
  // This is where you configure your settings for the new plugin
  prismic: {
    endpoint: 'https://cholo-portfolio.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    // htmlSerializer: '@/plugins/html-serializer',
    preview: true
  },
}
