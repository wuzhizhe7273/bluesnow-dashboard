import {http, HttpResponse}from 'msw'
import {faker} from '@faker-js/faker';
import { userHandlers } from './user';


export const handlers=[
    http.get(`/user`,()=>{
        return HttpResponse.json({
            id: faker.string.uuid(),
            firstName:faker.person.firstName('male'),
            lastName: faker.person.lastName('male')
        })
    }),
    http.post(`/user/login`,()=>{

    }),
    ...userHandlers
]