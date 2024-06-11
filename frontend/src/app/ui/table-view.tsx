import React from "react";

export default function TableView() {
    return (
        <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-white bg-opacity-90">
                {/* head */}
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"></th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Job</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Favorite Color</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* row 1 */}
                    <tr>
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</th>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cy Ganderton</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quality Control Specialist</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</th>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hart Hagerty</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Desktop Support Technician</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</th>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Brice Swyre</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tax Accountant</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
