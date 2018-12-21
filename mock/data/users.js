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
const Users = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      email: '123456@qq.com',
      name: '搬砖者'
    },
    {
      id: 2,
      username: 'lytton',
      password: '123456',
      email: 'yyyyy@163.com',
      name: '混子'
    }
  ]
export {Users}