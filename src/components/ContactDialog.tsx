import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const ContactDialog = ({ children, variant = "default", size = "default", className }: ContactDialogProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const phoneNumber = "010-6217-1764";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    toast({
      title: "전화번호가 복사되었습니다",
      description: phoneNumber,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">문의하기</DialogTitle>
          <DialogDescription>
            아래 전화번호로 연락주시면 친절하게 안내해드리겠습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-xl font-semibold text-foreground">{phoneNumber}</span>
          </div>
          <Button onClick={copyToClipboard} className="w-full font-sans">
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                복사 완료!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                전화번호 복사하기
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
