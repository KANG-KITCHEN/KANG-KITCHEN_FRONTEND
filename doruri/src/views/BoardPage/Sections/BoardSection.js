import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: '제품명', field: 'name' },
      { title: '영양정보', field: 'health' },
      {
        title: '제조사',
        field: 'company',
        lookup: { 1: '농심', 2: '오뚜기', 3: '삼양' , type: 'numeric' },
      },
      { title: '위해등급', field: 'danger' },
    ],
    data: [
        {name: 'Poduct1', health: "~~~~", danger: '1', company: 1},
        {name: 'Poduct2', health: "~~~~", danger: '2', company: 3},
        {name: 'Poduct1', health: "~~~~", danger: '1', company: 2},
        {name: 'Poduct3', health: "~~~~", danger: '3', company: 3},
        {name: 'Item2', health: "~~~~", danger: '1',  company: 3},
        {name: 'Item2', health: "~~~~", danger: '2',  company: 1},
        {name: 'Poduct1', health: "~~~~", danger: '3',  company: 2},
        {name: 'Item2', health: "~~~~", danger: '1',  company: 1},
        {name: 'Item2', health: "~~~~", danger: '2',  company: 2},
        {name: 'Poduct4', health: "~~~~", danger: '3',  company: 3},
        {name: 'Item2', health: "~~~~", danger: '3',  company: 1},
        {name: 'Item2', health: "~~~~", danger: '2',  company: 3},
        {name: 'Poduct2', health: "~~~~", danger: '2',  company: 2},
        {name: 'Item1', health: "~~~~", danger: '3',  company: 1},
        {name: 'Item3', health: "~~~~", danger: '3',  company: 2},
    ],
  });

  return (
    <MaterialTable
      title="위해식품 정보"
      columns={state.columns}
      data={state.data}
      options={{
        paginationType: "stepped"
      }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
      }}
    />
  );
}