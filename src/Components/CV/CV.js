import { Button, Grid } from '@material-ui/core'
import React from 'react'
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import resumePDF from './Resume_2020.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CV() {
    return (
        <Grid container spacing={3} justify="center">
            <Grid item>
                <Document
                file={resumePDF}
                renderMode="canvas"
                >
                    <Page size="A4" pageIndex={0} />
                    </Document>
            </Grid>
            <Grid item>
                <Button
                variant="outlined"
                startIcon={<CloudDownloadOutlinedIcon/>}>
                    Download
                </Button>
            </Grid>
        </Grid>
    )
}