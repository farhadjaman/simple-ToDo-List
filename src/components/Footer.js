import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { statusChanged, colorChanged } from "../redux/filters/actions";
export default function Footer() {

    const [tasks, setTasks] = useState(0)
    const todos = useSelector(state => state.todos)
    const { status, colors } = useSelector(state => state.filters)
    const dispatch = useDispatch();

    useEffect(() => {
        setTasks(todos.reduce((count, obj) => {
            if (!obj.completed) count++;
            return count;
        }, 0))

    }, [todos])

    const handleFilterStatus = (status) => {
        dispatch(statusChanged(status))
    }
    const handleFilterColors = (color) => {
        if (colors.includes(color))
            dispatch(colorChanged(color, 'removed'))
        else
            dispatch(colorChanged(color, 'added'))
    }


    return (

        <div className="mt-4 flex md:flex-row flex-col md:justify-between items-center gap-y-2 text-xs text-gray-500">
            <p>{tasks} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === "ALL" ? "font-bold" : ""}`}
                    onClick={() => handleFilterStatus("ALL")}
                >All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "INCOMPLETE" ? "font-bold" : ""}`}
                    onClick={() => handleFilterStatus("INCOMPLETE")}
                >
                    Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "COMPLETE" ? "font-bold" : ""}`}
                    onClick={() => handleFilterStatus("COMPLETE")}
                >Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") ? "bg-green-500" : ""}`}
                    onClick={() => handleFilterColors("green")}
                ></li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${colors.includes("red") ? "bg-red-500" : ""} `}
                    onClick={() => handleFilterColors("red")}
                ></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${colors.includes("yellow") ? "bg-yellow-500" : ""} `}
                    onClick={() => handleFilterColors("yellow")}
                ></li>
            </ul>
        </div>
    );
}
