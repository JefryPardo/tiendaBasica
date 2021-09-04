let miApp = angular.module("miAplicacion",[]);
miApp.controller ("TiendaController", function($scope){
    $scope.listaItems = [
        {tipo: 'smartphone', marca: 'Xiaomi',unidades: 5, modelo: 'Redmi note 10', valor: 211, img: 'https://i.blogs.es/3a3421/xiaomi-redmi-note-10-0/1366_2000.jpeg'},
        {tipo: 'Tablet', marca: 'Apple',unidades: 15, modelo: 'iPad 10,2', valor: 554, img: 'https://falabella.scene7.com/is/image/FalabellaCO/9387133_1?wid=800&hei=800&qlt=70'},
        {tipo: 'iPod Touch', marca: 'Apple',unidades: 2, modelo: 'iPod Touch 7', valor: 712, img: 'https://http2.mlstatic.com/D_NQ_NP_605653-MCO32086566760_092019-O.jpg'},
        {tipo: 'smartphone', marca: 'samsung',unidades: 0, modelo: 'samsung a21s', valor: 192, img: 'https://images.samsung.com/is/image/samsung/es-galaxy-a21s-sm-a217fzwoeub-thumb-330x330-262755627?$480_480_PNG$'}
    ];
});


miApp.filter('euroFormat', function () {
    return function (input) {
        return input*0.84;
    };
});