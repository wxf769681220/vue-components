const WxHome = () => import('views/wx-home')

const routes = [
  {
    path: '/',
    redirect: '/wx-home'
  },
  {
    path: '/wx-home',
    component: WxHome
  }
]

export default routes
