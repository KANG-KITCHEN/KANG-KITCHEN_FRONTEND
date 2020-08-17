import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: '제품명', field: 'name' },
      { title: '위해등급', field: 'danger' },
      { title: '영양정보', field: 'health', type: 'numeric' },
      {
        title: '제조사',
        field: 'company',
        lookup: { 1: '농심', 2: '오뚜기', 3: '삼양' },
      },
    ],
    data: [
        {name: 'Poduct1', danger: '1', health: "~~~~", company: 1},
        {name: 'Poduct2', danger: '2', health: "~~~~", company: 3},
        {name: 'Poduct1', danger: '1', health: "~~~~", company: 2},
        {name: 'Poduct3', danger: '3', health: "~~~~", company: 3},
        {name: 'Item2', danger: '1', health: "~~~~", company: 3},
        {name: 'Item2', danger: '2', health: "~~~~", company: 1},
        {name: 'Poduct1', danger: '3', health: "~~~~", company: 2},
        {name: 'Item2', danger: '1', health: "~~~~", company: 1},
        {name: 'Item2', danger: '2', health: "~~~~", company: 2},
        {name: 'Poduct4', danger: '3', health: "~~~~", company: 3},
        {name: 'Item2', danger: '3', health: "~~~~", company: 1},
        {name: 'Item2', danger: '2', health: "~~~~", company: 3},
        {name: 'Poduct2', danger: '2', health: "~~~~", company: 2},
        {name: 'Item1', danger: '3', health: "~~~~", company: 1},
        {name: 'Item3', danger: '3', health: "~~~~", company: 2},
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
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
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}