
var car = {
    make : 'volvo',
    speed : 1600,
    engine : { 
        size:4.0,
        make:'bmw',
        fuel:'diesel',
        pistons:[{ maker:'chevrolet'}, {maker: 'general motor'}]
    },
    drive: function(){
        return 'dive'
    }
};

var array = [
    'string', 
    100,
    ['embed', 200],
    { car: 'ford'},
    function(){
       { return 'dive'; }
    }
];