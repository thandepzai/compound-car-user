import Modal from "@module/_core/app/component/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";

interface LoginModalHandler {
  open: () => void;
}

const LoginModal = forwardRef<LoginModalHandler>((_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsModalOpen(true),
  }));

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-3">Modal Title</h2>
      <p className="mb-5 text-gray-600">Nội dung modal của bạn ở đây.</p>
    </Modal>
  );
});

export default LoginModal;
