import { AppShell, Button, Header, Menu, Text } from '@mantine/core'
import * as React from 'react'
import { SwitchToggle } from './ColorSwitcher'
import {
  IconArrowsLeftRight,
  IconBrandYoutube,
  IconCheck,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react'
import { Authenticated, Guest } from '../lib/authorization'
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react'
import { IPageProps } from '../lib/types'
import { notifications } from '@mantine/notifications'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const {
    props: { user, flashMessages },
  } = usePage<IPageProps>()

  if (flashMessages?.success) {
    React.useEffect(() => {
      notifications.show({
        message: `Welcome back ${user.name}`,
        title: `Successful Login`,
        icon: <IconCheck size="1.1rem" />,
        color: 'teal',
        withCloseButton: true,
        autoClose: 4000,
        styles: (theme) => ({
          root: {
            'backgroundColor': theme.colors.dark[6],
            'borderColor': theme.colors.pink[6],

            '&::before': { backgroundColor: theme.white },
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            'color': theme.white,
            '&:hover': { backgroundColor: theme.colors.dark[7] },
          },
        }),
      })
    }, [])
  }

  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Header content */}

          <span className="text-2xl">listd.tv</span>
          <div className="flex justify-center items-center p-1 gap-6">
            <SwitchToggle />
            <Authenticated>
              <div className="flex justify-center items-center gap-2">
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button size="md" className="flex justify-center items-center gap-2">
                      <img src={user?.image} alt="" className="h-8 w-8 rounded-full" />
                      <span className="ml-1 text-md font-bold">{user?.name}</span>
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                    <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                    <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                    <Menu.Item
                      icon={<IconSearch size={14} />}
                      rightSection={
                        <Text size="xs" color="dimmed">
                          ⌘K
                        </Text>
                      }
                    >
                      Search
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                    <Menu.Item color="red" icon={<IconTrash size={14} />}>
                      Delete my account
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
              <InertiaLink
                href="/auth/logout"
                className="bg-pink-800 text-white cursor-pointer rounded-sm p-2 px-8 flex items-center justify-center hover:opacity-90"
              >
                Logout
              </InertiaLink>
            </Authenticated>
            <Guest>
              <Link
                className="bg-pink-800 text-white cursor-pointer rounded-sm p-2 px-8 flex items-center justify-center hover:opacity-90"
                href="/auth/login"
              >
                Login
              </Link>
              <Link
                className="bg-white text-pink-800  cursor-pointer rounded-sm p-2 px-8 flex items-center justify-center hover:opacity-90"
                href="/auth/login"
              >
                Register
              </Link>
            </Guest>
          </div>
        </Header>
      }
      styles={(theme) => ({
        root: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[8],
        },
      })}
    >
      {/* Your application here */}
      <main className="mx-auto pt-2 flex justify-center">{children}</main>
    </AppShell>
  )
}

export default Layout
