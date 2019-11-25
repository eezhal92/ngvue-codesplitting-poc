import angular from 'angular';
import 'oclazyload';
import 'angular-ui-router';
import 'ngVue';
import 'ngVue/build/plugins';

import accountRoutes from './routes/account/account.state';
import intentRoutes from './routes/intent/intent.state';

import AccountPage from './routes/account/Account.vue';
import IntentPage from './routes/intent/Intent.vue';

angular
  .module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngVue',
    'ngVue.plugins',

    // routes
    accountRoutes,
    intentRoutes
  ])
  .value('Account', AccountPage)
  .value('Intent', IntentPage)
