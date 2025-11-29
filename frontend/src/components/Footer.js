// frontend/src/components/Footer.js
import React from 'react';
 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-300 mt-auto">
      <div className="border-t border-neutral-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">VeriStream</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Leveraging cutting-edge AI to ensure digital authenticity and protect against sophisticated deepfakes.
              </p>
              <div className="flex space-x-4"></div>
            </div>

            <div className="space-y-4"></div>

            
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-neutral-700/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-neutral-500">
              © {currentYear} VeriStream. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-neutral-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
