'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface AdobeFileConfig {
  content: {
    location: {
      url: string;
    };
  };
  metaData: {
    fileName: string;
  };
}

interface AdobeViewOptions {
  embedMode: string;
  showDownloadPDF: boolean;
  showPrintPDF: boolean;
}

declare global {
  interface Window {
    AdobeDC?: {
      View: new (config: { clientId: string; divId: string }) => {
        previewFile: (file: AdobeFileConfig, options: AdobeViewOptions) => void;
      };
    };
  }
}

export default function Resume() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://documentservices.adobe.com/view-sdk/viewer.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.AdobeDC) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: 'your-client-id', // You'll need to get this from Adobe
          divId: 'adobe-dc-view',
        });

        adobeDCView.previewFile({
          content: { location: { url: '/cjkorver_resume.pdf' } },
          metaData: { fileName: 'Calvin Korver Resume.pdf' }
        }, {
          embedMode: 'SIZED_CONTAINER',
          showDownloadPDF: true,
          showPrintPDF: true,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <a 
            href="/cjkorver_resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block transition-colors"
          >
            Download PDF
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div 
            id="adobe-dc-view" 
            className="w-full"
            style={{ height: '800px' }}
          >
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Loading PDF viewer...</p>
                <p className="text-sm text-gray-500">
                  If the viewer doesn&apos;t load, you can{' '}
                  <a 
                    href="/cjkorver_resume.pdf" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view the PDF directly
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}