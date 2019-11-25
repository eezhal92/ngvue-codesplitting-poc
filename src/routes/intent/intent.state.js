import angular from 'angular';


export default angular.module('app.intent', ['ui.router']).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('intent', {
      url: '/intent',
      views: {
        'container@': {
          controllerAs: 'vm',
          template: `
            <vue-component name="Intent"></vue-component>
          `,
          resolve: {
            loadIntentController:
              [
                '$q',
                '$ocLazyLoad',
                ($q, $ocLazyLoad) => {
                  return $q((resolve) => {
                    require.ensure([], () => {
                      let module = require('./intent.controller');
                      console.log('jj')
                      $ocLazyLoad.load({ name: module.name });
                      resolve(module.controller)
                    });
                  })
                }
              ]
          }
        }
      }
    });
  }
]).name;
