import './App.css'
import { TestScreen, ProjectScreen, AppScreen } from './screens';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppScreen />}>
        <Route path='' element={<ProjectScreen/>} />
      </Route>
      <Route path="/test" element={<TestScreen/>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App;