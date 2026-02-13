/* eslint-disable react-refresh/only-export-components */
import { ShieldCheck, GraduationCap, BookOpen, HeartPulse, Users } from "lucide-react";


const COLORS = {
  bgTeal: "#01303C",
  darkbgTeal: "#02242E",
  lightGreen: "#a7ff12",
  yellow: "#ffea00",
  lightBlue: "#34ebf8",
  pink: "#ff287c",
};

const servicesData = [
  {
    id: 1,
    title: "Character Development",
    icon: <ShieldCheck className="size-5 lg:size-6" />,
    desc: "Instilling integrity, discipline, respect, and Christlike values in everyday living.",
    rotation: "-rotate-6",
    decorColor: "bg-amber-500",
    iconColor: "bg-amber-200",
  },
  {
    id: 2,
    title: "Academic & Career Growth",
    icon: <GraduationCap className="size-5 lg:size-6" />,
    desc: "Encouraging excellence in academics, skill development, and professional preparation.",
    rotation: "rotate-6",
    decorColor: "bg-blue-500",
    iconColor: "bg-blue-200",
  },
  {
    id: 3,
    title: "Spiritual Growth",
    icon: <BookOpen className="size-5 lg:size-6" />,
    desc: "Deepening faith through Bible study, prayer, worship, and mentorship.",
    rotation: "-rotate-6",
    decorColor: "bg-emerald-500",
    iconColor: "bg-emerald-200",
  },
  {
    id: 4,
    title: "Health & Wellbeing",
    icon: <HeartPulse className="size-5 lg:size-6" />,
    desc: "Promoting balanced living spiritually, mentally, and physically.",
    rotation: "rotate-10",
    decorColor: "bg-rose-500",
    iconColor: "bg-rose-200",
  },
  {
    id: 5,
  title: "Leadership & Service",
  icon: <Users className="size-5 lg:size-6" />,
  desc: "Raising responsible leaders who serve with humility, excellence, and commitment in church and society.",
  rotation: "-rotate-10",
  decorColor: "bg-indigo-500",
  iconColor: "bg-indigo-200",
  }
];


const keySpeakers = [
  {
    id: 1,
    title: "Pastor Leonard",
    desc: "Ministering on godly character and spiritual responsibility for the Christian youth.",
    imgUrl: "./pastor-leo.jpeg",
    rotation: "-rotate-1",
    bagePosition: "-bottom-6 -left-8 rotate-80",
  },
  {
    id: 2,
    title: "Pastor Oscar",
    desc: "Teaching on discipline, respect, and living as an example in today's generation.",
    imgUrl: "./pastor-oscar.jpeg",
    rotation: "rotate-3 lg:mt-20",
    bagePosition: "-top-6 -left-7 rotate-10",
  },
  {
    id: 3,
    title: "Vivian T. Chibuike (Mrs)",
    desc: "Addressing integrity, identity, and building strong Christian values among youths.",
    imgUrl: "./mummy-excel-ada.jpeg",
    rotation: "-rotate-6",
    bagePosition: "-bottom-6 -right-7 rotate-10",
  },
];
const galleryData = [
  {
    id: 1,
    title: "Worship in Action",
    desc: "Moments of Intense Worship",
    imgUrl: "./youth-gallery/blessed-hands.jpg",
    rotation: "-rotate-1",
    bagePosition: "-bottom-6 -left-8 rotate-80",
  },
  {
    id: 2,
    title: "The Word in Action",
    desc: "Powerful Messages That Transform Lives",
    imgUrl:
      "./youth-gallery/sermon-image.jpeg",
    rotation: "rotate-3 lg:mt-20",
    bagePosition: "-top-6 -left-7 rotate-10",
  },
  {
    id: 3,
    title: "Spiritual Worship",
    desc: "worship from the heart",
    imgUrl: "./youth-gallery/egbon-ay.jpg",
    rotation: "-rotate-6 ",
    bagePosition: "-bottom-6 -right-7 rotate-10",
  },
  {
    id: 4,
    title: "Community Gathering",
    desc: "Building Connections Together",
    imgUrl: "./youth-gallery/youth-vibe-bnw.jpeg",
     rotation: "-rotate-1",
    bagePosition: "-bottom-6 -left-8 rotate-80",
  },
  {
    id: 5,
    title: "Youth for Christ",
    desc: "Youth'y Vibe",
    imgUrl: "./youth-gallery/oluchi.jpg",
    rotation: "rotate-3 lg:mt-20",
    bagePosition: "-top-6 -left-7 rotate-10",
  },
  {
    id: 6,
    title: "Youth Photo time",
    desc: "Basking in the joy of the Lord",
    imgUrl: "./youth-gallery/Augustina-et-tare.jpg",
    rotation: "-rotate-6 ",
    bagePosition: "-bottom-6 -right-7 rotate-10",
  },
  {
    id: 7,
    title: "Prayer Session",
    desc: "United in Faith and Purpose",
    imgUrl: "./youth-gallery/wyp-david.jpeg",
    rotation: "-rotate-1",
    bagePosition: "-bottom-6 -left-8 rotate-80",
  },
  {
    id: 8,
    title: "Special Service",
    desc: "Celebrating God's Goodness",
    imgUrl: "./youth-gallery/fiyin-group-photos.jpg",
    rotation: "rotate-3 lg:mt-20",
    bagePosition: "-top-6 -left-7 rotate-10",
  },
  {
    id: 9,
    title: "Carol Service",
    desc: "Santa Claus is Coming to Town",
    imgUrl: "./youth-gallery/mnethan-magbe.jpeg",
    rotation: "-rotate-6 ",
    bagePosition: "-bottom-6 -right-7 rotate-10",
  },
];

const whyUsData = [
  {
    id: 1,
    value: "60+",
    label: "Church Family Members",
    desc: "A close-knit family growing together in faith, love, and purpose at RCCG LatterHouse Parish.",
    classes:
      "absolute top-0 right-0 w-64 h-40 bg-white p-4 rounded-lg shadow-xl transform rotate-3 z-30",
  },
  {
    id: 2,
    value: "25+",
    label: "Active Youth Participants",
    desc: "Young people committed to spiritual growth, leadership development, and godly character.",
    classes:
      "absolute top-1/4 left-0 w-64 h-40 bg-white p-4 rounded-lg shadow-xl transform -rotate-6 z-20 opacity-80",
  },
  {
    id: 3,
    value: "5+",
    label: "Years of Youth Fellowship",
    desc: "Consistently building a generation rooted in discipline, respect, and Christlike identity.",
    classes:
      "absolute bottom-0 right-1/4 w-64 h-40 bg-white p-4 rounded-lg shadow-xl transform rotate-2 z-10 opacity-70",
  },
  {
    id: 4,
    value: "100%",
    label: "Committed to Christlike Living",
    desc: "Dedicated to raising youths whose character reflects their true identity in Christ.",
    classes:
      "absolute top-1/2 left-1/4 w-64 h-40 bg-white p-4 rounded-lg shadow-xl transform -rotate-3 z-0 opacity-60",
  },
];

export { COLORS, servicesData, keySpeakers, galleryData, whyUsData };
