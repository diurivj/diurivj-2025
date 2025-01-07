import {
  type RouteConfig,
  index,
  layout,
  route
} from '@react-router/dev/routes'

export default [
  index('routes/_index.tsx'),
  route('/robots.txt', 'routes/_robots.tsx'),
  layout('routes/_layout.tsx', [
    route('/home', 'routes/_home.tsx'),
    route('/blog', 'routes/_blog.tsx'),
    route('/courses', 'routes/_courses.tsx'),
    route('/*', 'routes/_not-found.tsx')
  ])
] satisfies RouteConfig
