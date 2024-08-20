import { Button } from '@/components/ui/button'
import { PageLayout } from '@/layouts/page-layout'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { CirclePlus, Network, Tags } from 'lucide-react'

const PageArticle = () => {
  return (
    <PageLayout
      pageHeader={
        [
          <div>文章</div>,
          <div className='flex-1 w-full'></div>,
          <Button variant={'outline'} size={'sm'} asChild className='flex gap-1'><Link to='/articles/categories'> <Network size={14}/> 分类</Link></Button>,
          <Button variant={'outline'} size={'sm'}  asChild className='flex gap-1'><Link to='/articles/tags'><Tags size={18}/> 标签</Link></Button>,
          <Button variant={'default'} size={'lg'} className='flex gap-2' asChild><Link to='/articles/editor'><CirclePlus/>新建</Link></Button>
        ]
      }
    >
      <>
        test
      </>
    </PageLayout>
  )
}

export const Route = createLazyFileRoute('/_dashboard/articles/')({
  component: PageArticle
})
