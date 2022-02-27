import React from 'react';
import Box from '../../components/box';
import './styles.scss';

export interface IBox {
  id: number
  name: string
  content: string
  color: string
  icon: string
}
export const boxes: IBox[] = [
  {
    id: 1,
    name: 'Etherum',
    content: 'The Most Stable And Widespread',
    color: '#11122e',
    icon: 'icons/ethereum.png',
  },
  {
    id: 2,
    name: 'Flow',
    content: 'The Most Stable And Widespread',
    color: '#071f2b',
    icon: 'icons/flow.png',
  },
  {
    id: 3,
    name: 'Tezos',
    content: 'The Most Stable And Widespread',
    color: '#0f1336',
    icon: 'icons/tezos.png',
  },
  {
    id: 4,
    name: 'Etherum',
    content: 'The Most Stable And Widespread',
    color: '#11122e',
    icon: 'icons/ethereum.png',
  },
  {
    id: 5,
    name: 'Flow',
    content: 'The Most Stable And Widespread',
    color: '#071f2b',
    icon: 'icons/flow.png',
  },
  {
    id: 6,
    name: 'Tezos',
    content: 'The Most Stable And Widespread',
    color: '#0f1336',
    icon: 'icons/tezos.png',
  },
  {
    id: 7,
    name: 'Etherum',
    content: 'The Most Stable And Widespread',
    color: '#11122e',
    icon: 'icons/ethereum.png',
  },
  {
    id: 8,
    name: 'Flow',
    content: 'The Most Stable And Widespread',
    color: '#071f2b',
    icon: 'icons/flow.png',
  },
];

const Bridge: React.FC = () => {
  return (
    <main className='bridge'>
      <section className='bridge__content'>
        <h1>Bridge</h1>
        <p>You available tokens in the following networks</p>

        <div className='boxes'>
          {boxes.map((box) => (
            <Box
              key={box.id}
              id={box.id}
              name={box.name}
              content={box.content}
              color={box.color}
              icon={box.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Bridge;
