import { BrowserRouter, Routes, Route } from "react-router-dom"
import router from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => {
          const Element = route.element;
          return (
            <Route 
              key={route.path}
              path={route.path}
              element={<Element />}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
