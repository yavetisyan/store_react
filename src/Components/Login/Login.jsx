import React, {useState} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Input, Typography,} from "@material-tailwind/react";
import {useDispatch} from "react-redux";
import {login} from "../../features/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    password: '',
    image: ''
  }

  const [values, setValues] = useState(initialState)
  const onCreate = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setValues({...values, [name]: [value]})

  }

  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Name" size="lg" type='text' name='name' value={values.name} onChange={onCreate}/>
          <Input label="Password" size="lg" type='password' name='password' value={values.password}
                 onChange={onCreate}/>
          <Input label="image URL address" size="lg" type='text' name='image' value={values.image}
                 onChange={onCreate}/>

        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={() => dispatch(login(values))}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;