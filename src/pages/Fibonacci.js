import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Fibonacci = () => {

    const [term, setTerm] = useState(0)

    const inputTerm = (e) => {
      const val = e.target.value;
      setTerm(val);
    }

    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    const fibb = fib(term);

    return (
        <div>
            <h1>Fibb</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { ml: 0, mt: 3, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
                value={term}
                onChange={inputTerm}
                id="outlined-basic"
                label="Введите чило"
                variant="outlined" />
            </Box>
            <h5>{fibb}</h5>

        </div>
    )
}

export default Fibonacci;