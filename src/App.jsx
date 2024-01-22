import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Counter from "./componnets/Counter"

function App() {


  return (
    <Provider store={appStore}>
<Counter/>
    </Provider>
  )
}

export default App
