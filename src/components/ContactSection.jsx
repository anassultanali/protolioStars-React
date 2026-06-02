import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name} ${message}`);

    const phoneNumber = "+967779208780";
    let messageText = "";

    if (document.documentElement.lang === "ar") {
      messageText = `مرحبًا أنا ${name}.\n ${message}`;
    } else {
      messageText = `Hi, I'm ${name}.\n ${message}`;
    }
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t("contact.form.successTitle"),
        description: t("contact.form.successDesc"),
      });
      window.open(whatsappURL, "_blank");
    }, 2000);

    setName("");
    setMessage("");
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title1")}{" "}
          <span className="text-primary"> {t("contact.title2")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.contactInfo")}
            </h3>

            <div className="space-y-6 justify-center">
              <a
                href="mailto:anassultanali@gmail.com"
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.email")}</h4>
                  <p className="text-muted-foreground transition-colors">
                    anassultanali@gmail.com
                  </p>
                </div>
              </a>
              <a
                className="flex items-start  space-x-4"
                href="tel:+967779208780"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.phone")}</h4>
                  <p
                    className="text-muted-foreground text-center transition-colors"
                    dir="ltr"
                  >
                    +967 779 208 780
                  </p>
                </div>
              </a>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.location")}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {t("contact.locSub")}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{t("contact.socialTitle")}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/anas-sultan-502119242/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/anas_sultan_" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/w1n_er_/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.form.title")}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("contact.form.name.title")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.name.PH")}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("contact.form.message.title")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.form.message.PH")}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting
                  ? t("contact.form.btnSending")
                  : t("contact.form.btnSend")}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
