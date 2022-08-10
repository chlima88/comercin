Add capacitor dependencies to the project

```
yarn add @capacitor/core @capacitor/cli
yarn cap init
```

Edit `capacitor.config.json` file and change `"webDir": "www"` to `"webDir": "dist"`

```
yarn build
yarn add -D @capacitor/android @capacitor/cli @capacitor/core @capacitor/geolocation
yarn cap add android
yarn cap run android
```

Add `@ionic` to your application
```
yarn add -D vue-router @ionic/vue @ionic/vue-router
```

Create this file `@/theme/variables.css` and add the content from [this url](https://gist.githubusercontent.com/chlima88/138928b50570a64f2c455adc73ffc20f/raw/e8b92f6ff0c407da3ecc497ac28d73430376ac0f/ionic-variables.css) 


Add the following lines to the `@/main.js` file
```
import { IonicVue } from '@ionic/vue';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables - copied from existing project */
import './theme/variables.css';

// be sure to add the use(IonicVue)
createApp(App).use(IonicVue).mount('#app')
```

