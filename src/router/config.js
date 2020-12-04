const Scroll = () => import('views/scroll')

const routes = [
  {
    path: '/',
    redirect: '/scroll'
  },
  {
    path: '/scroll',
    component: Scroll
  }
]

export default routes
