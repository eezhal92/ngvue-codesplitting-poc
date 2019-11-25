import angular from 'angular';

const views = {
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
                let m = require('./intent.controller').default;
                $ocLazyLoad.load({ name: m.name });
                resolve(m.controller)
              });
            })
          }
        ]
    }
  }
};

export default angular.module('app.intent', ['ui.router']).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('intent', {
      url: '/intent',
      views,
    });
  }
]).name;
