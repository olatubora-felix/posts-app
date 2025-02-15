/* eslint-disable react/prop-types */
import { X } from "lucide-react";
const Modal = ({ children, open, onClose }) => {
  if (!open) return;
  return (
    <section className="fixed inset-0 h-screen overflow-hidden bg-black/85 flex justify-center items-center p-4 z-50">
      <div className=" bg-white  px-4 py-4 w-full rounded-xl shadow-md space-y-2">
        <div className="flex justify-between items-center">
          <h4></h4>
          <span
            className="size-6 flex items-center justify-center bg-blue-500 text-white rounded-full p-1"
            onClick={onClose}
          >
            <X />
          </span>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Modal;
