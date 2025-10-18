import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import kakaoQR from "@/assets/kakao-qr.jpeg";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="잔차로드 로고" className="h-10 w-auto transition-transform group-hover:scale-110" />
              <span className="font-serif text-xl font-bold">잔차로드</span>
            </Link>
            <p className="text-dark-foreground/80 text-sm leading-relaxed mb-4">
              시니어를 위한 감성 자전거 여행 전문 브랜드
            </p>
            <ContactDialog variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Phone className="mr-2 h-4 w-4" />
              문의하기
            </ContactDialog>
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
            <ul className="space-y-3 mb-4">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-dark-foreground/80">010-6217-1764</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-dark-foreground/80">오픈 카카오톡</span>
              </li>
            </ul>
            <div>
              <a 
                href="https://open.kakao.com/o/p85EFJXh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-32 h-32 rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors"
              >
                <img 
                  src={kakaoQR} 
                  alt="카카오톡 오픈채팅 QR 코드" 
                  className="w-full h-full object-cover"
                />
              </a>
              <p className="text-xs text-dark-foreground/60 mt-2">
                QR코드를 스캔하여<br />카카오톡하기
              </p>
            </div>
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
