import React from 'react';

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
            </div>
        </div>
    );
};

export default TodoApp;
