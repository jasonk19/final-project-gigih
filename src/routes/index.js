import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import VideoDetailPage from "../pages/VideoDetailPage";

const router = [
  {
    path: '/signin',
    element: SignInPage
  },
  {
    path: '/detail',
    element: VideoDetailPage
  },
  {
    path: '/',
    element: HomePage
  }
]

export default router;