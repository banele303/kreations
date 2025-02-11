import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">KReations</h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Capturing life's precious moments with creativity and passion.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h4>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">Email: kerakreations13@gmail.com</p>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">Phone: 069 393 6860</p>
            <p className="text-lg md:text-xl text-muted-foreground">Address: Johannesburg, South Africa</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center">
          <p className="text-muted-foreground">&copy; 2025 KReations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

