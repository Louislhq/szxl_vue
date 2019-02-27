import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {Users} from './data/users'
// import {Goods} from './data/goods'

export default {
    init(){
        let mock = new MockAdapter(axios)

        //mock sucess request 模拟成功请求
        mock.onGet('/sucess').reply(200, {
            msg: 'success'
        });

        //mock error request 模拟失败请求
        mock.onGet('/error').reply(500, {
            msg: 'failure'
        })

        mock.onPost('/login').reply(config => {
            let {username, password} = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    let hasUser = Users.some(person => {
                        if(person.username === username && person.password === password){
                            user = JSON.parse(JSON.stringify(person));
                            return true
                        }else{
                            return false
                        }
                    });
                    if(hasUser){
                        resolve([200,{code: 200, msg: '登录成功', user}]);
                    } else {
                        resolve([ 200, {code: 500, msg: '账号错误' }]);
                    }
                }, 500);
            })
        });
        
    }
}