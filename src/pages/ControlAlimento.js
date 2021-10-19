import { useState } from "react";
import BtnAddControl from "../components/control/BtnAddControl";
import ControlList from "../components/control/ControlList";
import Modal from "../components/Modal";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useModal } from "../hooks/useModal";

const initialForm = {
  alimento: "",
  cantidad: "",
  id: null,
};

const ControlAlimento = () => {
  const [form, setForm] = useState(initialForm);
  const [inputDate, setInputDate] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [legend, setLegend] = useState("");
  const [legend02, setLegend02] = useState("");
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [editData, setEditData] = useState(null);
  const [data, setData] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (form.alimento.length > 14) {
      setErrorInput(true);
      setLegend("No puede de tener mas de 14 caracteres");
      setIsDisabled(true);
    } else {
      setErrorInput(false);
      setLegend("");
    }
    if (form.cantidad.length > 8) {
      setErrorInput(true);
      setLegend02("No puede de tener mas de 8 caracteres");
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setErrorInput(false);
      setLegend02("");
    }
  };

  const theme = createTheme({
    typography: {
      fontSize: 20,
    },
  });

  const handleReset = () => {
    setForm(initialForm);
    setEditData(null);
    setInputDate("");
  };
  const createData = () => {
    form.id = Date.now();
    setData([...data, { ...form, inputDate }]);
  };

  const updateData = () => {
    // let newData = data.map(el => (el.id === data.id ? data : el));
    setData([{ ...form, inputDate }]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.id === null ? createData() : updateData();
    handleReset();
    closeModal2();
  };

  const handleEdit = dataToEdit => {
    openModal2();
    setEditData(dataToEdit);

    setForm({
      alimento: `${dataToEdit.alimento}`,
      cantidad: `${dataToEdit.cantidad}`,
      id: `${dataToEdit.id}`,
    });
    setInputDate(dataToEdit.inputDate);
  };

  return (
    <div>
      <BtnAddControl openModal={openModal2} />
      <ControlList
        data={data}
        editData={editData}
        setEditData={setEditData}
        handleEdit={handleEdit}
      />
      <Modal isOpenModal={isOpenModal2} closeModal={closeModal2}>
        <h3>Agregar ejemplar</h3>
        <form className="modal__inputs" onSubmit={handleSubmit}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              className="modal-date"
            >
              <DatePicker
                className="modal-date"
                label="Fecha"
                name="Fecha"
                value={inputDate}
                onChange={newValue => {
                  setInputDate(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} helperText={null} />
                )}
                required
                // views={["year", "month", "day"]}
                openTo="year"
              />
            </LocalizationProvider>

            <TextField
              key="Alimento"
              className="modal-name"
              onChange={handleChange}
              error={errorInput}
              label="Tipo de alimento"
              name="alimento"
              value={form.alimento}
              helperText={legend}
              margin="dense"
              required
              autoComplete="off"
            />
            <TextField
              key="Cantidad"
              className="modal-name"
              onChange={handleChange}
              error={errorInput}
              label="Cantidad (N°,g)"
              name="cantidad"
              value={form.cantidad}
              helperText={legend02}
              margin="dense"
              required
              autoComplete="off"
            />
          </ThemeProvider>
          <button className="modal__submit" disabled={isDisabled}>
            Agregar
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ControlAlimento;
