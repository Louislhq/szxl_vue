import Mock from 'mockjs'
const Random = Mock.Random;

// const Users = [];
// for (let i=0;i<100; i++){
//     Users.push(Mock.mock({
//         id: Random.integer(60,100),
//         time: Random.datetime(),
//         desc: Random.cparagraph()
//     }))
// }
var Users = Mock.mock({
    // 'list|1-10': [{
    //     'id|123.10': 1.123
    // }]
    name: {
        first: '@email',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    }
})
export {Users}