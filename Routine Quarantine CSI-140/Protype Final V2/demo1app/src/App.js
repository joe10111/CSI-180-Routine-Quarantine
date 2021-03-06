import React from 'react';
import MaterialTable from 'material-table';


export default function MaterialTableDemo() {

 
  const [state, setState] = React.useState({

    columns: [
      { title: 'TaskName', field: 'TaskName' },
      { title: 'Description', field: 'Description' },
      { title: 'Priority', field: 'Priority', type: 'numeric' },
      {
        title: 'Scheduled Date',
        field: 'Scheduled Date',
        lookup: { 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Firday', 6: 'Saturday', 7: 'Sunday'},
      },
    ],
    data: [
      
    ],
  });

  return (
    <div className="App"> 
    <MaterialTable 
      title="Task Board"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </div>
  );
}