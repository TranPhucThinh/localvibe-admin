import { AppProvider } from '@/provider/app.provider'
import useRouteElements from '@/routes/useRouteElements'

const App = () => {
  const routeElements = useRouteElements()

  return <AppProvider>{routeElements}</AppProvider>
}

export default App
