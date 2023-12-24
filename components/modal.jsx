"use client";
import React from "react";
import Modal from "react-modal";

const PaymentConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={""}>
      <div className="flex w-full h-full items-center justify-center flex-col gap-10">
        <div className="">
          <p className="">پرداخت با موفقیت انجام شد!</p>
        </div>
        <button onClick={onConfirm} className="bg-green-400 px-10 py-2 rounded">تایید</button>
      </div>
    </Modal>
  );
};

export default PaymentConfirmationModal;
