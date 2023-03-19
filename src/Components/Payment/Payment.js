import ButtonContainer from "../Button Container/ButtonContainer"
import PaymentForm from "./PaymentForm"
import { PaymentContainer,PaymentModeStatusContainer} from "./paymentstyles"
import PaymentMode from "./PaymentMode"
import PaymentStatus from "./PaymentStatus"
import { SubTitle } from "../Sidebar/sidebarstyles"
import { SubText } from "../Modules/modulesstyles"
const Payment = () => {
    return (
      <>
        <PaymentContainer id='payment'>
          <SubTitle>Payment Setup</SubTitle>
            <SubText>Setup payments for the clients</SubText>      
            <PaymentForm />
            <PaymentModeStatusContainer>
               <PaymentMode/>
               <PaymentStatus/>
            </PaymentModeStatusContainer>
            <ButtonContainer/>
      </PaymentContainer>
      </>
    )
  }
  
  export default Payment
  