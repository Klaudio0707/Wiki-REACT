import React from "react"


import { ButtonContainer} from "./styles";
function Button({onCLick}) {
return (
 <ButtonContainer onClick={onCLick}>
Buscar
</ButtonContainer>

)
}
export default Button