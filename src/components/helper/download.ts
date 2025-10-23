export const handleDownload = (fileUrl: string) => {
    const regex = /^\/(?:[A-Za-z0-9._-]+\/)*[A-Za-z0-9._-]+\.[a-z]{2,}$/i;

    if (!regex.test(fileUrl)) return;
    const fileName = fileUrl.split('/').pop() as string;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
}