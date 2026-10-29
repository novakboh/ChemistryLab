import './ElementCard.css';

type ElementCardProps = {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;

  backgroundColor: string;
  borderColor: string;
  textColor: string;
  categoryBackground: string;
  bottomBackground: string;
};

function ElementCard({
  atomicNumber,
  symbol,
  name,
  atomicMass,
  category,
  backgroundColor,
  borderColor,
  textColor,
  categoryBackground,
  bottomBackground,
}: ElementCardProps) {
  return (
    <div
      className="element-card"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
    >
      <div className="element-card-top">
        <span className="element-card-number" style={{ color: textColor }}>
          {atomicNumber}
        </span>

        <h2 className="element-card-symbol">{symbol}</h2>

        <h3 className="element-card-name">{name}</h3>

        <p className="element-card-mass">{atomicMass}</p>

        <span
          className="element-card-category"
          style={{
            color: textColor,
            backgroundColor: categoryBackground,
          }}
        >
          {category}
        </span>
      </div>

      <div
        className="element-card-bottom"
        style={{ backgroundColor: bottomBackground }}
      >
        <button
          className="element-card-details"
        >
          Детальніше
        </button>

        <button
          className="element-card-favorite"
        >
          <img src="/src/assets/heart_stroke.png" alt="" />
          <span>Додати до обраного</span>
        </button>
      </div>
    </div>
  );
}

export default ElementCard;