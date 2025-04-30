import ConsistentHashing from "./blogs/consistent-hashing";
import DSA from "./blogs/dsa-section";
import FlexBisonTools from "./blogs/flex-bison";
import HTTPsUnwrapped from "./blogs/https-unwrapped";
import Introduction from "./blogs/introduction";
import Resume from "./blogs/resume-section";

export const BLOGS = [
  {
    title: "Chapter 1: Introduce yourself",
    link: "/blogs/introduce-yourself",
    category: "SDE Interview tips",
    date: "30/06/2024",
    excerpt:
      "All of us prepare our DSA from Leetcode and other sources before our SI and placement season. But very few of us know the importance of Introduction. In this blog, I will be discussing the importance of a impactful introduction and how to prepare one.",
    active: true,
    component: Introduction,
    name: "introduce-yourself",
    blogID: 1,
  },
  {
    title: "Chapter 2: Explain your Resume like a Pro",
    link: "/blogs/resume-section",
    category: "SDE Interview tips",
    date: "04/07/2024",
    excerpt:
      "Resume Section is the most important part of a technical interview. It explains your experience in the field through projects or internships. In this blog, I will be discussing about the correct way to explain the projects, what kind of questions you might be asked and how to prepare for this segment.",
    active: true,
    component: Resume,
    name: "resume-section",
    blogID: 2,
  },
  {
    title: "Chapter 3: Prepare and Ace DSA section in Interviews",
    link: "/blogs/dsa-section",
    category: "SDE Interview tips",
    date: "25/07/2024",
    excerpt:
      "DSA is the most important part of any technical interview. In this blog, I will be discussing the importance of DSA, what kind of questions are asked in this section and how to prepare for the same.",
    active: true,
    component: DSA,
    name: "dsa-section",
    blogID: 3,
  },
  {
    title: "Consistent Hashing",
    link: "/blogs/consistent-hashing",
    category: "System Design",
    date: "07/02/2025",
    active: true,
    component: ConsistentHashing,
    name: "consistent-hashing",
    blogID: 4,
    excerpt:
      "Consistent hashing is a special kind of hashing which is one of the pillars of distributed systems. In this blog, I will be discussing about the what, why and how of consistent hashing.",
  },
  {
    title: "Flex and Bison Tools",
    link: "/blogs/flex-bison",
    category: "Compiler Design",
    date: "08/02/2025",
    active: true,
    component: FlexBisonTools,
    name: "flex-bison",
    blogID: 5,
    excerpt:
      "Flex and Bison are compiler construction tools that are used to generate the lexical analyzers and parsers. I tried to use these tools for a very basic compiler and here I am sharing the power of these tools.",
  },
  {
    title: "HTTPs unwrapped",
    link: "/blogs/https-unwrapped",
    category: "Security",
    date: "27/04/2025",
    active: true,
    component: HTTPsUnwrapped,
    name: "https-unwrapped",
    blogID: 6,
    excerpt:
      "HTTPS: The secure version of HTTP, which is the protocol used for transferring data over the web. Why is it secure? and at what degree? This blog will discuss in extreme detail about the HTTPS protocol, particularly the TLS handshake and the security it provides.",
  },
];
