import { Routing } from "/src/pages";
import { withProviders } from "./providers";
import './index.scss'

function App() {
  return (
        <Routing />
  )
}

export default withProviders(App);
