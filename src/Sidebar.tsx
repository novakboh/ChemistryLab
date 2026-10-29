import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-search">
        <img src="/src/assets/search.png" alt="" />
        <span>Пошук елемента...</span>
      </div>

      <h3 className="sidebar-heading">Фільтр за категорією</h3>

      <div className="sidebar-categories">
        <button className="category-button category-all">Усі</button>
        <button className="category-button category-metals">Метали</button>
        <button className="category-button category-nonmetals">Неметали</button>
        <button className="category-button category-noble-gases">
          Інертні гази
        </button>
        <button className="category-button category-metalloids">
          Металоїди
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;