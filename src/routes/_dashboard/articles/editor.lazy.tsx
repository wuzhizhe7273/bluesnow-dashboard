import { PageLayout } from '@/layouts/page-layout'
import { createLazyFileRoute } from '@tanstack/react-router'

const EditorPage=()=>{
  return (
    <PageLayout
    pageHeader={[
      <div>编辑文章</div>
    ]}
    >
      <div>
      Hello /_dashboard/articles/editor!
      </div>
    </PageLayout>
  )
}

export const Route = createLazyFileRoute('/_dashboard/articles/editor')({
  component: EditorPage
})