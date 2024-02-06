import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from '@/views/Home';
export const routes = [
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/', component: Home}
]