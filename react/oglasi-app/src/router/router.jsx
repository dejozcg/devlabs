import { AppLayout } from '../layout';
import { NoviOglas } from '../pages/noviOglas';
import { HomePage } from '../pages/home';
import { UsersPage } from '../pages/users';


export const appRoutes = [
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        exact: true,
      },
      {
        path: 'novi',
        children: [
          {
            index: true,
            element: <NoviOglas />,
            exact: true,
          },
          { path: 'team', element: <h1>Team page</h1> },
        ],
      },
      { path: 'users/:id', element: <UsersPage /> },
      { path: '*', element: <h1>404 Not found</h1> },
    ],
  },
];
