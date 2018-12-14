const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

import {Goods} from './data/goods'
import {Users} from './data/users'
import { resolve } from 'path';
import { rejects } from 'assert';

export default {
    init() {
        const mock = new MockAdapter(axios)
        mock.onGet('/users').reply(200, {
            code:1001,
            msg:'请求成功',
            Users
        })
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