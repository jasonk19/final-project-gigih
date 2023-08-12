import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import VideoDetailPage from "../pages/VideoDetailPage";

const router = [
  {
    path: '/signin',
    element: SignInPage
  },
  {
    path: '/signup',
    element: SignUpPage
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