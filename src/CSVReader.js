import { useState } from 'react'
import { Input, Button } from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles({
    button: {

        margin: 15,
    }
})

export default function CsvReader(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]
const classes = useStyles();

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return(
        <form id='csv-form'>
            <Input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </Input>
            <br/>
            <Button className={classes.button}
                    variant='contained'
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}
            >
                Submit
            </Button>
            <br/>
            <br/>
            {csvArray.length>0 ?
                <>
                    <table>
                        <thead>
                        <th>Pitch</th>
                        <th>Result</th>
                        <th>Distance</th>
                        <th>Exit Velo</th>
                        <th>Launch Angle</th>

                        </thead>
                        <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.rank}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </> : null}
        </form>
    );

}