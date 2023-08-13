import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import router from "./routes"
import { UserContext } from './context';


function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
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
    </UserContext.Provider>
  )
}

export default App
