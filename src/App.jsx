// # USE STATE EXAMPLE
// import { useState } from 'react';



// # ASSETS IMPORT EXAMPLE
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import favicon from '/favicon.jpg';



function App() {
  // # USE STATE EXAMPLE
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1 className='text-center'>
              {import.meta.env.VITE_APP_NAME}
              </h1>
          </div>
        </div>
      </div>
    </>
  );
};



export default App;