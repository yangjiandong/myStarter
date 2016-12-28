import NotFound from './pages/404'
import Home from './pages/Home'
import Hello from './components/Hello.vue'
import TestComponent from './pages/TestMyComponent.vue'

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/hello',
  component: Hello
}, {
  path: '/testComponent',
  component: TestComponent
}, {
  path: '*',
  component: NotFound
}]

export default routes
