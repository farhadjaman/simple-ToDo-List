import Todo from "./Todo";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector(state => state)
    const { status, colors } = useSelector(state => state.filters)

    const renderSwitch = (status) => {
        return todos
            .filter(todo => {
                switch (status) {
                    case "INCOMPLETE":
                        return !todo.completed

                    case "COMPLETE":
                        return todo.completed

                    default:
                        return true;
                }
            })
            .filter(todo => {
                if (colors.length) {
                    if (colors.length && colors.includes(todo.color)) return true;
                    else return false;
                }
                else return true;


            })
            .map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))

        // if (status === "ALL")

        // if (status === "COMPLETE")
        //     return todos.map(todo => (
        //         todo.completed && <Todo todo={todo} key={todo.id} />
        //     ))
        // if (status === "INCOMPLETE")
        //     return todos.map(todo => (
        //         !todo.completed && <Todo todo={todo} key={todo.id} />
        //     ))
    }
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                renderSwitch(status)
            }
        </div>
    );
}
