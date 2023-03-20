import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import axios from 'axios'
import React from 'react'

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  async function handleToggle() {
    //   toggleColorScheme()
    //   axios.post('/colorscheme', { colorscheme: colorScheme === 'dark' ? 'light' : 'dark' })
  }

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={handleToggle}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
      </ActionIcon>
    </Group>
  )
}
