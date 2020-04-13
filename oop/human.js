class human{
    constructor(name,hp,mp,weapon){
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._weapon = weapon;
    }
    attack(){
        console.log(this._name,"は",this._weapon,'で攻撃した。');
    }
}

class monster{
    constructor(name,hp,mp,weapon){
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._weapon = weapon;
    }
    attack(){
        console.log(this._name,'は',this._weapon,'で攻撃した。');
    }
}

class Yuusya extends human{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
}

class Wizard extends human{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    spell(){
        console.log(this._name,"は呪文を唱えた");
    }
}

class Cleric extends human{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    heal(){
        console.log(this._name,"は回復した");
    }
}

class Berseker extends human{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    beast(){
        console.log(this._name,"は獣化した");
    }
}

class slime extends monster{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
}

class Ork extends monster{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    escape(){
        console.log(this._name,"は逃げた");
    }
}

class LastBoss extends monster{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    revive(){
        console.log(this._name,"は蘇った");
    }
}

let a = new Berseker("バーサーカー",100,100,"剣");
a.attack();