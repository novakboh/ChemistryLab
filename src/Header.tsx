import './Header.css';

type HeaderProps = {
  favoritesCount: number;
};

function Header({ favoritesCount}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-brand">
        <img src="/src/assets/react.svg" alt="React" className="header-logo" />

        <div className="header-title">
          <h1>Хімічна лабораторія</h1>
          <p>Досліджуй світ елементів</p>
        </div>
      </div>

      <div className="header-actions">
        <div className="header-favorites">
          <img
            src="/src/assets/heart_red.png"
            alt="Обране"
            className="header-heart"
          />
          <span>Обрано елементів: {favoritesCount}</span>
        </div>

        <button
          className="header-clear-button"
        >
          <img src="/src/assets/bin.png" alt="" />
          <span>Очистити обране</span>
        </button>
      </div>
    </header>
  );
}

export default Header;