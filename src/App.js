import React from "react";
import Button from "./components/Button";

function App() {
  const types = [
    'primary',
    'secondary',
    'tertiary',
    'ghost',
    'destructive',
    'inverse',
  ];
  const sizes = ['sm', 'md', 'lg']
  return (
    <div className="bg-gray-white h-screen">
      <div className="App container m-auto py-20">
        <h1 className="text-2xl font-bold">Button Component</h1>
        {types.map(t => {
          return (<div className="my-3">
            <p className="text-lg font-bold">Type Prop: {t}</p>
          <p className="space-x-3">
              {sizes.map(s => <Button type={t} size={s}> Button {t} {s} </Button>)}
           </p>
        </div>)
        })}
        
      </div>
    </div>
  );
}

export default App;
