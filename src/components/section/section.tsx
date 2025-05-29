import "./section.css"
import Button from "@mui/material/Button";
import { useGlobalContext } from "../../contexs/globalStore";
import { useEffect } from "react";

export default function Section() {
  const { setIsStart } = useGlobalContext();
  const { isStart } = useGlobalContext();

  useEffect(() => {
    console.log(isStart);
  }, [isStart]);

  if (isStart) {
    return (
      <section className="section">
        <h1>Game Started</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => setIsStart(true)}
      >
        Start
      </Button>
    </section>
  )
}