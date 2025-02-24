import KenjimPoako from './Components/KenjimPoako';
import DefaultLayout from './Components/DefaultLayout';    

const routes = [
  {
    path: "",
    element: DefaultLayout,
    children: [
      {
        path: "test",
        element: KenjimPoako,
      },
    ],
  },
];

export default routes;
