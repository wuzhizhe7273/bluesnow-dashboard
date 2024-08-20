import { PageLayout } from '@/layouts/page-layout'
import { createLazyFileRoute } from '@tanstack/react-router'

const TagsPage=()=>{
  return (
    <PageLayout pageHeader={[
      <div>标签</div>
    ]}>
      <div>
      Hello /_dashboard/articles/tags!
      </div>
    </PageLayout>
  )
}

export const Route = createLazyFileRoute('/_dashboard/articles/tags')({
  component: TagsPage
})