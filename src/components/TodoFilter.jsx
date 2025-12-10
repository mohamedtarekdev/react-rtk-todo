import { CheckCircle, Clock, List } from "lucide-react";
import React from "react";

const TodoFilter = ({ currentFilter, states }) => {
  const filter = [
    {
      key: "all",
      name: "All",
      icon: List,
      count: states.total,
    },
    {
      key: "active",
      name: "Active",
      icon: Clock,
      count: states.active,
    },
    {
      key: "completed",
      name: "Completed",
      icon: CheckCircle,
      count: states.completed,
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex bg-gray-200 p-1 rounded-lg gap-2">
        {filter.map((item) => {
          return (
            <button
              key={item.key}
              className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ${
                currentFilter === item.key
                  ? "text-gray-800 bg-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300 hover:text-gray-800"
              }`}
            >
              <item.icon size={16} />
              <span>{item.name}</span>
              <span>{item.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TodoFilter;
