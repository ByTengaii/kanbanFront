import { makeObservable, observable, action } from "mobx";
import { DropResult } from "react-beautiful-dnd";

export type MockupData = {
    id: number;
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
}

export class KanvanBoard {
    todos= [] as MockupData[];
    inProgress = [] as MockupData[];
    dones = [] as MockupData[];

    constructor( mockupData: MockupData[], mockupData2: MockupData[], mockupData3: MockupData[]) {
        this.todos = mockupData;
        this.inProgress = mockupData2;
        this.dones = mockupData3;
        makeObservable(this, {
            todos: observable,
            inProgress: observable,
            dones: observable,
            moveItem: action,
            addTodo: action,
            addInProgress: action,
            addDone: action
        });
    }

    moveItem = (result: DropResult) => {
        if (!result.destination) return;
        console.log('Kanvan Result:',result);
        const { source, destination } = result;
        const sourceColumn = this.getColumn(source.droppableId);
        const destinationColumn = this.getColumn(destination.droppableId);
        const [movedItem] = sourceColumn!.splice(source.index, 1);
        destinationColumn!.splice(destination.index, 0, movedItem);
    };

    getColumn = (columnId: string) => {
        switch (columnId) {
            case 'todo':
                return this.todos;
            case 'inprogress':
                return this.inProgress;
            case 'done':
                return this.dones;
        }
    }

    addTodo = (item:MockupData) => {
        this.todos.push(item);
        console.log(this.todos);
    }

    addInProgress = (item: MockupData) => {
        this.inProgress.push(item);
    }

    addDone = (item: MockupData) => {
        this.dones.push(item);
    }

    setTodos = (items: MockupData[]) => {
        this.todos = items;
    }

    setInProgress = (items: MockupData[]) => {
        this.inProgress = items;
    }

    setDones = (items: MockupData[]) => {
        this.dones = items;
    }

    getTodos = () => {
        return this.todos;
    }

    getInProgress = () => {
        return this.inProgress;
    }

    getDones = () => {
        return this.dones;
    }

}


/*const [todoSection, setTodoSection] = useState(mockupData);
const [inProgressSection, setInProgressSection] = useState(mockupData2 as MockupData[]);
const [doneSection, setDoneSection] = useState(mockupData3 as MockupData[]);

const handleOnDragEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) return;
    // If the item is dropped in the same column
    if (result.destination.droppableId === result.source.droppableId) {
        switch (result.destination.droppableId) {
            case 'todo': {
                const items = Array.from(todoSection);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                setTodoSection(items);
                break;
            } case 'inprogress': {
                const items = Array.from(inProgressSection);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                setInProgressSection(items);
                break;
            }
            case 'done': {
                const items = Array.from(doneSection);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                setDoneSection(items);
                break;
            }
        }
    } else {
        // If the item is dropped in a different column
        switch (result.source.droppableId) {
            case 'todo': {
                const items = Array.from(todoSection);
                const [reorderedItem] = items.splice(result.source.index, 1);
                setTodoSection(items);
                switch (result.destination.droppableId) {
                    case 'inprogress': {
                        const items = Array.from(inProgressSection);
                        items.splice(result.destination.index, 0, reorderedItem);
                        setInProgressSection(items);
                        break;
                    }
                    case 'done': {
                        const items = Array.from(doneSection);
                        items.splice(result.destination.index, 0, reorderedItem);
                        setDoneSection(items);
                        break;
                    }
                }
                break;
            }
            case 'inprogress': {
                const items = Array.from(inProgressSection);
                const [reorderedItem] = items.splice(result.source.index, 1);
                setInProgressSection(items);
                switch (result.destination.droppableId) {
                    case 'todo': {
                        const items = Array.from(todoSection);
                        items.splice(result.destination.index, 0, reorderedItem);
                        setTodoSection(items);
                        break;
                    }
                    case 'done': {
                        const items = Array.from(doneSection);
                        items.splice(result.destination.index, 0, reorderedItem);
                        setDoneSection(items);
                        break;
                    }
                }
                break;
            }
            case 'done': {
                const items = Array.from(doneSection);
                const [reorderedItem] = items.splice(result.source.index, 1);
                setDoneSection(items);
                switch (result.destination.droppableId) {
                    case 'todo': {
                        const items = Array.from(todoSection);
                        items.splice(result.destination.index, 0, reorderedItem);
                        setTodoSection(items);
                        break;
                    }
                    case 'inprogress': {
                        const items = Array.from(inProgressSection);
                        items.splice(result.destination.index, 0, reorderedItem);
                        setInProgressSection(items);
                        break;
                    }
                }
                break;
            }
        }
    }
}*/