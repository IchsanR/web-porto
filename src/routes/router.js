import {BrowserRouter, Routes, Route} from "react-router-dom"
import {createBrowserHistory} from "history"
import routes from "./path"


const Router = () => {
  const history = createBrowserHistory()

  return (
    <BrowserRouter>
      <Routes>
        <Route history={history} path="/">
          {routes.map((item, i) => (
            <Route index element={item.elements} path={item.path} key={i} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router