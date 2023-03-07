import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { studioTheme } from './ui-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import Home from './Home';
import Form from './Form';

Amplify.configure(awsExports);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/form',
    element: <Form />,
  },
]);

function App() {
  return (
    <AmplifyProvider theme={studioTheme}>
      <RouterProvider router={router} />
    </AmplifyProvider>
  );
}

export default App;
