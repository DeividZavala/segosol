(function () {

    var producto = {
        templateUrl:'/app/components/productos/productos.html',
        controller:productosController
    }

    function productosController(){
        var productos = this;
        productos.items = items;
    }
    var items=[
        {
            nombre:'solar1',
            descripcion:'Hola yo soy panel solar 1',
            imagen:'http://www.fancyicons.com/free-icons/232/industry/png/256/solar_panel_256.png'
        },
        {
            nombre:'solar2',
            descripcion:'Hola yo soy panel solar 2',
            imagen:'http://www.lawebdelasenergiasrenovables.com/green-energy-apps/common-images/apps-icons/wind-power.png'
        },
        {
            nombre:'solar3',
            descripcion:'Hola yo soy panel solar 4',
            imagen:'https://assets.lwsite.com.br/uploads/widget_image/image/371/844/371844/icon_idea.png'
        },
        {
            nombre:'solar4',
            descripcion:'Hola yo soy panel solar 1',
            imagen:'http://www.fancyicons.com/free-icons/232/industry/png/256/solar_panel_256.png'
        },
        {
            nombre:'solar5',
            descripcion:'Hola yo soy panel solar 2',
            imagen:'http://www.lawebdelasenergiasrenovables.com/green-energy-apps/common-images/apps-icons/wind-power.png'
        },
        {
            nombre:'solar6',
            descripcion:'Hola yo soy panel solar 4',
            imagen:'https://assets.lwsite.com.br/uploads/widget_image/image/371/844/371844/icon_idea.png'
        },
        {
            nombre:'solar7',
            descripcion:'Hola yo soy panel solar 1',
            imagen:'http://www.fancyicons.com/free-icons/232/industry/png/256/solar_panel_256.png'
        },
        {
            nombre:'solar8',
            descripcion:'Hola yo soy panel solar 2',
            imagen:'http://www.lawebdelasenergiasrenovables.com/green-energy-apps/common-images/apps-icons/wind-power.png'
        },
        {
            nombre:'solar9',
            descripcion:'Hola yo soy panel solar 4',
            imagen:'https://assets.lwsite.com.br/uploads/widget_image/image/371/844/371844/icon_idea.png'
        },
        
    ]


    angular
        .module('segosol')
        .component('productosComponent',producto);
})();