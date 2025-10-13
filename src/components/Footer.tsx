import { Link } from "react-router-dom";
import { Bike, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Bike className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <span className="font-serif text-xl font-bold">잔차로드</span>
            </Link>
            <p className="text-dark-foreground/80 text-sm leading-relaxed mb-4">
              시니어를 위한 감성 자전거 여행 전문 브랜드
            </p>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Mail className="mr-2 h-4 w-4" />
              문의하기
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold mb-4">여행지</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vietnam" className="text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                  베트남 바이크 여행
                </Link>
              </li>
              <li>
                <Link to="/thailand" className="text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                  태국 바이크 여행
                </Link>
              </li>
              <li>
                <Link to="/laos" className="text-dark-foreground/80 hover:text-primary transition-colors text-sm">
                  라오스 바이크 여행
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-dark-foreground/80">02-1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-dark-foreground/80">info@jancharoad.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-foreground/20 pt-8 text-center">
          <p className="text-dark-foreground/60 text-sm">
            © 2025 잔차로드 JANCHAroad — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
