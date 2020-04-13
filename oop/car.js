class Car{

    constructor(engine,color,name,type,maker){
        this._engine = engine;
        this._color = color;
        this._name = name;
        this._type = type;
        this._maker = maker;
    }
    
}

let prius = new Car(
    'ハイブリッド',
    '赤',
    'プリウス',
    'セダン',
    'トヨタ'
);