import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./app/components/layouts/AppLayout";
import Home from "./app/pages/Home";
import store from "./app/redux/store";
import { getNewsSource } from "./app/redux/actions/news";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { appRoutes } from "./app/utils/routes";

function App() {
  useEffect(() => {
    store.dispatch(getNewsSource());
  }, []);
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              {appRoutes.map((route, idx) => {
                return route.element ? (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.element />}
                  />
                ) : null;
              })}
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
