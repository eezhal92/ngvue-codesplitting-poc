import angular from 'angular';
import 'angular-ui-router';
import 'ngVue';
import 'ngVue/build/plugins';

import accountRoutes from './routes/account/account.state';
import intentRoutes from './routes/intent/intent.state';

import AccountPage from './routes/account/Account.vue';

angular
  .module('app', [
    'ui.router',
    'ngVue',
    'ngVue.plugins',

    // routes
    accountRoutes,
    intentRoutes
  ])
  .value('Account', AccountPage)
  .value('Intent', () => import('./routes/intent/Intent.vue'))
  .run(run)


function run($state) {
  $state.go('account');
}

run.$inject = ['$state']
