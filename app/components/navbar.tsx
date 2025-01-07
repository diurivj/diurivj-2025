import { NavLink } from 'react-router'

export function Navbar() {
  const links = [
    { name: 'Blog', to: '/blog' },
    { name: 'Cursos', to: '/courses' }
  ]

  return (
    <header className='container mx-auto px-4 lg:px-0'>
      <nav className='flex items-center justify-between py-4 lg:py-7'>
        <NavLink
          to='/home'
          style={{ viewTransitionName: 'logo' }}
          className={({ isActive }) =>
            `font-borel text-xl ${isActive ? 'underline underline-offset-4' : ''}`
          }
        >
          Diurivj
        </NavLink>

        <div className='flex items-center justify-center gap-x-10'>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'font-medium underline underline-offset-4 transition-all'
                  : ''
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
