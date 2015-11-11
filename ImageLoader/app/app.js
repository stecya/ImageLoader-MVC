var app = angular.module('app', []);

app.controller('homeCtrl', function () {

    var vm = this;

    vm.newUrl = 'http://a5.mzstatic.com/us/r30/Purple7/v4/ab/af/3e/abaf3e37-3582-80d0-c489-5fd91ae3b145/icon256.png';
    
    vm.addImage = function () {
        vm.images.push({ url: vm.newUrl, site: getDomain(vm.newUrl) });
    }

    vm.removeImage = function (image) {
        var index = vm.images.indexOf(image);
        vm.images.splice(index, 1);
    }

    vm.images = [
        {
            site: 'static-s.aa-cdn.net',
            url: 'https://static-s.aa-cdn.net/img/ios/738947690/7a027b65ba509a84dea7dbe58e22cde5?v=1'
        },
        {
            site: 'pbs.twimg.com',
            url: 'https://pbs.twimg.com/profile_images/626824575028887552/hZDA-xsr.jpg'
        },
        {
            site: 'file-extensions.org',
            url: 'http://www.file-extensions.org/imgs/articles/4/322/live-wallpaper-icon.png'
        }
    ];

    getDomain = function (url) {
        var a = document.createElement('a');
        a.href = url;

        var domain = a.hostname;;
        a.remove();

        return domain;
    }
});