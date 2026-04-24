import { createContext, useContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";

// Task описва как изглежда една задача в приложението.
// Всеки task има:
// - id: уникален номер, по който го намираме
// - text: текстът на задачата
// - done: дали задачата е завършена
type Task = {
    id: number;
    text: string;
    done: boolean;
};

// Action описва всички позволени действия, които reducer-ът разбира.
// Вместо да променяме state директно, изпращаме action към reducer-а.
//
// payload е допълнителната информация, нужна за конкретното действие:
// - added получава цял Task обект
// - deleted получава id на task-а за изтриване
// - toggled получава id на task-а, чийто done статус ще се обърне
type Action =
    | { type: "added"; payload: Task }
    | { type: "deleted"; payload: number }
    | { type: "toggled"; payload: number };

// tasksReducer е функцията, която решава как да се промени state-ът.
//
// state е текущият списък със задачи.
// action казва какво се е случило.
// return връща новия списък със задачи.
//
// Важно: reducer-ът не трябва да променя стария state директно.
// Затова използваме [...state], filter и map, които връщат нов масив.
function tasksReducer(state: Task[], action: Action): Task[] {
    switch (action.type) {
        case "added":
            // Добавяме новата задача към края на списъка.
            // [...state, action.payload] създава нов масив,
            // вместо да променя стария.
            return [...state, action.payload];
        case "deleted":
            // Оставяме само задачите, чието id е различно от подаденото.
            // Така задачата с action.payload id изчезва от новия state.
            return state.filter((task) => task.id !== action.payload);
        case "toggled":
            // Минаваме през всички задачи.
            // Ако намерим задачата с правилното id, сменяме done от true на false
            // или от false на true. Всички други задачи остават същите.
            return state.map((task) =>
                task.id === action.payload
                    ? { ...task, done: !task.done }
                    : task
            );
        default:
            return state;
    }
}

// TasksContext пази самите задачи.
// Компонентите, които искат само да четат задачите, ще използват този context.
const TasksContext = createContext<Task[] | null>(null);

// TasksDispatchContext пази dispatch функцията.
// Компонентите, които искат да добавят, трият или toggle-ват задача,
// ще използват този context.
const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

// TasksProvider е обвивката, която дава достъп до tasks и dispatch
// на всички компоненти вътре в children.
export function TasksProvider({ children }: { children: ReactNode }) {
    // useReducer свързва tasksReducer с React.
    //
    // tasks е текущият списък със задачи. Началната стойност е [].
    // dispatch е функцията, чрез която изпращаме action-и към reducer-а.
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        // Първият Provider дава текущия списък със задачи.
        <TasksContext.Provider value={tasks}>
            {/* Вторият Provider дава dispatch функцията. */}
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

// useTasks е custom hook за четене на списъка със задачи.
// Така компонентите няма нужда всеки път да пишат useContext(TasksContext).
export function useTasks() {
    const context = useContext(TasksContext);

    // Ако context е null, значи hook-ът е извикан извън TasksProvider.
    // Това е грешка в структурата на компонентите, затова хвърляме ясна грешка.
    if (context === null) {
        throw new Error("useTasks must be used within TasksProvider");
    }

    return context;
}

// useTasksDispatch е custom hook за достъп до dispatch.
// Чрез него компонентите могат да изпращат action-и към reducer-а.
export function useTasksDispatch() {
    const context = useContext(TasksDispatchContext);

    // Ако няма Provider над компонента, dispatch няма откъде да дойде.
    if (context === null) {
        throw new Error("useTasksDispatch must be used within TasksProvider");
    }

    return context;
}

// Това е малък demo компонент, за да може файлът да се използва директно
// от App.tsx като <Counter />.
//
// Той обвива истинското съдържание в TasksProvider, за да имат useTasks
// и useTasksDispatch достъп до context стойностите.
export default function Counter() {
    return (
        <TasksProvider>
            <TasksDemo />
        </TasksProvider>
    );
}

// TasksDemo е компонентът, който реално чете tasks и изпраща action-и.
// Държим го отделно от Counter, защото useTasks и useTasksDispatch трябва
// да бъдат извикани вътре в TasksProvider.
function TasksDemo() {
    const tasks = useTasks();
    const dispatch = useTasksDispatch();

    return (
        <div>
            <button
                onClick={() =>
                    dispatch({
                        type: "added",
                        payload: {
                            id: Date.now(),
                            text: "New task",
                            done: false,
                        },
                    })
                }
            >
                Add task
            </button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() =>
                                    dispatch({
                                        type: "toggled",
                                        payload: task.id,
                                    })
                                }
                            />
                            {task.text}
                        </label>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "deleted",
                                    payload: task.id,
                                })
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// function reducer(state: { count: number; }, action: { type: any; }) {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 };
//         case "decrement":
//             return { count: state.count - 1 };
//         case "reset":
//             return { count: 0 };
//         default:
//             return state;
//     }
// }

// export default function Counter() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({ type: "increment" })}>+</button>
//             <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//             <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//         </div>
//     );
// }
