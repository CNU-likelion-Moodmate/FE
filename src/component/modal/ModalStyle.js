import { DIM, WHITE } from '../constants/color';

export const customModalStyles = {
  overlay: {
    backgroundColor: DIM,
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "300px",
    height: "180px",
    zIndex: "10",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    backgroundColor: WHITE,
    justifyContent: "center",
    overflow: "auto",
    padding: 25,
  },
};