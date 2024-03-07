import Root from "../pages";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

const routes = [
  {
    elements: <Root children={<Home />} />,
    path: "/"
  },
  {
    elements: <Root children={<Resume />} />,
    path: "resume"
  },
]

export default routes