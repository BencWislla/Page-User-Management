import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";

function Home() {
  return (
    <div>
      <Input
        text={"Nome completo"}
        placeholder={"Digite seu nome"}
        type={"password"}
      />
      <Select title={"Selecione"} textOne={"Dev"} textTwo={"Senior"} />
      <Button text={"Confirmar"} />
      <Badge text={"Inativo"} />
    </div>
  );
}
export default Home;
