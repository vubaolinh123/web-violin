import type { Locale } from "@/lib/i18n";

/**
 * Interface text shared across pages (navigation, footer, forms, buttons). Page-specific copy lives
 * next to each page in app/[lang]. Hrefs are English paths; pass them through localePath().
 */
const en = {
  site: {
    tagline: "The acoustic DNA of wood",
    description:
      "Strad Plus is a proprietary method that enhances the way wood resonates, responds and transmits vibration. Developed over more than thirty years by violinist, craftsman and researcher Nguyễn Xuân Huy, for musical instruments, architectural acoustics and sports equipment.",
  },
  nav: [
    { label: "Technology", href: "/technology" },
    { label: "Products", href: "/products" },
    { label: "Founder", href: "/founder" },
    { label: "Media", href: "/media" },
    { label: "Artists & Projects", href: "/artists-projects" },
  ],
  header: {
    home: "Strad Plus — home",
    contact: "Contact",
    contactLong: "Contact Strad Plus",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    language: "Language",
  },
  footer: {
    tagline: "The acoustic DNA of wood.",
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "Technology", href: "/technology" },
          { label: "Products", href: "/products" },
          { label: "Founder", href: "/founder" },
        ],
      },
      {
        heading: "Gallery",
        links: [
          { label: "Media", href: "/media" },
          { label: "Artists & Projects", href: "/artists-projects" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Distributors & Partners", href: "/request-evaluation" },
          { label: "Musicians & Owners", href: "/experience" },
        ],
      },
    ],
    rights: "All rights reserved.",
  },
  /** The two ways in: every "contact" entry point leads to these. */
  contactPaths: [
    {
      id: "partners",
      title: "For Distributors & Industry Partners",
      description:
        "We are looking for distributors, instrument shops, workshops and industry partners interested in evaluating Strad Plus and exploring opportunities to represent it in their local market.",
      cta: "Request an Evaluation Sample",
      href: "/request-evaluation",
      question: "Representing Strad Plus in your market?",
    },
    {
      id: "musicians",
      title: "For Musicians & Instrument Owners",
      description:
        "Interested in experiencing Strad Plus on your own instrument? Contact us to learn about product availability, ordering information and how Strad Plus can be applied to your instrument.",
      cta: "Contact Strad Plus",
      href: "/experience",
      question: "Looking for Strad Plus for your own instrument?",
    },
  ],
  reachDirectly: "Or reach us directly",
  details: "Details",
  video: {
    title: "Strad Plus on a $400 guitar — interview with Nguyễn Xuân Huy and guitarist Vũ Đức Hiển",
    play: "Play video",
    openDrive: "Open in Google Drive",
  },
  form: {
    optional: "(optional)",
    select: "Select",
    incomplete: "Please complete all fields marked {star} to send your request.",
    send: "Send Request",
    sending: "Sending…",
    limited: "You have just sent a request. Please wait {seconds} seconds before sending another.",
    unavailable: "Online sending is not available right now.",
    error: "Your request could not be sent.",
    writeTo: "Please write to",
    confirmation: "A confirmation has been sent to {email}.",
    thanksTitle: "Thank you for your interest in Strad Plus.",
    thanks: {
      evaluation:
        "We review every request personally and will contact you to discuss evaluation options and potential partnership opportunities.",
      experience: "We review every request personally and will contact you as soon as possible.",
    },
    labels: {
      name: "Name",
      company: "Company / Organisation",
      country: "Country",
      website: "Website / Social Media",
      email: "Email",
      businessType: "Type of Business",
      interests: "Areas of Interest",
      instrument: "Instrument",
      message: "Message",
    } as Record<string, string>,
    placeholders: {
      evaluation: "Tell us about your business and your interest in Strad Plus.",
      experience: "Tell us about your instrument and your interest in Strad Plus.",
    },
    /** Display names of select and checkbox options; the submitted values stay in English. */
    options: {} as Record<string, string>,
    email: {
      dear: "Dear {name},",
      sent: "For your reference, this is what you sent us:",
      regards: "Kind regards,",
    },
  },
  notFound: {
    title: "This page is out of tune.",
    text: "The page you are looking for does not exist or has moved.",
    home: "Home",
    products: "Products",
  },
};

export type Dictionary = typeof en;

const vi: Dictionary = {
  site: {
    tagline: "ADN âm học của gỗ",
    description:
      "Strad Plus là phương pháp độc quyền giúp gỗ cộng hưởng, phản hồi và truyền dao động tốt hơn. Được nghệ sĩ violin, nghệ nhân và nhà nghiên cứu Nguyễn Xuân Huy phát triển trong hơn ba mươi năm, ứng dụng cho nhạc cụ, âm học kiến trúc và dụng cụ thể thao.",
  },
  nav: [
    { label: "Công nghệ", href: "/technology" },
    { label: "Sản phẩm", href: "/products" },
    { label: "Nhà sáng lập", href: "/founder" },
    { label: "Thư viện", href: "/media" },
    { label: "Nghệ sĩ & Dự án", href: "/artists-projects" },
  ],
  header: {
    home: "Strad Plus — trang chủ",
    contact: "Liên hệ",
    contactLong: "Liên hệ Strad Plus",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    menu: "Menu",
    language: "Ngôn ngữ",
  },
  footer: {
    tagline: "ADN âm học của gỗ.",
    columns: [
      {
        heading: "Khám phá",
        links: [
          { label: "Công nghệ", href: "/technology" },
          { label: "Sản phẩm", href: "/products" },
          { label: "Nhà sáng lập", href: "/founder" },
        ],
      },
      {
        heading: "Thư viện",
        links: [
          { label: "Video & hình ảnh", href: "/media" },
          { label: "Nghệ sĩ & Dự án", href: "/artists-projects" },
        ],
      },
      {
        heading: "Liên hệ",
        links: [
          { label: "Nhà phân phối & Đối tác", href: "/request-evaluation" },
          { label: "Nghệ sĩ & Chủ nhạc cụ", href: "/experience" },
        ],
      },
    ],
    rights: "Bảo lưu mọi quyền.",
  },
  contactPaths: [
    {
      id: "partners",
      title: "Dành cho Nhà phân phối & Đối tác",
      description:
        "Chúng tôi đang tìm kiếm nhà phân phối, cửa hàng nhạc cụ, xưởng chế tác và đối tác trong ngành muốn trải nghiệm Strad Plus và cùng tìm cơ hội đại diện Strad Plus tại thị trường của mình.",
      cta: "Yêu cầu mẫu trải nghiệm",
      href: "/request-evaluation",
      question: "Bạn muốn đại diện Strad Plus tại thị trường của mình?",
    },
    {
      id: "musicians",
      title: "Dành cho Nghệ sĩ & Chủ nhạc cụ",
      description:
        "Bạn muốn trải nghiệm Strad Plus trên chính cây đàn của mình? Hãy liên hệ để biết về tình trạng sản phẩm, cách đặt hàng và cách Strad Plus được áp dụng cho nhạc cụ của bạn.",
      cta: "Liên hệ Strad Plus",
      href: "/experience",
      question: "Bạn tìm Strad Plus cho nhạc cụ của mình?",
    },
  ],
  reachDirectly: "Hoặc liên hệ trực tiếp",
  details: "Chi tiết",
  video: {
    title: "Strad Plus trên cây guitar 400 đô — trò chuyện cùng Nguyễn Xuân Huy và nghệ sĩ guitar Vũ Đức Hiển",
    play: "Phát video",
    openDrive: "Mở trên Google Drive",
  },
  form: {
    optional: "(không bắt buộc)",
    select: "Chọn",
    incomplete: "Vui lòng điền đủ các mục có dấu {star} để gửi yêu cầu.",
    send: "Gửi yêu cầu",
    sending: "Đang gửi…",
    limited: "Bạn vừa gửi một yêu cầu. Vui lòng đợi {seconds} giây trước khi gửi tiếp.",
    unavailable: "Hiện chưa thể gửi trực tuyến.",
    error: "Không gửi được yêu cầu của bạn.",
    writeTo: "Vui lòng gửi email tới",
    confirmation: "Thư xác nhận đã được gửi tới {email}.",
    thanksTitle: "Cảm ơn bạn đã quan tâm đến Strad Plus.",
    thanks: {
      evaluation:
        "Chúng tôi trực tiếp xem xét từng yêu cầu và sẽ liên hệ với bạn để trao đổi về mẫu trải nghiệm cũng như cơ hội hợp tác.",
      experience: "Chúng tôi trực tiếp xem xét từng yêu cầu và sẽ liên hệ với bạn sớm nhất có thể.",
    },
    labels: {
      name: "Họ tên",
      company: "Công ty / Tổ chức",
      country: "Quốc gia",
      website: "Website / Mạng xã hội",
      email: "Email",
      businessType: "Loại hình kinh doanh",
      interests: "Lĩnh vực quan tâm",
      instrument: "Nhạc cụ",
      message: "Lời nhắn",
    },
    placeholders: {
      evaluation: "Hãy cho chúng tôi biết về doanh nghiệp của bạn và mối quan tâm đến Strad Plus.",
      experience: "Hãy cho chúng tôi biết về nhạc cụ của bạn và mối quan tâm đến Strad Plus.",
    },
    options: {
      Distributor: "Nhà phân phối",
      "Instrument Shop": "Cửa hàng nhạc cụ",
      Workshop: "Xưởng chế tác",
      Manufacturer: "Nhà sản xuất",
      Other: "Khác",
      "Complete Strad Plus Process": "Quy trình Strad Plus trọn vẹn",
      "Strad Plus Violin Bridge & Soundpost Set": "Bộ ngựa đàn & hồn đàn violin Strad Plus",
      "Musical Instruments": "Nhạc cụ",
      "Architectural Acoustics": "Âm học kiến trúc",
      "Sports Equipment": "Dụng cụ thể thao",
      Violin: "Violin",
      Viola: "Viola",
      Cello: "Cello",
      "Double Bass": "Contrabass",
      Guitar: "Guitar",
      Piano: "Piano",
    },
    email: {
      dear: "Kính gửi {name},",
      sent: "Để tiện theo dõi, đây là nội dung bạn đã gửi:",
      regards: "Trân trọng,",
    },
  },
  notFound: {
    title: "Trang này đã lạc nhịp.",
    text: "Trang bạn tìm không tồn tại hoặc đã được chuyển đi.",
    home: "Trang chủ",
    products: "Sản phẩm",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

/** Fills {placeholders} in a dictionary string. */
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}
