import { useState } from "react";
import "./ControlMudas.css";
import BtnAddControl from "../components/control/BtnAddControl";
import Modal from "../components/Modal";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useModal } from "../hooks/useModal";
import ListPeso from "../components/controlPeso/ListPeso";

const initialForm = {
  peso: "",
  observaciones: "",
  id: "",
};

const ControlPeso = () => {
  const [form, setForm] = useState(initialForm);
  const [inputDate, setInputDate] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [legend, setLegend] = useState("");
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (form.observaciones.length > 20) {
      setErrorInput(true);
      setLegend("No puede de tener mas de 20 caracteres");
      setIsDisabled(true);
    } else {
      setErrorInput(false);
      setLegend("");
      setIsDisabled(false);
    }
  };

  const theme = createTheme({
    typography: {
      fontSize: 20,
    },
  });

  const handleReset = () => {
    setForm(initialForm);
    setInputDate("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.id = Date.now();
    setData([...data, { ...form, inputDate }]);
    handleReset();
    closeModal4();
  };
  return (
    <section className="controlPeso">
      <BtnAddControl openModal={openModal4} />
      <ListPeso data={data} />
      <Modal isOpenModal={isOpenModal4} closeModal={closeModal4}>
        <h3>Agregar Control</h3>
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
              key="peso"
              className="modal-name"
              onChange={handleChange}
              error={errorInput}
              label="Peso"
              name="peso"
              value={form.peso}
              helperText={legend}
              margin="dense"
              autoComplete="off"
              required
              multiline
              rows={2}
            />
            <TextField
              key="observaciones"
              className="modal-name"
              onChange={handleChange}
              error={errorInput}
              label="Obervaciones"
              name="observaciones"
              value={form.observaciones}
              helperText={legend}
              margin="dense"
              autoComplete="off"
              required
              multiline
              rows={2}
            />
          </ThemeProvider>
          <button className="modal__submit" disabled={isDisabled}>
            Agregar
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default ControlPeso;
