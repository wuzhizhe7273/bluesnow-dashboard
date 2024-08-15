import {HttpResponse, ResponseResolver } from "msw";

type HighOrderResolver=(resolver:ResponseResolver)=>ResponseResolver;

export const withAuth:HighOrderResolver=(resolver)=>{
    return (input)=>{
        const {request}=input
        if(!request.headers.get('Authorization')){
            return new HttpResponse(null,{status:401})
        }
        return resolver(input)
    }
}