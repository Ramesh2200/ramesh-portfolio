export const projects = [
  {
    id: "smart-parking-system",
    title: "Smart Vehicle Parking Management System",
    tagline: "Commercial Smart Mobility & IoT Optical Telemetry Platform",
    year: "2026",
    stack: ["HTML5", "CSS3", "JavaScript", "React.js", "Java", "Spring Boot", "RESTful APIs", "MVC", "SQL", "JDBC", "Servlets", "JSP", "Razorpay", "ZXing QR"],
    description:
      "Engineered a full-stack smart parking management platform using React.js, Java, Spring Boot, Servlets, JSP, JDBC, and SQL, enabling automated parking-slot booking, vehicle entry/exit tracking, and centralized parking operations.",
    databaseDetails:
      "Architected RESTful APIs and MVC-based services with SQL integration for user, vehicle, slot, booking, and transaction management, reducing manual administrative workflows. Developed responsive user and admin dashboards with secure authentication, real-time slot availability, automated fee calculation, and centralized management.",
    features: [
      "32-Bay Live Optical Telemetry",
      "Razorpay Digital Gateway Integration",
      "Cryptographic QR Gate Passes",
      "Centralized Facility Control Room",
      "Automated A4 PDF Tax Invoicing",
      "Google OAuth 2.0 & Gmail 2FA OTP",
      "Real-Time Space Allocation",
      "Touchless Barrier Clearance"
    ],
    entities: ["Users", "Vehicles", "Parking Slots", "Bookings", "Admin Users", "OTP Store", "Notifications"],
    liveUrl: "https://smart-parking-system-murex.vercel.app/",
    githubUrl: "https://github.com/Ramesh2200/smart-parking-system",
    logo: "/assets/smart-parking-logo.svg",
    logoMark: "/assets/smart-parking-mark.svg",
    poster: "/assets/smart-parking-8k-hd.jpg",
    fullExplanationImg: "/assets/smart-parking-8k-hd.jpg",
    previewImage: "/assets/smart-parking-8k-hd.jpg",
    dashboardImage: "/assets/smart-parking-dashboard.jpg",
    is8kHd: true,
    gradient: "linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)",
    accentColor: "#00f2fe",
    metrics: [
      { label: "Visual Fidelity", value: "8K Ultra HD" },
      { label: "Bays Telemetry", value: "32 Monitored" },
      { label: "Gate Clearance", value: "< 2s Optical QR" }
    ]
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    tagline: "Full-Stack Enterprise Shopping Platform",
    year: "2026",
    stack: ["React.js", "Spring Boot", "Hibernate", "REST APIs", "MySQL"],
    description:
      "Developed a full-stack E-Commerce Website using React.js, Spring Boot, Hibernate, REST APIs, and MySQL, implementing authentication, product search and filtering, cart management, checkout, order placement, and admin management.",
    databaseDetails:
      "Designed and integrated a relational MySQL database with RESTful backend services for CRUD operations, users, products, categories, carts, orders, and order items, and deployed the application on Vercel.",
    features: [
      "Authentication",
      "Product Search",
      "Product Filtering",
      "Cart Management",
      "Checkout",
      "Order Placement",
      "Admin Management",
      "REST APIs",
      "MySQL",
      "CRUD Operations"
    ],
    entities: ["Users", "Products", "Categories", "Carts", "Orders", "Order Items"],
    liveUrl: "https://ecommerce-app-1508.vercel.app",
    videoFile: "https://youtu.be/iNZVWkgSFf4?si=rof21b1wAWyszKaR",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iNZVWkgSFf4?rel=0",
    youtubeUrl: "https://youtu.be/iNZVWkgSFf4?si=rof21b1wAWyszKaR",
    fallbackVideo: "/videos/ecommerce-demo.mp4",
    poster: "/assets/ecommerce-demo-showcase-16x9.png",
    fullExplanationImg: "/assets/ecommerce-demo-showcase.png",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)",
    accentColor: "#10b981",
    metrics: [
      { label: "Architecture", value: "RESTful MVC" },
      { label: "Database", value: "MySQL Relations" },
      { label: "Deployment", value: "Vercel + Cloud" }
    ]
  },
  {
    id: "food-order-delivery",
    title: "Food Order & Delivery Application",
    tagline: "End-to-End Culinary Ordering & Tracking Engine",
    year: "2026",
    stack: ["React.js", "Spring Boot", "Hibernate", "REST APIs", "MySQL"],
    description:
      "Developed a full-stack Food Order & Delivery Application using React.js, Spring Boot, Hibernate, REST APIs, and MySQL, implementing restaurant browsing, food search, filtering, authentication, cart management, checkout, order placement, and order tracking.",
    databaseDetails:
      "Built RESTful backend services and integrated MySQL for managing users, restaurants, food items, carts, orders, and payments, with a responsive frontend deployed on Vercel.",
    features: [
      "Restaurant Browsing",
      "Food Search",
      "Filtering",
      "Authentication",
      "Cart Management",
      "Checkout",
      "Order Placement",
      "Order Tracking",
      "REST APIs",
      "MySQL",
      "Payments"
    ],
    entities: ["Users", "Restaurants", "Food Items", "Carts", "Orders", "Payments"],
    liveUrl: "https://feastflow-food-delivery.vercel.app",
    videoFile: "/videos/food-delivery-demo.mp4",
    poster: "/assets/food-delivery-explanation-crop.jpg",
    fullExplanationImg: "/assets/ramesh-project-explanation.jpg",
    gradient: "linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)",
    accentColor: "#f97316",
    metrics: [
      { label: "State Tracking", value: "Real-time Flow" },
      { label: "Payment Service", value: "Integrated Flow" },
      { label: "Frontend", value: "Responsive React" }
    ]
  }
];
