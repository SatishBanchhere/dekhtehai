"use client"
import { Card } from "@/components/ui/card"
import { useRef } from "react"

export default function QuotationPage() {
  const printRef = useRef()

  const handlePrint = () => {
    const printContent = printRef.current
    const originalContents = document.body.innerHTML
    
    // Create print styles
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
          .bg-orange-100 { 
            background-color: #fed7aa !important; 
          }
          .bg-yellow-50 { 
            background-color: #fefce8 !important; 
          }
          .border-orange-400 { 
            border-color: #fb923c !important; 
          }
          .border-yellow-200 { 
            border-color: #fde047 !important; 
          }
          .text-blue-600 { 
            color: #2563eb !important; 
          }
          .text-orange-700 { 
            color: #c2410c !important; 
          }
          .text-orange-600 { 
            color: #ea580c !important; 
          }
          .border-blue-500 { 
            border-color: #3b82f6 !important; 
          }
          .border-green-500 { 
            border-color: #22c55e !important; 
          }
          .border-purple-500 { 
            border-color: #a855f7 !important; 
          }
          .border-orange-500 { 
            border-color: #f97316 !important; 
          }
          .border-red-500 { 
            border-color: #ef4444 !important; 
          }
          .border-green-500 { 
            border-color: #22c55e !important; 
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

    // Open print window
    const printWindow = window.open('', '', 'width=800,height=600')
    printWindow.document.write(`
      <html>
        <head>
          <title>Universal Learning Center - Project Quotation</title>
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
    
    // Wait for content to load then print
    setTimeout(() => {
      printWindow.focus()
      printWindow.print()
      printWindow.close()
    }, 250)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg" ref={printRef}>
          {/* Header */}
          <div className="bg-blue-600 text-white p-6 rounded-t-lg">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">VNIT Nagpur</h1>
                <p className="text-sm mt-1 opacity-90">Web & Mobile Solutions</p>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold">Contact Details</div>
                <div className="mt-2 space-y-1">
                  <div>▪ VNIT Nagpur, Maharashtra, India</div>
                  <div>▪ +917985257062</div>
                  <div>▪ rishabh5400tiwari@gmail.com</div>
                  <div>▪ mchdev.studio</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-3xl font-bold">PROJECT QUOTATION</h2>
              <div className="text-lg">QUOT-2025-ULC-001</div>
            </div>
          </div>

          {/* Quotation Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Prepared For:</h3>
                <div className="text-gray-600">
                  <div className="font-medium text-xl text-blue-600">Universal Learning Center</div>
                  <div className="mt-2 text-sm">
                    <div><strong>Established:</strong> 1996 • 29 Years in Business</div>
                    <div><strong>Specialization:</strong> IIT JEE, JEE Main/Advanced, NEET, MHT CET</div>
                    <div><strong>Subjects:</strong> PCB, PCM, Science</div>
                    <div><strong>Classes:</strong> XI, XII (CBSE)</div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800 mb-2">Quotation Details:</h3>
                <div className="text-gray-600 space-y-1">
                  <div>Date: October 4, 2025</div>
                  <div>Quotation #: QUOT-2025-ULC-001</div>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 text-xl mb-3">■ Project Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                Complete website redesign and development for Universal Learning Center featuring a modern, responsive
                design with integrated Computer-Based Test (CBT) platform for JEE Main, JEE Advanced, and NEET
                examination preparation. The platform will include comprehensive test management, student performance
                tracking, and administrative controls.
              </p>
              {/* Highlight for 2 lakh questions */}
              <div className="mt-4 bg-orange-100 border-l-4 border-orange-400 p-3 rounded">
                <p className="text-orange-700 font-medium text-sm">
                  ▲ <strong>2,00,000+ Premium Questions</strong> across JEE, NEET & MHT CET included in the platform
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 text-xl mb-4">■ Scope of Work & Features</h3>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">▪ Modern Website Design & Development</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Contemporary, mobile-responsive design with intuitive navigation</li>
                    <li>• Professional UI/UX optimized for student engagement</li>
                    <li>• Fast-loading, SEO-optimized architecture for better search visibility</li>
                    <li>• Cross-browser compatibility and accessibility standards</li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">▪ Advanced Exam Preparation Platform</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• <strong className="text-orange-600">2,00,000+ premium questions</strong> across JEE Main, JEE Advanced & NEET</li>
                    <li>• Real-time question palette with status tracking (Answered, Not Answered, Marked for Review)</li>
                    <li>• Countdown timer and auto-submission functionality</li>
                    <li>• Support for multiple question types (MCQ, numerical, etc.)</li>
                    <li>• Instant score calculation with detailed analytics</li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">▪ PDF Generation & Solutions System</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Convert any CBT paper to printable PDF format</li>
                    <li>• High-quality formatting preserving questions and diagrams</li>
                    <li>• Interactive step-by-step solutions with one-click reveal</li>
                    <li>• Detailed explanations with concepts and formulas</li>
                    <li>• Solution printing capabilities</li>
                  </ul>
                </div>

                {/* Feature 4 */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">▪ Comprehensive Admin Management</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Content management system for easy updates</li>
                    <li>• Question bank management with bulk upload capabilities</li>
                    <li>• Student performance tracking and analytics</li>
                    <li>• Test creation and scheduling tools</li>
                    <li>• Website content editing capabilities</li>
                  </ul>
                </div>

                {/* Feature 5 */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">▪ SEO & Performance Optimization</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Search engine optimization for better visibility</li>
                    <li>• Global SEO & Local SEO for Nagpur and Maharashtra region</li>
                    <li>• Fast loading speeds and performance optimization</li>
                    <li>• Google Analytics integration and tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 text-xl mb-3">■ Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-gray-700 mb-2">Frontend Technologies:</div>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Next.js / React.js</li>
                    <li>• Tailwind CSS</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-2">Backend & Database:</div>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Node.js / Next.js API Routes</li>
                    <li>• PostgreSQL / MongoDB</li>
                    <li>• Secure authentication (JWT)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-2">Hosting & Deployment:</div>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Vercel / AWS / DigitalOcean</li>
                    <li>• SSL Certificate included</li>
                    <li>• CDN for fast content delivery</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-2">Support & Maintenance:</div>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 6 months free support</li>
                    <li>• Training for admin panel</li>
                    <li>• Documentation provided</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 text-xl mb-4">■ Project Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Week 1: Design & Planning</div>
                    <div className="text-sm text-gray-600">UI/UX design, wireframes, and project architecture</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Week 2-3: Core Development</div>
                    <div className="text-sm text-gray-600">Frontend development, CBT platform, and admin panel</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Week 3: Testing & Refinement</div>
                    <div className="text-sm text-gray-600">Quality assurance, bug fixes, and performance optimization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-800 text-xl mb-4">■ Investment Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Complete Website Development</span>
                  <span className="font-medium text-gray-800">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">CBT Platform with 2 Lakh Questions</span>
                  <span className="font-medium text-gray-800">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Admin Panel & CMS (Content Management System)</span>
                  <span className="font-medium text-gray-800">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">SEO Optimization</span>
                  <span className="font-medium text-gray-800">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">6 Months Support & Maintenance</span>
                  <span className="font-medium text-gray-800">Included</span>
                </div>
                <div className="border-t-2 border-blue-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Total Project Cost</span>
                    <span className="text-2xl font-bold text-blue-600">₹80,000 - ₹90,000</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-right">
                    *Final pricing based on specific customization requirements
                  </p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-500 mt-4">
                  <div className="text-sm text-gray-700">
                    <strong>▲ Bonus:</strong> 6 months free maintenance and technical support included
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 text-xl mb-4">■ Payment Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-600 mb-1">40% Advance</div>
                  <div className="text-gray-600">₹32,000 - ₹36,000</div>
                  <div className="text-xs text-gray-500 mt-1">Upon project confirmation</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-600 mb-1">40% Mid-Development</div>
                  <div className="text-gray-600">₹32,000 - ₹36,000</div>
                  <div className="text-xs text-gray-500 mt-1">After core development completion</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-600 mb-1">20% Final</div>
                  <div className="text-gray-600">₹16,000 - ₹18,000</div>
                  <div className="text-xs text-gray-500 mt-1">Upon successful deployment</div>
                </div>
              </div>
            </div>

            {/* Future Opportunities */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <h4 className="font-semibold text-gray-800 mb-2">▲ Future Enhancement Opportunity</h4>
              <p className="text-sm text-gray-600">
                Upon successful completion of the website project, we can discuss additional services including 
                Android mobile application development, advanced analytics integration, and custom learning 
                management system features to further enhance your digital presence.
              </p>
            </div>

            {/* Footer */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-blue-600 font-medium text-lg mb-2">Ready to Transform Your Digital Presence?</p>
              <p className="text-sm text-gray-600 mb-4">Let's discuss how we can bring Universal Learning Center's vision to life!</p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:+917985257062"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                >
                  ▪ Call Now: +91 7985257062
                </a>
                <a
                  href="mailto:rishabh5400tiwari@gmail.com"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-block"
                >
                  ▪ Email Us
                </a>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Print Button - Hidden during print */}
        <div className="mt-6 text-center no-print">
          <button
            onClick={handlePrint}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Quotation
          </button>
        </div>
      </div>
    </div>
  )
}
