import { Home, LucideIcon, Mail, Phone, User } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  title,
  content,
}: {
  icon: LucideIcon;
  title: string;
  content: string;
}) => (
  <div className="flex flex-col items-center gap-2 w-36 md:w-40 lg:w-56">
    <div className="bg-black p-3 rounded-lg mb-2 hover:shadow-sm hover:shadow-orange-500">
      <Icon className="text-white size-6" />
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-400">{content}</p>
  </div>
);

const ContactUs = () => {
  const contacts = [
    { icon: Home, title: "Address", content: "28021, Madrid" },
    { icon: Mail, title: "Email", content: "ReactKit@google.com" },
    { icon: Phone, title: "Phone", content: "+34 666 66 66 66" },
    { icon: User, title: "Contact", content: "Daniel Bueno" },
  ];

  return (
    <div className="flex justify-center md:justify-between flex-wrap items-center gap-10 md:gap-4 p-8 bg-neutral-950/50 text-white rounded-lg shadow-lg border border-white/5">
      {contacts.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </div>
  );
};

export default ContactUs;
