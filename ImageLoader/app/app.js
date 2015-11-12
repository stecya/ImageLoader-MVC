var app = angular.module('app', []);

app.factory('ImagesService', ['$http', function ($http) {
    var apiBase = '/api/Images';
    var ImagesService = {};

    ImagesService.getImages = function () {
        return $http.get(apiBase);
    };

    ImagesService.addImage = function (url) {
        var image = { "Url": url };
        return $http.post(apiBase, JSON.stringify(image));
    };

    ImagesService.removeImage = function (id) {
        return $http.delete(apiBase + "/" + id);
    };

    return ImagesService; 
}]);

app.controller('homeCtrl', function ($scope,ImagesService) {

    var vm = this;

    vm.newUrl = 'http://a5.mzstatic.com/us/r30/Purple7/v4/ab/af/3e/abaf3e37-3582-80d0-c489-5fd91ae3b145/icon256.png';

    vm.addImage = function () {
        ImagesService.addImage(vm.newUrl).success(function(result) {
            vm.images.push({ url: result.Url, site: getDomain(result.Url), id: result.Id });
        });
    }

    vm.removeImage = function (image) {
        ImagesService.removeImage(image.id).success(function (result) {
            var index = vm.images.indexOf(image);
            vm.images.splice(index, 1);
        });
    }

    vm.getImages = function () {
        vm.images = [];
        ImagesService.getImages().success(function (result) {
            result.forEach(function (value) {
                vm.images.push({ url: value.Url, site: getDomain(value.Url), id: value.Id });
            });
        });
    }

    vm.getImages();

    getDomain = function (url) {
        var a = document.createElement('a');
        a.href = url;

        var domain = a.hostname;;
        a.remove();

        return domain;
    }
});