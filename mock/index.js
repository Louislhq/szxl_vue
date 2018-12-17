import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {Users} from './data/users'
import {Goods} from './data/goods'

export default {
    init(){
        let mock = new MockAdapter(axios)
        mock.onGet('/users').reply(200,{
            code: 1001,msg:"请求成功",Users
        });
        mock.onGet('/goods').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200,{
                        goods: Goods,
                        config: config.params
                    }])
                },500)
            })
        })
    }
}