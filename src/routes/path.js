import Root from "../pages";
import Home from "../pages/Home";

const routes = [
  {
    elements: <Root children={<Home />} />,
    path: "/"
  },
]

export default routes