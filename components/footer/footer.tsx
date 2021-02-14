import React from 'react'
import { Github, Twitter, Facebook } from '../../icons'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Jobs
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Facebook />
          </a>

          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>

          <a
            href="https://github.com/dopplr-labs/dopplr"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <Github />
          </a>
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          © 2020 Dopplr, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
