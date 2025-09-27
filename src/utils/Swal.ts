"use client";

import Swal, { SweetAlertIcon } from "sweetalert2";

export const handleSwal = (icon: SweetAlertIcon, msg: string) => {
  Swal.fire({
    icon,
    text: msg,
    showConfirmButton: true,
    confirmButtonText: "Okay",
    timer: 3000,
    confirmButtonColor: "#0F83B2",
    background: "#ffe4e6",
  });
};

export const handleToastSwal = (icon: SweetAlertIcon, msg: string) => {
  Swal.fire({
    icon,
    text: msg,
    toast: true,
    background: "#ffe4e6",
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};
