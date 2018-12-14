import Mock from 'mockjs'
const Random = Mock.Random;

const Goods = [];
for(let i=0;i<10;i++){
    Goods.push(Mock.mock({
        id: Random.integer(60,100),
        desc: Random.cparagraph(10,20),
        img: Random.image('200x100', '#4A7BF7', i)
    }))
}

export {Goods}