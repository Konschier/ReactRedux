import { useHistory } from "react-router-dom";

export default function Test() {
  const { goBack } = useHistory();

  return (
    <div>
      <span onClick={() => goBack()}>click aqui para voltar</span>
    </div>
  )
}