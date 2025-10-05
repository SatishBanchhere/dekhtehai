"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useRef } from "react"

export default function WebsiteShowcase() {
  const printRef = useRef()

  const handlePrint = () => {
    const printContent = printRef.current
    
    const printStyles = `
      <style>
        @media print {
          * { 
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body { 
            margin: 0; 
            padding: 20px;
            font-family: system-ui, -apple-system, sans-serif;
          }
          .no-print { display: none !important; }
          .print-container { 
            box-shadow: none !important; 
            border-radius: 0 !important;
            max-width: none !important;
            margin: 0 !important;
          }
          .bg-blue-600 { 
            background-color: #2563eb !important; 
            color: white !important;
          }
          .bg-blue-50 { 
            background-color: #eff6ff !important; 
          }
          .bg-gray-50 { 
            background-color: #f9fafb !important; 
          }
          .text-blue-600 { 
            color: #2563eb !important; 
          }
          .border-blue-500 { 
            border-color: #3b82f6 !important; 
          }
          .bg-gradient-to-r { 
            background: linear-gradient(to right, #eff6ff, #f0fdf4) !important; 
          }
        }
        @page {
          size: A4;
          margin: 0.5in;
        }
      </style>
    `

    const printWindow = window.open('', '', 'width=800,height=600')
    printWindow.document.write(`
      <html>
        <head>
          <title>Universal Learning Center - Website Preview</title>
          ${printStyles}
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          <div class="print-container">
            ${printContent.innerHTML}
          </div>
        </body>
      </html>
    `)
    
    printWindow.document.close()
    
    setTimeout(() => {
      printWindow.focus()
      printWindow.print()
      printWindow.close()
    }, 2500000)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg" ref={printRef}>
          
          {/* Header */}
          <div className="bg-blue-600 text-white p-6 rounded-t-lg">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Website Preview Gallery</h1>
              <p className="text-lg opacity-90">Universal Learning Center Platform</p>
              <div className="mt-4 text-sm">
                Complete CBT-based examination platform with 2,00,000+ premium questions
              </div>
            </div>
          </div>

          <div className="p-8">
            
            {/* Feature 1 - Test Series Landing Page */}
            <div className="mb-12">
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ▪ Test Series Landing Page
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Modern, responsive interface showcasing available tests with real-time statistics, 
                  filtering options for JEE, NEET, and MHT CET examinations. Features interactive 
                  test cards with progress tracking and availability status.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <Image
                  src="https://i.ibb.co/RpzF2LfS/image.png"
                  alt="Test Series Landing Page"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded border shadow-sm"
                  priority
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Interactive test cards with real-time data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Subject-wise filtering (JEE, NEET, MHT CET)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Progress tracking and performance analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">24/7 availability with active status indicators</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - CBT Examination Interface */}
            <div className="mb-12">
              <div className="border-l-4 border-green-500 pl-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ▪ CBT Examination Interface
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Professional Computer-Based Test environment with comprehensive question palette, 
                  countdown timer, and intuitive navigation system. Supports complex physics problems 
                  with diagrams and mathematical formulations matching real exam standards.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <Image
                  src="https://i.ibb.co/mC64g6N7/image.png"
                  alt="CBT Examination Interface"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded border shadow-sm"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Question palette with status tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Real-time countdown timer with auto-submission</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Complex physics problems with diagrams</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Multiple choice interface with review options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Admin Management Dashboard */}
            <div className="mb-12">
              <div className="border-l-4 border-orange-500 pl-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ▪ Admin Management Dashboard
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive administrative panel for complete platform control. Manage tests, 
                  monitor student submissions, track performance analytics, and control score releases. 
                  Features bulk operations and detailed reporting capabilities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <Image
                  src="https://i.ibb.co/G3QsvGJK/image.png"
                  alt="Admin Management Dashboard"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded border shadow-sm"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Test creation and management tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Student submissions tracking and analytics</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Score release and solution controls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">PDF generation for questions and answers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Overview */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">■ Platform Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2,00,000+</div>
                  <div className="text-sm text-gray-600">Premium Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Platform Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Responsive Design</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-lg font-semibold text-blue-600 mb-2">
                Complete Platform Development Package
              </p>
              <p className="text-sm text-gray-600">
                Modern, scalable, and feature-rich examination platform built with Next.js and React
              </p>
            </div>

          </div>
        </Card>
        
        {/* Print Button */}
        <div className="mt-6 text-center no-print">
          <button
            onClick={handlePrint}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Preview Gallery
          </button>
        </div>
      </div>
    </div>
  )
}
