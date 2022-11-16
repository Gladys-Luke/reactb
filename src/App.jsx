import {useState} from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-800 h-[100vh] flex flex-col justify-center items-center gap-20">
      <div className='text-7xl rounded-full text-center bg-white p-7'>
        {count}
      </div>
     <div className='flex flex-col justify-center items-center gap-6 sm:flex-row'>
     <button className='bg-sky-500 hover:bg-sky-700 text-white w-48 rounded-md shadow-2xl p-2' onClick={() => setCount(count + 1)}>Add to count</button>
     <button className='bg-red-500 hover:bg-sky-700 text-white w-48 rounded-md shadow-2xl p-2' onClick={() => setCount(count - 1)}>Reduce from count</button>
     </div>
      
    </div>
  );
}

export default App;
