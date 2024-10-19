import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTile = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTile.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return ;
    }

    onAdd({
      title: enteredTile,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }


  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input  </h2>
        <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid for every input field</p>
          
    </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex  items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950"
                onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title"></Input>
          <Input ref={description} label="Description" textarea></Input>
          <Input type="date" ref={dueDate} label="Due Date"></Input>
        </div>
      </div>
    </>
  );
}