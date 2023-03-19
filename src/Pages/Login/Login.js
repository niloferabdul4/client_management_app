import React,{useState,useContext,useEffect} from 'react'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import logo from '../../assets/logo.jpg';
import { LoginContainer,
    LoginCard,
    LeftWrapper,
    Form,Title,
    Text,ErrorLabel,
    RightWrapper,
    Description,
    InputWrapper,
    Input,LoginButton,
    Image,Content,
    LeftInfo,RightInfo

 } from './loginstyle'
import { useNavigate } from 'react-router-dom';
import { ClientContext } from '../../Context/AppContextProvider';
 
const Login = () => {
    const{user,setUser,setToken}=useContext(ClientContext)
   
    const[formData,setFormData]=useState({email:'',password:''})
    const[formerrors,setFormErrors]=useState('')
    const navigate=useNavigate(null)                
    const handleChange=(event)=>
   {
    console.log(event.target.value)
    const {name,value}=event.target;
    setFormData(prevData=>({...prevData,[name]:value}))
   }
   useEffect(()=>{setToken(null)},[])

   const handleSubmit=(event)=>
   { 
    event.preventDefault();
    setFormErrors(validate(formData))   
    fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
              //email: "eve.holt@reqres.in",
             // password: "5cityslicka"
             email: formData.email,
             password: formData.password
            })
    })
    .then(res=>res.json())
    .then(json=>console.log(json.token))
    .catch(error=>setToken(null))
   }
   const validate=(data)=>{       
        const errorObj={}  
        if(!data.Email)
        {
                errorObj.Email='Email is required'
        }
        if(!data.Password)
        {
                errorObj.Password='Password is required'
        }
        return errorObj; 
    }
  return (
    <>
                
    <LoginContainer>
        <LoginCard>
            <LeftWrapper>
                  <LeftInfo>
                  <Title>
                        Welcome
                    </Title>
                  </LeftInfo>
                    
                    <Form onSubmit={handleSubmit}>
                    <Text>
                         Enter your Username and Password
                    </Text>
                        <InputWrapper>
                                <Input  type='text'
                                        placeholder='Email' 
                                        name='email' 
                                        value={formData.email} 
                                        onChange={handleChange}
                                        required
                                />   
                                
                                <ErrorLabel>{formerrors.email}</ErrorLabel>                                    
                                    <Person2OutlinedIcon style={{fontSize:'18px',color:'#D3D3D3',position:'absolute', top:'15px',left:'2px'}}  />                               
                         </InputWrapper>
                         <InputWrapper>                      
                                <Input  type='text'
                                        placeholder='Password' 
                                        name='password'
                                        value={formData.password}  
                                        onChange={handleChange}
                                        required
                                />
                               <ErrorLabel>{formerrors.password}</ErrorLabel>  
                                    <HttpsOutlinedIcon style={{fontSize:'17px',color:'#D3D3D3',position:'absolute',top:'15px',left:'2px'}}/>      
                        </InputWrapper>
                       <LoginButton>Login</LoginButton>
                        <Text>Forgot Password?</Text>
                    </Form>               
            </LeftWrapper>
            <RightWrapper>
                 
                  <Image src={logo} />
                  <RightInfo>
                  <Description>360° Solution for Asset Management</Description>
                  <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Content>
                  </RightInfo>
                  
            </RightWrapper>
        </LoginCard>
    </LoginContainer>
                  
    </>
  )
}

export default Login
