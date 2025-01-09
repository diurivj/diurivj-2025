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
    route('/payment-info', 'routes/_payment-info.tsx'),
    route('/*', 'routes/_not-found.tsx')
  ]),
  route('/courses/wd2', 'routes/courses/_wd2.tsx')
] satisfies RouteConfig
