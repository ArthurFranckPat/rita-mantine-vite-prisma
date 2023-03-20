import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../components/Layout'
import { Admin, Authenticated, Guest } from '../lib/authorization'
import { IPageProps } from '../lib/types'
import useTitle from '../lib/use-title'

const Index: React.FC = () => {
  const {
    props: { user, authenticated },
  } = usePage<IPageProps>()
  authenticated ? useTitle(user.name) : useTitle('Home')
  return (
    <Layout>
      <div className="flex items-center justify-center h-full w-full px-5">
        <Guest>
          <div>Guest Links</div>
        </Guest>

        <Authenticated>
          <div>Authenticated Links</div>
        </Authenticated>
      </div>
    </Layout>
  )
}

export default Index
