// siteConfig.js
// Single source of truth cho toàn bộ nội dung có thể chỉnh sửa của website.
// Sửa các giá trị trong file này để cập nhật text/số liệu/link — KHÔNG hardcode trực tiếp trong index.html.

window.siteConfig = {
  pageTitle: "Phòng Khám TMH ABC Đà Nẵng — Tai Mũi Họng Chuyên Khoa",

  brand: {
    namePrefix: "Phòng Khám",
    name: "TAI MŨI HỌNG ABC",
    fullName: "Phòng Khám TMH ABC",
    tagline: "Đồng hành chăm sóc - An tâm điều trị",
    description: "Chuyên khoa Tai Mũi Họng hàng đầu tại Đà Nẵng. Công nghệ nội soi Olympus hiện đại, điều trị tận tâm cho cả người lớn và trẻ em.",
    logo: "LOGO%20TMH_1@3x.png",
    logoAlt: "Phòng Khám TMH ABC",
  },

  contact: {
    phone: "0856 983 929",
    phoneHref: "tel:0856983929",
    addressLine1: "30 Đỗ Bá, Ngũ Hành Sơn",
    addressLine2: "Đà Nẵng, Việt Nam",
    addressFull: "30 Đỗ Bá, Ngũ Hành Sơn, Đà Nẵng",
    locationNote: "Cách Cầu Rồng 5 phút di chuyển. Có chỗ đỗ xe ô tô rộng rãi.",
    zaloUrl: "https://zalo.me/0856983929",
    zaloDisplay: "Zalo: Phòng khám TMH ABC",
    zaloShort: "Phòng khám TMH ABC",
    mapsUrl: "https://maps.app.goo.gl/search/Phòng+khám+TMH+ABC+Đà+Nẵng",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.110332822556!2d108.24357637583688!3d16.05976508461706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f0a8d6715%3A0x673993414918e77a!2zMzAgxJDhu5YgQsOhLCBC4bqvYyBN4bu5IFBow7osIE5nxakgSGFuaCBTxqFuLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1715852434567!5m2!1sen!2s",
  },

  hours: {
    daysFull: "Thứ 2 — Chủ nhật",
    daysAll: "Tất cả các ngày",
    schedule: "17:00 – 21:00",
    summary: "Mở 7 ngày/tuần · 17:00–21:00",
    heroBadge: "Mở 17:00–21:00 mỗi ngày",
    note: "Lưu ý: Quý khách vui lòng đặt lịch trước để tránh chờ đợi.",
  },

  stats: {
    rating: "4.9",
    ratingMax: "5",
    reviewCount: "149+",
    customerCount: "1.300+",
    successRate: "97%",
    heroBadgeRating: "4.9 / 5 — 149+ đánh giá Google",
    trustReviewsHtml: "149+ Đánh giá<br/>trên Google",
    trustCertified: "Chứng chỉ Bộ Y tế Việt Nam",
    trustSchedule: "Mở 7 ngày/tuần · 17:00–21:00",
    reviewsRatingBadge: "4.9/5",
    reviewsGoogleNote: "trên Google Maps",
  },

  cta: {
    bookNow: "Đặt lịch ngay",
    bookShort: "Đặt lịch",
    callPhone: "Gọi: 0856 983 929",
    confirmDesktop: "Xác nhận",
    confirmMobile: "Xác nhận đặt lịch",
    contactSubmit: "Gửi yêu cầu đặt hẹn",
    modalSubmit: "Xác nhận đặt lịch",
    viewAllReviews: "Xem tất cả đánh giá",
  },

  nav: {
    services: "Dịch vụ",
    team: "Đội ngũ",
    contact: "Liên hệ",
    book: "Đặt lịch",
    langVN: "VN",
    langEN: "EN",
  },

  hero: {
    title: "PHÒNG KHÁM TAI MŨI HỌNG ABC",
    subtitle: "Đồng hành chăm sóc - An tâm điều trị",
    description: "Chuyên khoa Tai Mũi Họng hàng đầu tại Đà Nẵng. Công nghệ nội soi Olympus hiện đại, điều trị tận tâm cho cả người lớn và trẻ em.",
  },

  heroForm: {
    nameLabel: "Họ Tên",
    nameLabelMobile: "Họ Tên *",
    namePlaceholder: "Nguyễn Văn A",
    phoneLabel: "Điện thoại",
    phoneLabelMobile: "Điện thoại *",
    phonePlaceholder: "0856 983 929",
    dateLabel: "Ngày hẹn",
    serviceLabel: "Dịch vụ",
    validationMessage: "Vui lòng điền đầy đủ Họ tên và Số điện thoại",
  },

  servicesSection: {
    heading: "Dịch vụ tại Phòng Khám Tai Mũi Họng ABC",
    subtitle: "Phác đồ điều trị hiện đại, thiết bị chuẩn quốc tế mang lại kết quả chính xác nhất.",
  },

  services: [
    {
      icon: "hearing",
      iconFilled: true,
      title: "Khám & Điều Trị Tai",
      description: "Điều trị viêm tai giữa, ù tai, nghe kém ở người già và trẻ em bằng công nghệ vi phẫu hiện đại.",
      features: ["Đo thính lực chuẩn xác", "Vệ sinh tai bằng máy hút"],
      featured: true,
    },
    {
      icon: "air",
      iconFilled: false,
      title: "Mũi - Xoang",
      description: "Điều trị viêm xoang mạn tính, polyp mũi, lệch vách ngăn bằng nội soi.",
    },
    {
      icon: "voice_over_off",
      iconFilled: false,
      title: "Họng - Thanh quản",
      description: "Cắt Amidan, nạo VA bằng phương pháp Coblator ít đau, phục hồi nhanh.",
    },
    {
      icon: "videocam",
      iconFilled: false,
      title: "Nội soi TMH",
      description: "Sử dụng ống nội soi mềm Olympus mang lại hình ảnh sắc nét, không gây khó chịu.",
    },
    {
      icon: "neurology",
      iconFilled: false,
      title: "Điều trị chuyên sâu",
      description: "Tư vấn và điều trị các bệnh lý phức tạp vùng đầu mặt cổ.",
    },
  ],

  facilitySection: {
    heading: "Giới Thiệu Phòng Khám Của Chúng Tôi",
    videoEmbedSrc: "https://www.youtube.com/embed/olBeDdKXGQ0?rel=0",
    videoTitle: "Phòng Khám TMH ABC — Cơ sở vật chất & thiết bị",
  },

  team: [
    {
      icon: "verified_user",
      iconFilled: true,
      title: "Chứng chỉ Bộ Y tế",
      description: "100% bác sĩ được cấp chứng chỉ hành nghề chuyên khoa Tai Mũi Họng theo tiêu chuẩn Bộ Y tế Việt Nam.",
    },
    {
      icon: "public",
      iconFilled: true,
      title: "Phác đồ Quốc tế",
      description: "Áp dụng phác đồ điều trị cập nhật theo tiêu chuẩn AAO-HNS (Hội TMH Hoa Kỳ) và WHO.",
    },
    {
      icon: "emoji_events",
      iconFilled: true,
      title: "1.300+ Khách hàng",
      description: "Hơn 500 ca nội soi và điều trị thành công, tỷ lệ hài lòng trên 97% theo khảo sát bệnh nhân.",
    },
  ],

  reviewsSection: {
    tagline: "CẢM NHẬN BỆNH NHÂN",
    heading: "Khách hàng nói gì?",
    googleLabel: "Google",
  },

  reviews: [
    {
      name: "Nikita Zhukov",
      location: "Đà Nẵng",
      date: "Tháng 1/2026",
      rating: 5,
      quote: "\"Tôi đến đây khi đang rất khó chịu vì viêm amidan mãn tính tái phát. Bác sĩ thăm khám kỹ lưỡng bằng thiết bị hiện đại, kê đơn chính xác và tôi khỏi hoàn toàn sau 1 tuần. Điều đặc biệt là phòng khám còn gọi hỏi thăm sau 3 ngày — điều tôi chưa từng gặp ở đâu. Rất biết ơn!\"",
    },
    {
      name: "Александр А.",
      location: "Quảng Nam",
      date: "Tháng 2/2026",
      rating: 5,
      quote: "\"Con trai tôi bị đau tai nặng, đến đây được khám nhanh và chuyên nghiệp. Bác sĩ chẩn đoán đúng, điều trị không dư thừa và bé khỏi hoàn toàn sau 1 tuần. Ấn tượng nhất là phòng khám gọi hỏi thăm sau đó — điều này chưa bao giờ xảy ra với chúng tôi. Tôi thực sự tin tưởng giới thiệu nơi này.\"",
    },
    {
      name: "Chị Lan Hương",
      location: "Đà Nẵng",
      date: "Tháng 1/2026",
      rating: 5,
      quote: "\"Cháu nhà tôi rất sợ đi khám nhưng bác sĩ rất khéo. Nội soi nhanh và bé hợp tác tốt. Rất an tâm khi khám ở đây.\"",
    },
  ],

  serviceOptions: ["Khám tổng quát", "Nội soi TMH", "Điều trị Tai", "Họng - Thanh quản"],

  contactSection: {
    formHeading: "Liên hệ & Đặt hẹn Chi tiết",
    nameLabel: "Họ và Tên *",
    namePlaceholder: "Nguyễn Văn A",
    phoneLabel: "Số điện thoại *",
    phonePlaceholder: "0856 983 929",
    reasonLabel: "Lý do khám / Triệu chứng",
    reasonPlaceholder: "Ví dụ: Đau tai, ngạt mũi kéo dài...",
    submit: "Gửi yêu cầu đặt hẹn",
  },

  quickSupport: {
    heading: "Hỗ trợ nhanh",
    zaloLabel: "Zalo: Phòng khám TMH ABC",
    zaloNote: "Nhắn tin đặt lịch nhanh",
    hotlineLabel: "Hotline: 0856 983 929",
    hotlineNote: "Gặp trực tiếp tư vấn viên",
  },

  hoursCard: {
    heading: "Giờ làm việc",
    days: "Thứ 2 — Chủ nhật",
    schedule: "17:00 – 21:00",
    note: "Lưu ý: Quý khách vui lòng đặt lịch trước để tránh chờ đợi.",
  },

  locationCard: {
    heading: "Vị trí của chúng tôi",
    addressLine1: "30 Đỗ Bá, Ngũ Hành Sơn",
    addressLine2: "Đà Nẵng, Việt Nam",
    note: "Cách Cầu Rồng 5 phút di chuyển. Có chỗ đỗ xe ô tô rộng rãi.",
  },

  footer: {
    descriptionPrefix: "Chuyên khoa Tai Mũi Họng tại Đà Nẵng — ",
    descriptionEm: "Đồng hành chăm sóc, an tâm điều trị.",
    contactHeading: "Liên hệ",
    hoursHeading: "Giờ hoạt động",
    daysAll: "Tất cả các ngày",
    schedule: "17:00 – 21:00",
    copyright: "© 2024–2026 Phòng Khám TMH ABC. All rights reserved.",
  },

  modal: {
    heading: "Đặt lịch hẹn",
    subtitle: "Vui lòng để lại thông tin, chúng tôi sẽ liên hệ xác nhận sớm nhất.",
    nameLabel: "Họ và Tên *",
    namePlaceholder: "Nguyễn Văn A",
    phoneLabel: "Số điện thoại *",
    phonePlaceholder: "0856 983 929",
    dateLabel: "Ngày hẹn",
    timeLabel: "Giờ khám",
    timePlaceholder: "Chọn giờ",
    timeSlots: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
    serviceLabel: "Dịch vụ",
    submit: "Xác nhận đặt lịch",
  },

  fab: {
    bookLabel: "Đặt lịch ngay",
    zaloLabel: "Nhắn Zalo",
    phoneLabel: "Gọi 0856 983 929",
    bookAriaLabel: "Đặt lịch khám",
    zaloAriaLabel: "Nhắn Zalo",
    phoneAriaLabel: "Gọi ngay",
    zaloButtonText: "Zalo",
  },

  // English translations cho language toggle
  translationsEN: {
    brand_vn: "ABC ENT CLINIC",
    nav_services: "Services",
    nav_team: "Team",
    nav_contact: "Contact",
    nav_book: "Book Now",
    hero_title: "Specialized ENT Care",
    hero_subtitle: "Caring with every breath",
    hero_desc: "Leading ENT specialist in Da Nang. Olympus endoscopy technology, dedicated treatment for adults and children.",
    hero_book: "Book Appointment",
    hero_call: "Call: 0856 983 929",
  },
};
