function getRandom (){
    const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
    const upperChar = lowerChar.toUpperCase();
    const numbers = "0123456789"
    //製作總素材
    let collection = []
    collection = collection.concat([...lowerChar],[...upperChar],[...numbers])
    //隨機抽取
    
    let result = "";
    for (let i = 0; i<5; i++){
        let num = Math.floor(Math.random()*collection.length)
        result += collection[num]
    }
    return result;
}

module.exports = getRandom