import angular from 'angular';
import 'angular-ui-router';
import 'ngVue';
import 'ngVue/build/plugins';

import accountRoutes from './routes/account/account.state';
import intentRoutes from './routes/intent/intent.state';

angular
  .module('app', [
    'ui.router',
    'ngVue',
    'ngVue.plugins',

    // routes
    accountRoutes,
    intentRoutes
  ])
  .value('Account', () => import(/* webpackChunkName: "account" */ './routes/account/Account.vue'))
  .value('Intent', () => import(/* webpackChunkName: "intent" */ './routes/intent/Intent.vue'))
  .run(run)


function run($state) {
  $state.go('account');
}

run.$inject = ['$state']
