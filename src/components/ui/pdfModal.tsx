import { Button } from "./button";
import { Document, Page, pdfjs } from "react-pdf";
import { Download } from "lucide-react";
import { handleDownload } from "../helper/download";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";

interface PdfModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
}

const PdfModal = ({ isOpen, onClose, pdfUrl } : PdfModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-hidden p-4 relative">
                <Button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    onClick={() => handleDownload(pdfUrl)}
                >
                    <Download />
                </Button>
                <div className="block">
                    <Document file={pdfUrl} className="w-fit max-h-screen text-black">
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </div>
    )
}

export default PdfModal;