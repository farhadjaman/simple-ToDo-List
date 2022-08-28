import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allCompleted } from "../redux/todos/actions";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
export default function Header() {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const dispatch = useDispatch()
    const handleAddText = (e) => {
        e.preventDefault();
        if (input)
            dispatch(added(input))
        setInput("")

    }

    const handleCompleteAll = () => {
        dispatch(allCompleted())
    }

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={e => handleAddText(e)}
            >
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={(e) => handleInput(e)}
                />

                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>

            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer"
                    onClick={() => handleCompleteAll()}
                >
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
