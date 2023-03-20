import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'
import MantineUI from './context/mantine'
import { socket, SocketContext } from './context/socket'

const el = document.getElementById('app')

ReactDOM.render(
  <SocketContext.Provider value={socket}>
    <MantineUI>
      <InertiaApp
        initialPage={JSON.parse(el.dataset.page)}
        initialComponent={null}
        resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)}
      />
    </MantineUI>
  </SocketContext.Provider>,
  el
)
