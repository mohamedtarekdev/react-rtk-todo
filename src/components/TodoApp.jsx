import { CheckCircle2, Circle, Filter, Plus, Trash2 } from 'lucide-react';
import React from 'react';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';

const TodoApp = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        ToDoFlow
                    </h1>
                    <p>Organize your life, one task at a time</p>
                </div>

                {/* State Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-300 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-xl text-gray-800">
                            Progress Overview
                        </h2>
                        <div className="text-2xl font-bold text-green-600">
                            {/* Logic of TODO */}
                        </div>
                    </div>

                    <div className="w-full bg-gray-300 h-3 rounded-full mb-4">
                        <div className="bg-linear-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"></div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-gray-800">
                                {/* Total Logic */}5
                            </div>
                            <div className="text-sm text-gray-600">Total</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-800">
                                {/* Active Logic */}10
                            </div>
                            <div className="text-sm text-gray-600">Active</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-800">
                                {/* Completed Logic */}7
                            </div>
                            <div className="text-sm text-gray-600">
                                Completed
                            </div>
                        </div>
                    </div>
                </div>

                {/* Todo List Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-b-2xl border border-gray-300 shadow-lg overflow-hidden">
                    {/* Action Bar */}
                    <div className="p-6 border-b border-gray-300">
                        <div className="flex items-center justify-between mb-4">
                            <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium cursor-pointer">
                                <Plus size={20} />
                                Add Todo
                            </button>
                            {/* Clear and Delete Buttons */}
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-3 text-red-600 hover:text-red-700 px-3 py-2 rounded-xl hover:bg-red-50 transition-colors duration-200 text-sm cursor-pointer">
                                    <Trash2 size={16} />
                                    Clear Completed
                                </button>
                                <button className="flex items-center gap-3 text-green-600 hover:text-green-700 px-3 py-2 rounded-xl hover:bg-green-50 transition-colors duration-200 text-sm cursor-pointer">
                                    <CheckCircle2 size={16} />
                                    Mark All Completed
                                </button>
                            </div>
                        </div>
                        {/* Todo Filter */}
                        <TodoFilter />
                    </div>
                    {/* Todo Form */}
                    <div className="p-6 border-b border-gray-300 bg-gray-100">
                        <TodoForm />
                    </div>

                    {/* Todo List */}
                    <div className="max-h-96 overflow-y-auto">
                        <div className="p-12 text-center">
                            <div className="text-gray-600">
                                <Circle
                                    size={48}
                                    className="mx-auto mb-4 opacity-50"
                                />
                                <p className="text-lg font-medium mb-2 text-gray-800">
                                    No Todos Yet
                                </p>
                                <p>Add your first todo to get started</p>
                            </div>

                            {/* Conditional Rendering of TODO */}
                            <div className="text-gray-600">
                                <Filter
                                    size={48}
                                    className="mx-auto mb-4 opacity-50"
                                />
                                <p className="text-lg font-medium mb-2 text-gray-800">
                                    No Filter Todos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
