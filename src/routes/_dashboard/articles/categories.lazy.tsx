import { PageLayout } from '@/layouts/page-layout'
import { createLazyFileRoute } from '@tanstack/react-router'

const CategoriesPage=()=>{
  return (
    <PageLayout pageHeader={[<div>分类</div>]}>
      <div>
      Hello /_dashboard/articles/tags!
      </div>
    </PageLayout>
  )
}

export const Route = createLazyFileRoute('/_dashboard/articles/categories')({
  component: CategoriesPage
})