// import { Facebook, Instagram, MessageCircle, Mail, Phone } from "lucide-react"

// export function Footer() {
//   return (
//     <footer className="bg-card border-t py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center space-y-8">
//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex justify-center gap-6">
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-6 h-6" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-6 h-6" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//                 aria-label="WhatsApp"
//               >
//                 <MessageCircle className="w-6 h-6" />
//                 <span className="sr-only">WhatsApp</span>
//               </a>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-2 text-muted-foreground">
//               <div className="flex items-center justify-center gap-2">
//                 <Mail className="w-4 h-4" />
//                 <span>anonymoustechie995@gmail.com</span>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <Phone className="w-4 h-4" />
//                 <span>+234 8164922863</span>
//               </div>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="pt-8 border-t border-border">
//             <p className="text-sm text-muted-foreground">© 2025 FREE Front-End Training. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


import { Facebook, MessageCircle, Mail, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // install react-icons if not installed

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://web.facebook.com/profile.php?id=61580497293276"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://x.com/@Queen5239563247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://wa.link/c0z2h6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>anonymoustechie995@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 8164922863</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 FREE Front-End Training. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

