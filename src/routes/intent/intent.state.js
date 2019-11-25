import angular from 'angular';

const loadIntentControllerHandler = [
  () => {
    return import('./intent.controller')
  }
];

const views = {
  'container@': {
    controllerAs: 'vm',
    template: `<vue-component name="Intent"></vue-component>`,
    resolve: {
      loadIntentController: loadIntentControllerHandler
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
