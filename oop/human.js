class human{
    constructor(name,hp,mp,weapon){
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._weapon = weapon;
    }
    get attack(){
        console.log('$(this_name)は$(this_weapon)で攻撃した。');
    }
}

class monster{
    constructor(name,hp,mp,weapon){
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._weapon = weapon;
    }
    get attack(){
        console.log('$(this_name)は$(this_weapon)で攻撃した。');
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
    get spell(){
        console.log("$(this_name)は呪文を唱えた");
    }
}

class Cleric extends numan{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    get heal(){
        console.log("$(this_name)は回復した");
    }
}

class Berseker extends human{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    get beast(){
        console.log("$(this_name)は獣化した");
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
    get escape(){
        console.log("$(this_name)は逃げた");
    }
}

class LastBoss extends monster{
    constructor(name,hp,mp,weapon){
        super(name,hp,mp,weapon);
    }
    get revive(name){
        console.log("$(this._name)は蘇った");
    }
}