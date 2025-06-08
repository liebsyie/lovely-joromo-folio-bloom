
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-slate-400 mb-2">
            © 2025 Lovely Joromo. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="text-red-400" size={16} /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
