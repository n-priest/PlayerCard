import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        maxWidth: 175,
    }
});

function createData(result, pitch, distance, exitvelo, launchangle) {
    return { result, pitch, distance, exitvelo, launchangle };
}

const rows = [
    createData(1, "Home Run", 340, 89, 35),
    createData(2, "Home Run", 398, 102, 22),
    createData(3, "Home Run", 329, 101, 27),
    createData(4, "Home Run", 350, 99, 25),
    createData(5, "Home Run", 377, 85, 33)
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{maxHeight: 300}}>
            <Table className={classes.table} aria-label="simple table" stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Pitch</TableCell>
                        <TableCell align="center" padding="none">
                            Result
                        </TableCell>
                        <TableCell align="center" padding="none">
                            Dist.
                        </TableCell>
                        <TableCell align="center" padding="none">Exit Velo</TableCell>
                        <TableCell align="center">Launch Angle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.pitch}>
                            <TableCell component="th" scope="row">
                                {row.result}
                            </TableCell>
                            <TableCell align="center">{row.pitch}</TableCell>
                            <TableCell align="center">{row.distance}</TableCell>
                            <TableCell align="center">{row.exitvelo}</TableCell>
                            <TableCell align="center">{row.launchangle}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
