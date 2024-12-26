// app/page.js
import Link from "next/link"
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-xl font-bold text-gray-900 hover:text-gray-600 transition"
              >
                YourBrand
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/docs" 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition"
              >
                Docs
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition"
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Build Something</span>
              <span className="block text-blue-600">Amazing Today</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Start your journey with our comprehensive documentation, powerful features, and amazing community support.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/docs"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-lg font-medium text-gray-900">Fast & Modern</h3>
              <p className="mt-2 text-gray-500">
                Built with the latest technologies to ensure maximum performance and modern developer experience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-lg font-medium text-gray-900">Fully Responsive</h3>
              <p className="mt-2 text-gray-500">
                Looks great on any device, with a mobile-first approach to ensure perfect display everywhere.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-lg font-medium text-gray-900">Developer First</h3>
              <p className="mt-2 text-gray-500">
                Extensive documentation and community support to help you build faster.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Devo-Apis. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/DEVOLUTION-BOT" className="text-gray-400 hover:text-gray-500 transition">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}