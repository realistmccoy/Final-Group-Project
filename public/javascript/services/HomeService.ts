"use strict";

namespace app.Services {

  export class homeService {

    public beerUserHomeResource;
    public beerUserDetailsResource;
    public BeerResource;

    public searchBeer(beer) {
      return this.BeerResource.query({id:"beer", name: beer.name }).$promise;
    }

    public deleteBeer(beerId){
      return this.BeerResource.delete({ _id: beerId }).$promise;
    }

    public updateBeer(beer){
      return this.BeerResource.update({ id: beer._id }, beer).$promise;
    }

    public getBrew(brew) {
      return this.BeerResource.get({ id:brew});
    };

    public getAll() {
      return this.BeerResource.query();
    };

    public getBeer(beerId){
      var q = this.$q.defer();
      this.$http.get('/api/v1/beer/details/'+ beerId).then(function(res){
        q.resolve(res.data);
      }, function(err){
        q.reject(err);
      });
      return q.promise;
    }

    public saveBeer(beer) {
      return this.BeerResource.save(beer).$promise;
    };

    public getUserHomeBeers(){
      return this.beerUserHomeResource.query();
    }

    public getUserDetailsBeers(userId){
      return this.beerUserDetailsResource.query();
    }

    constructor(
      private $resource: ng.resource.IResourceService,
      private $http: ng.IHttpService,
      private $q: ng.IQService
    ) {
      this.BeerResource = $resource('/api/v1/beer/:id', null,
      {
          "update": { method: "PUT"}
      });
      this.beerUserHomeResource = $resource('/api/v1/beer/userHomeBeers')
      this.beerUserDetailsResource = $resource('/api/v1/beer/userDetailsBeers/:id')
    };
  };
  angular.module('app').service('homeService', homeService);
};
