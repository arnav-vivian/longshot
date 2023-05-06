import { useState } from 'react';

function DragAndDropMenu() {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
    ]);

    const [newMenuItem, setNewMenuItem] = useState('');

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        const sourceIndex = e.dataTransfer.getData('index');
        const newMenuItems = [...menuItems];
        const itemToMove = newMenuItems[sourceIndex];
        newMenuItems.splice(sourceIndex, 1);
        newMenuItems.splice(index, 0, itemToMove);
        setMenuItems(newMenuItems);
    };

    const handleNewMenuItemChange = (e) => {
        setNewMenuItem(e.target.value);
    };

    const handleNewMenuItemSubmit = (e) => {
        e.preventDefault();
        const newId = menuItems.length + 1;
        const newMenuItems = [...menuItems, { id: newId, name: newMenuItem }];
        setMenuItems(newMenuItems);
        setNewMenuItem('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-8">Drag and Drop Menu</h1>
            <div className="w-full md:w-3/4 max-w-md">
                <div className="border rounded-md shadow-md p-4 mb-8">
                    <h2 className="text-lg font-bold mb-4">Menu Items</h2>
                    <div className="flex flex-col space-y-2">
                        {menuItems.map((item, index) => (
                            <div
                                key={item.id}
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, index)}
                                className="bg-white border rounded-md shadow-sm p-2 cursor-move"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border rounded-md shadow-md p-4">
                    <h2 className="text-lg font-bold mb-4">Add New Menu Item</h2>
                    <form onSubmit={handleNewMenuItemSubmit}>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="newMenuItem" className="font-bold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="newMenuItem"
                                value={newMenuItem}
                                onChange={handleNewMenuItemChange}
                                className="border rounded-md shadow-sm p-2"
                            />
                            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DragAndDropMenu;