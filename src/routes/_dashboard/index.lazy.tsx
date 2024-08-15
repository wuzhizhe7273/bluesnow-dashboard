import { createLazyFileRoute } from '@tanstack/react-router'

const Index=()=>{
  return (
    <div>Hello /_dashboard/!</div>
  )
}

export const Route = createLazyFileRoute('/_dashboard/')({
  component:Index
})
