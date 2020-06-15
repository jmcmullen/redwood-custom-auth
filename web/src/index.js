import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Client as Styletron } from 'styletron-engine-atomic'
import { AuthProvider } from '@redwoodjs/auth'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

import Routes from 'src/Routes'
import authClient from 'src/lib/auth'

import './scaffold.css'
import './index.css'

const engine = new Styletron()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    {/* <AuthProvider client={authClient} type="custom"> */}
    <RedwoodProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Routes />
        </BaseProvider>
      </StyletronProvider>
    </RedwoodProvider>
    {/* </AuthProvider> */}
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
