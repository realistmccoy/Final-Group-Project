'use strict'

namespace app.Directives {

  export function myModal() {

    return {
      template: '<div class="modal fade">' +
      '<div class="modal-dialog">' +
      '<div class="modal-content">' +
      '<div class="modal-header">' +
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
      '<h4 class="modal-title">{{ title }}</h4>' +
      '</div>' +
      '<div class="modal-body" ng-transclude></div>' +
      '</div>' +
      '</div>' +
      '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;
        console.log(scope.vm)
        scope.$watch(attrs.visible, function(value){
          if(value == true)
          $(element).modal('show');
          else
          $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.vm.showModal = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.vm.showModal = false;
          });
        });
      }
    };
  };

  angular.module('app').directive('myModal', myModal)
};
