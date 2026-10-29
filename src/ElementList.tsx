import ElementCard from './ElementCard';
import './ElementList.css';

type ChemicalElement = {
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

const elements: ChemicalElement[] = [
  {
    atomicNumber: 1,
    symbol: 'H',
    name: 'Гідроген',
    atomicMass: 1.008,
    category: 'Неметал',
    backgroundColor: '#ffffff',
    borderColor: '#CFEFD9',
    textColor: '#179c4e',
    categoryBackground: '#D7F5E2',
    bottomBackground: '#F5FCF7',
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    name: 'Гелій',
    atomicMass: 4.0026,
    category: 'Інертний газ',
    backgroundColor: '#ffffff',
    borderColor: '#E5DCFC',
    textColor: '#7E4FE4',
    categoryBackground: '#F0ECFD',
    bottomBackground: '#F8F6FE',
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    name: 'Карбон',
    atomicMass: 12.011,
    category: 'Неметал',
    backgroundColor: '#ffffff',
    borderColor: '#CFEFD9',
    textColor: '#179c4e',
    categoryBackground: '#D7F5E2',
    bottomBackground: '#F5FCF7',
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    name: 'Нітроген',
    atomicMass: 14.007,
    category: 'Неметал',
    backgroundColor: '#ffffff',
    borderColor: '#CFEFD9',
    textColor: '#179c4e',
    categoryBackground: '#D7F5E2',
    bottomBackground: '#F5FCF7',
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    name: 'Оксиген',
    atomicMass: 15.999,
    category: 'Неметал',
    backgroundColor: '#ffffff',
    borderColor: '#CFEFD9',
    textColor: '#179c4e',
    categoryBackground: '#D7F5E2',
    bottomBackground: '#F5FCF7',
  },
  {
    atomicNumber: 11,
    symbol: 'Na',
    name: 'Натрій',
    atomicMass: 22.990,
    category: 'Метал',
    backgroundColor: '#ffffff',
    borderColor: '#D7E0ED',
    textColor: '#375986',
    categoryBackground: '#E3EAF4',
    bottomBackground: '#F5F8FC',
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    name: 'Магній',
    atomicMass: 24.305,
    category: 'Метал',
    backgroundColor: '#ffffff',
    borderColor: '#D7E0ED',
    textColor: '#375986',
    categoryBackground: '#E3EAF4',
    bottomBackground: '#F5F8FC',
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    name: 'Алюміній',
    atomicMass: 26.982,
    category: 'Метал',
    backgroundColor: '#ffffff',
    borderColor: '#D7E0ED',
    textColor: '#375986',
    categoryBackground: '#E3EAF4',
    bottomBackground: '#F5F8FC',
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    name: 'Силіцій',
    atomicMass: 28.085,
    category: 'Металоїд',
    backgroundColor: '#ffffff',
    borderColor: '#FFE4CE',
    textColor: '#CA5A1D',
    categoryBackground: '#FEF0E3',
    bottomBackground: '#FFFAF5',
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    name: 'Сульфур',
    atomicMass: 32.06,
    category: 'Неметал',
    backgroundColor: '#ffffff',
    borderColor: '#CFEFD9',
    textColor: '#179c4e',
    categoryBackground: '#D7F5E2',
    bottomBackground: '#F5FCF7',
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    name: 'Хлор',
    atomicMass: 35.45,
    category: 'Неметал',
    backgroundColor: '#ffffff',
    borderColor: '#CFEFD9',
    textColor: '#179c4e',
    categoryBackground: '#D7F5E2',
    bottomBackground: '#F5FCF7',
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    name: 'Ферум',
    atomicMass: 55.845,
    category: 'Метал',
    backgroundColor: '#ffffff',
    borderColor: '#D7E0ED',
    textColor: '#375986',
    categoryBackground: '#E3EAF4',
    bottomBackground: '#F5F8FC',
  },
];

function ElementList() {
  return (
    <section className="element-list-container">
      <div className="element-list-header">
        <img src="/src/assets/glass.png" alt="" />

        <div>
          <h2>Хімічні елементи</h2>
          <p>Оберіть елемент, щоб переглянути детальну інформацію</p>
        </div>
      </div>

      <div className="element-grid">
        {elements.map((element) => (
          <ElementCard
            key={element.symbol}
            {...element}
          />
        ))}
      </div>
    </section>
  );
}

export default ElementList;