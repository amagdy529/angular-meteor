import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../collections/parties';

// import { name as PartiesList } from '../imports/ui/components/partiesList/partiesList';

import { name as Socially } from '../imports/ui/components/socially/socially';


angular.module('socially', [
    angularMeteor,
    PartiesList
  ]);
  // .component('partiesList', {
  //   templateUrl: 'client/partiesList.html',
  //   controllerAs: 'partiesList',
  //   controller($scope, $reactive) {
  //     'ngInject';
  //
  //     $reactive(this).attach($scope);
  //
  //     this.helpers({
  //       parties() {
  //         return Parties.find({});
  //       }
  //     });
  //   }
  // });
