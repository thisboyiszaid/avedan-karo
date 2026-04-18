// src/app/page.tsx
import Link from 'next/link'
import {
  FileText,
  MapPin,
  CreditCard,
  CheckCircle,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Phone
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">Avedan Karo</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/apply"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-6">
            <Shield className="w-3 h-3" />
            Trusted by citizens across Jharkhand
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Government Documents,<br />
            <span className="text-blue-600">Made Simple</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Apply for any government or business document from home.
            We connect you with verified local agents who handle everything —
            fast, transparent, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-base"
            >
              Apply for a Document
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/agent/register"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors text-base"
            >
              Register as Agent
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500">Get your document done in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                step: '01',
                title: 'Choose Your Service',
                desc: 'Select the document or service you need from our list of 50+ government and business services.'
              },
              {
                icon: CreditCard,
                step: '02',
                title: 'Submit & Pay',
                desc: 'Fill in your details, upload required documents, and pay securely via UPI. Takes less than 5 minutes.'
              },
              {
                icon: MapPin,
                step: '03',
                title: 'Agent Takes Over',
                desc: 'A verified local agent near you picks up your request and completes it. You track every step.'
              }
            ].map((item) => (
              <div key={item.step} className="relative p-6 bg-gray-50 rounded-2xl">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Avedan Karo?</h2>
            <p className="text-gray-500">We built this for people like you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Verified Agents Only',
                desc: 'Every agent is manually verified before they can accept your work.'
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                desc: 'Most documents are completed within 3–7 working days.'
              },
              {
                icon: MapPin,
                title: 'Local Agents',
                desc: 'We match you with agents in your district who know your local requirements.'
              },
              {
                icon: CreditCard,
                title: 'UPI Payments',
                desc: 'Pay securely via any UPI app. No cash needed, no middlemen.'
              },
              {
                icon: CheckCircle,
                title: 'Live Tracking',
                desc: 'Track your application status in real time. No more waiting and wondering.'
              },
              {
                icon: Users,
                title: 'For Everyone',
                desc: 'Designed for citizens in tier-2 and tier-3 cities across Jharkhand.'
              }
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-gray-100">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-500 mb-8">
            Join thousands of citizens who have simplified their document work with Avedan Karo.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-base"
          >
            Apply for a Document Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm">Avedan Karo</span>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 Avedan Karo. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Phone className="w-3 h-3" />
            Support: support@avedankaro.in
          </div>
        </div>
      </footer>

    </main>
  )
}