import angular from 'angular';

const controller = [
  function () {
    const vm = this;

    vm.myName = "Harold";
  }
]

export default angular.module('app.main', ['ui.router']).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('account', {
      url: '/account',
      views: {
        'container@': {
          controllerAs: 'vm',
          template: `
            <vue-component
              name="Account"
              v-props-name="vm.myName"
            ></vue-component>
          `,
          controller: controller
        }
      }
    });
  }
]).name;
