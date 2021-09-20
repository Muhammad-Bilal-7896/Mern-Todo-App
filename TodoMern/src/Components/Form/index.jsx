import { useState, useEffect } from "react";
import Tasks from "../Tasks";

import {
    Paper,
    TextField,
    Checkbox,
    Button
} from '@material-ui/core';

const Form = () => {
    const [currentTask, setCurrentTask] = useState("");

    return (
        <div className="App flex">
            <Paper elevation={3} className="container">
                <div className="heading">
                    TO-DO
                </div>
                <form
                    onSubmit={() => handleSubmit}
                    action=""
                    className="flex"
                >
                    <TextField
                        variant="outlined"
                        size="small"
                        className="TextField"
                        value={currentTask}
                        required={true}
                        onChange={(e) => setCurrentTask(e.target.value)}
                        placeholder="Add New TO-DO"
                    />
                    <Button
                    color="primary"
                    variant="outlined"
                    type="submit"
                     className="Button">
                    </Button>
                </form>
                <div>
                    
                </div>
            </Paper>
        </div>
    )
}
export default Form;