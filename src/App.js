import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div className="className='max-w-[1440px] mx-auto overflow-hidden'">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
