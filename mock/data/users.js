import Mock from 'mockjs'
const Random = Mock.Random;

const Users = [];
for (let i=0;i<100; i++){
    Users.push(Mock.mock({
        id: Random.integer(60,100),
        time: Random.datetime(),
        desc: Random.cparagraph()
    }))
}

export {Users}