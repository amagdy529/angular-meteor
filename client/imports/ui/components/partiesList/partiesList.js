import angular from 'angular';
import angularMeteor from 'angular-meteor';

// import templateUrl from './partiesList.html';

import template from './partiesList.html';


class PartiesList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      parties() {
        return Parties.find({});
      }
    });
  }
}

const name = 'partiesList';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  // templateUrl: `imports/ui/components/${name}/${name}.html`,
  template ,
  controllerAs: name,
  controller: PartiesList
});
