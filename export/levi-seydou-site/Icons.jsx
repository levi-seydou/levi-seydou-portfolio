// Icons.jsx — Lucide-style line icons (documented substitute for relume-icons / Material Symbols).
// Thin 1.5–2px stroke, rounded line joins. Inline SVG so there's no CDN timing dependency.
const Icon = ({ d, size = 24, fill = "none", stroke = "currentColor", sw = 2, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
    {d ? <path d={d} /> : children}
  </svg>
);

const ChevronDown = (p) => <Icon {...p} d="m6 9 6 6 6-6" />;
const ChevronRight = (p) => <Icon {...p} d="m9 18 6-6-6-6" />;
const ArrowRight = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Icon>;
const MenuIcon = (p) => <Icon {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Icon>;
const CloseIcon = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>;

// Feature icons (substitutes for Material Symbols communities/image/photo/add_business)
const CameraIcon = (p) => <Icon {...p} sw={1.5}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></Icon>;
const UsersIcon = (p) => <Icon {...p} sw={1.5}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
const PortraitIcon = (p) => <Icon {...p} sw={1.5}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M6.5 19a5.5 5.5 0 0 1 11 0" /></Icon>;
const BuildingIcon = (p) => <Icon {...p} sw={1.5}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" /></Icon>;
const ImageIcon = (p) => <Icon {...p} sw={1.5}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L6 21" /></Icon>;

// Social (substitutes for relume-icons brand logos)
const Instagram = (p) => <Icon {...p} sw={1.8}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></Icon>;
const Facebook = (p) => <Icon {...p} sw={1.8} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />;
const XLogo = (p) => <Icon {...p} sw={1.8}><path d="M4 4l16 16M20 4L4 20" /></Icon>;
const Linkedin = (p) => <Icon {...p} sw={1.8}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-9h4v1.5" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Icon>;
const Youtube = (p) => <Icon {...p} sw={1.8}><path d="M22.5 6.5a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.5 2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.5z" /><polygon points="10 9 15 12 10 15" /></Icon>;

Object.assign(window, {
  Icon, ChevronDown, ChevronRight, ArrowRight, MenuIcon, CloseIcon,
  CameraIcon, UsersIcon, PortraitIcon, BuildingIcon, ImageIcon,
  Instagram, Facebook, XLogo, Linkedin, Youtube,
});
