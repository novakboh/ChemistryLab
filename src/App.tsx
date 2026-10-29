import './App.css'
import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'
import ElementList from './ElementList.tsx'

function App() {
  return (
    <>
      <Header
        favoritesCount={0}
      />
      <main className="main-layout">
          <Sidebar />
          <ElementList />
      </main>
    </>
  )
}

export default App