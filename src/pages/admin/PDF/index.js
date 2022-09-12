import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { InvoiceInfo } from "./PDFD";
import PDF from "./Sale";


export const InvoicePDF = () => {
  return (
    <PDFViewer width="80%" style={{ margin: "0 100px" }} height="600px">
      <Document>
        <Page size="A4">
          <InvoiceInfo />
        </Page>
      </Document>
    </PDFViewer>
  );
};
