import { ErrorBag, Errors, Page, PageProps } from '@inertiajs/inertia'

export interface IUser {
  id: number
  name: string
  email: string
  admin: boolean
  created_at: string
  updated_at: string
  image?: string
}

export interface IPageProps extends Page<PageProps> {
  props: {
    errors: Errors & ErrorBag
    authenticated: boolean
    user: IUser | null
    flashMessages: any
  }
}
