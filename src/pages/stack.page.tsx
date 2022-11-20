import React from "react";
import { Stack } from "../utils/Stack";
function stack() {
  return (
    <div className="flex flex-col justify-center items-start gap-x-4 w-full px:4 md:px-12">
      <h1 className="text-6xl mb-5">Currently Stack I&apos;m working with</h1>
      <div className="flex flex-col">
        {Stack.map((item, index) => (
          <div key={item.id}>
            <h2 className="text-6xl mb-5">{item.title}</h2>
            <ul className="flex space-x-2">
              {item.items &&
                item.items.map((item, index) => (
                  <li key={item.id}>{item.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default stack;
