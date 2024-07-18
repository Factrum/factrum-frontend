import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

const PageWrapper = ({ children, refCallback }) => {
  const pageRef = useRef();

  useEffect(() => {
    if (refCallback) {
      refCallback(pageRef);
    }
  }, [refCallback]);

  return <PageContainer ref={pageRef}>{children}</PageContainer>;
};

export const generatePDF = async (refs) => {
  const pdf = new jsPDF('p', 'pt', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  for (let i = 0; i < refs.length; i++) {
    const canvas = await html2canvas(refs[i].current);
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pdfWidth;
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    if (i > 0) {
      pdf.addPage();
    }
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  }

  pdf.save('result.pdf');
};

export default PageWrapper;
