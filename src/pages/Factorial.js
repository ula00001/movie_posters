import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Factorial = () => {

     const [term, setTerm] = useState(0)

    const inputTerm = (e) => {
      const val = e.target.value;
      setTerm(val);
    }

    function factorialize(num) {
        if (num < 0)
                return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
        }
    const fact = factorialize(term);

    return (
        <div>
            <h1>Factorial</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { ml: 0, mt:     3, width: '25ch' },
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
            <h5>{fact}</h5>
        </div>
    )
}

export default Factorial;
