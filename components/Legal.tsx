
import React from 'react';

export const LegalModal: React.FC<{ type: 'tos' | 'privacy'; onClose: () => void }> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
      <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          Close
        </button>
        
        {type === 'tos' ? (
          <div className="prose prose-invert">
            <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
            <p className="text-white/60 mb-4">Effective Date: January 1, 2025</p>
            <h3 className="text-lg font-bold text-white mt-8 mb-2 text-[#39FF14]">1. Acceptance of Terms</h3>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              By adding Square to your Discord server, you agree to these Terms. Square provides invite tracking services "as is". We are not responsible for any data loss or server mismanagement resulting from bot usage.
            </p>
            <h3 className="text-lg font-bold text-white mt-8 mb-2 text-[#39FF14]">2. Bot Usage</h3>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              You may not use Square for any illegal activities or to violate Discord's ToS. We reserve the right to restrict access to any server found in violation.
            </p>
            <h3 className="text-lg font-bold text-white mt-8 mb-2 text-[#39FF14]">3. Limitation of Liability</h3>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Square's developers shall not be liable for any indirect, incidental, or consequential damages.
            </p>
          </div>
        ) : (
          <div className="prose prose-invert">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            <p className="text-white/60 mb-4">Effective Date: January 1, 2025</p>
            <h3 className="text-lg font-bold text-white mt-8 mb-2 text-[#39FF14]">1. Data Collection</h3>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Square collects minimal data required for its core function: Discord User IDs, Invite Codes, and Guild IDs. We do not collect message content, personal emails, or real-world identity data.
            </p>
            <h3 className="text-lg font-bold text-white mt-8 mb-2 text-[#39FF14]">2. Data Storage</h3>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Invite data is stored securely and is only accessible by server administrators through bot commands. We do not sell or share your data with third parties.
            </p>
            <h3 className="text-lg font-bold text-white mt-8 mb-2 text-[#39FF14]">3. Data Deletion</h3>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              All data associated with a guild is automatically queued for deletion within 30 days of the bot leaving the server.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
