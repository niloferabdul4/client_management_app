import React,{useState} from 'react'
//import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
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
 
const Login = () => {
 
    const[formData,setFormData]=useState({email:'',password:''})
    //const[formerrors,setFormErrors]=useState('')
   // const inputRef=useRef(null)
    //const navigate=useNavigate(null)
                 
    const handleChange=(event)=>
   {
    const {name,value}=event.target;
    setFormData(prevData=>({...prevData,[name]:value}))
   }

   const handleSubmit=(event)=>
   { 
    event.preventDefault();
    console.log('hello')
 /*
    signInWithEmailAndPassword(auth,formData.email,formData.password)
        .then((auth)=>{  
                        if (auth)
                        {
                        navigate('/viewClients')
                        }
                        
                        })
      .catch((error)=>alert(error.message))
      */
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
                               {/* <ErrorLabel>{formerrors.password}</ErrorLabel>  */}
                                    <HttpsOutlinedIcon style={{fontSize:'17px',color:'#D3D3D3',position:'absolute',top:'15px',left:'2px'}}/>      
                        </InputWrapper>
                       <LoginButton type='button'>Login</LoginButton>
                        <Text>Forgot Password?</Text>
                    </Form>               
            </LeftWrapper>
            <RightWrapper>
                 <Image src='/assets/logo.jpg' />
                
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
