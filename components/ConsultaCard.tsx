// InvoiceCard.tsx
import React from "react";

interface Item {
    name: string;
    quantity: number;
    price: number;
}

interface Props {
    items: Item[];
}

const calculateTotal = (items: Item[]) => {
    return items.reduce((total, item) => total + (item.quantity * item.price), 0);
}


export const ConsultaCard: React.FC<Props> = ({items}) => {
    return (
        <div className="flex flex-col w-full mt-6 space-y-2 bg-white shadow rounded p-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-bold">Company Name</h1>
                    <p>Address</p>
                </div>
                <div>
                    <h2>Client Name</h2>
                    <p>Client Address</p>
                </div>
            </div>
            <table className="mt-4 w-full">
                <thead>
                <tr>
                    <th className="text-left">Item Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-right">Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-right">${item.price.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-end mt-4">
                <div>
                    <div>Total: ${calculateTotal(items).toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
};