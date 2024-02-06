import React, { useState } from "react";

function modal() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const modalBody = (
    <div className={styles.modal}>
      <div align="center">
        <h2>Listo para aprender</h2>
        <p>Porfavor llene sus datos para continuar con el pago</p>
      </div>

      <div align="right">
        <TextField label="Correo" className={styles.textfield}></TextField>
        <br />
        <TextField
          label="Número de tarjeta"
          className={styles.textfield}
        ></TextField>
        <br />
        <TextField label="CV" className={styles.textfield}></TextField>
        <br />
        <TextField
          label="Fecha de expiración"
          className={styles.textfield}
        ></TextField>
        <br />
      </div>
      <button color="primary">Pagar</button>
    </div>
  );
  return (
    <div>
      <button onClick={() => openModal}>Abrir Modal</button>
      <Modal open={modal} onClose={openModal}>
        {modalBody}
      </Modal>
    </div>
  );
}

export default modal;
