import express from 'express';
import { body, validationResult } from 'express-validator';
// import isEmail from '../node_modules/validator/es/lib/isEmail';
// import isLength from '../node_modules/validator/es/lib/isLength';

const app = express();

app.use(express.json())

app.get('/' , (req, resp) => {
    resp.send("hey there!!!")
})

app.post('/reg',

    [
        // rule
        body("name").notEmpty().withMessage("name nhi hai bhdve!!"),
        body("email").notEmpty().isEmail().withMessage("email!!"),
        body('password').isLength({ min: 8 }).withMessage("pass is required!!!")
    ],
    (req, resp) => {
        // resp.json({ message: "trash" });
        const error = validationResult(req)
        if(!error.isEmpty()){
            return resp.json(error);
        }
        else {resp.send('regsca  successful')}
    }
)

app.listen(4800)