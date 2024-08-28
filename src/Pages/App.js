import { useState } from "react";
import gitLogo from "../Assets/gitlogo.png";
import Input from "../Components/Inputs";
import Button from "../Components/Button";
import ItemRepo from "../Components/ItemRepo";
import { api } from "../services/api";

import {Container} from "./styles";


function App() {
const [currentRepo, setCurrentRepo] = useState("");
  const [respos, setRepos] = useState([]);

const handleSearchRepo = async () => {
const {data} = await api.get(`repos/${currentRepo}`)

if(data.id){
setRepos(prev => [...prev, data]);
setCurrentRepo("")
return 

}

}




  return (
    <Container>
      <img src={gitLogo} width={160} height={160} alt="Logo-Github" />
   <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
   <Button onClick={handleSearchRepo}/>
  {respos.map(repo => <ItemRepo repo={repo}/>)}

  
    </Container>
  
);
}

export default App;
