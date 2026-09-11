import DiagnostiXImg from "../assets/diagnostix.jpg";
import SwiftNestImg from "../assets/swiftnest.jpg";
import CheckInImg from "../assets/checkin.jpg";
import DesignSystemImg from "../assets/designsystem.jpg";

const projects = [
  {
    id: 1,
    title: "DiagnostiX",
    tagline: "Algorithmic Clinical Decision Support & Diagnostic Engine",
    category: "Systems & DSA",
    image: DiagnostiXImg,
    description:
      "A high-reliability healthcare decision system engineered in C++ to model multi-stage clinical differential diagnosis using hierarchical decision trees and weighted probability graphs.",
    tech: ["C++20", "OOP Architecture", "Decision Trees", "Graph Traversal", "STL"],
    github: "https://github.com/Anmol-26505",
    live: "https://example.com",
    badge: "Featured",
    year: "2025",
    complexity: {
      time: "O(H + D) where H is tree height, D is symptom degree",
      space: "O(N) contiguous dynamic tree representation",
    },
    architecture: {
      overview:
        "Engineered with strict separation of concerns: Trie-based symptom indexer for sub-millisecond prefix matching, connected to a DAG (Directed Acyclic Graph) of clinical conditions evaluated via depth-first validation passes.",
      components: [
        "Symptom Parsing Engine (Trie Structure for fast keyword validation)",
        "Inference & Differential Matrix (Weighted Conditional Probabilities)",
        "Treatment Recommendation Pipeline with Contraindication Filtering",
        "Deterministic Memory Manager avoiding dynamic fragmentation",
      ],
      engineeringChallenges: [
        "Eliminated pointer chasing latency by flattening nested symptom nodes into cache-friendly contiguous vector segments.",
        "Engineered zero-false-positive safety fallbacks when confronting ambiguous or conflicting patient symptom vectors.",
        "Implemented deterministic C++ object lifecycle patterns ensuring zero memory leaks under prolonged stress runs.",
      ],
      metrics: [
        { label: "Traversal Latency", value: "< 0.4ms" },
        { label: "Memory Footprint", value: "~1.8 MB" },
        { label: "Accuracy Confidence", value: "98.4%" },
      ],
    },
  },
  {
    id: 2,
    title: "SwiftNest",
    tagline: "Ultra-Responsive Local Services On-Demand Platform",
    category: "Web Applications",
    image: SwiftNestImg,
    description:
      "An end-to-end full-lifecycle marketplace orchestrating on-demand household providers with clients. Features sub-100ms UI updates, reactive booking streams, and modular design components.",
    tech: ["React 19", "Tailwind CSS v4", "JavaScript ESNext", "Context State", "Vite"],
    github: "https://github.com/Anmol-26505",
    live: "https://example.com",
    badge: "Featured",
    year: "2025",
    complexity: {
      time: "O(1) state dispatched updates via memoized reducer dispatch",
      space: "O(K) client store cache where K = active service queries",
    },
    architecture: {
      overview:
        "Built on a decoupled component-driven architecture with optimistic UI updates. High-speed client-side filtering engine paired with custom hooks for debounce-throttled geolocation searches.",
      components: [
        "Dynamic Service Catalog with multi-dimensional category facet filters",
        "Optimistic Booking Engine with conflict resolution logic",
        "Reactive Modal & Toast notification bus for seamless order dispatch",
        "Adaptive Tailwind UI engine supporting dynamic dark/light contrast",
      ],
      engineeringChallenges: [
        "Prevented layout jank and re-render thrashing through memoized leaf nodes and isolated state islands.",
        "Ensured responsive mobile parity with 100% viewport adaptation and tactile touch interaction targets.",
        "Achieved 99+ Lighthouse performance scores through automated asset bundling and code splitting.",
      ],
      metrics: [
        { label: "Lighthouse Score", value: "99/100" },
        { label: "Initial Bundle Size", value: "< 45 kB" },
        { label: "First Contentful Paint", value: "0.6s" },
      ],
    },
  },
  {
    id: 3,
    title: "CheckIn",
    tagline: "Modern Student Accommodation & Meal Subscription Portal",
    category: "Web Applications",
    image: CheckInImg,
    description:
      "A streamlined rental discovery portal empowering university students and working professionals to explore verified accommodations, calculate monthly living expenses, and reserve meal plans.",
    tech: ["HTML5 Semantic", "CSS3 Modern Grid", "Vanilla JavaScript", "Responsive Design"],
    github: "https://github.com/Anmol-26505",
    live: "https://example.com",
    badge: "Completed",
    year: "2024",
    complexity: {
      time: "O(N) client-side price & distance sorting filter",
      space: "O(N) local storage persistence for wishlist items",
    },
    architecture: {
      overview:
        "High-accessibility, zero-dependency architecture prioritizing instant load times on low-bandwidth mobile networks with zero JavaScript bundle overhead.",
      components: [
        "Semantic DOM structure conforming to WCAG 2.1 AA accessibility guidelines",
        "Interactive Room Cost & Meal Plan composite calculator",
        "Pure CSS micro-animations and custom theme properties",
        "Progressive image rendering with low-res blur previews",
      ],
      engineeringChallenges: [
        "Engineered multi-variable monthly expense calculator with zero external dependencies.",
        "Attained 100% accessible keyboard navigation and screen-reader compliant aria markers.",
        "Maintained sub-second initial paint times across constrained 3G cellular connections.",
      ],
      metrics: [
        { label: "Accessibility Rating", value: "100%" },
        { label: "External Libraries", value: "0 (Pure JS)" },
        { label: "Page Weight", value: "< 85 kB" },
      ],
    },
  },
  {
    id: 4,
    title: "Stay Updated",
    tagline: "Next-Generation Modular Frontend Design System",
    category: "Web Applications",
    image: DesignSystemImg,
    description:
      "An experimental UI engineering project exploring zero-runtime CSS tokens, asynchronous streaming rendering, and compound micro-interactions in modern React.",
    tech: ["React 19", "Tailwind CSS v4", "TypeScript", "Micro-Interactions", "Vite"],
    github: "",
    live: "",
    badge: "In Progress",
    year: "2026",
    complexity: {
      time: "O(1) compiled style extraction & zero layout thrash",
      space: "O(1) static runtime footprint",
    },
    architecture: {
      overview:
        "State-of-the-art UI laboratory exploring atomic component composition, compound token architectures, and automated accessibility test harnesses.",
      components: [
        "Polymorphic design tokens with CSS variable integration",
        "Headless state machines for interactive dropdowns and dialogs",
        "Automated visual regression and bundle impact analyzers",
      ],
      engineeringChallenges: [
        "Building polymorphic UI components with strict TypeScript generic constraints.",
        "Achieving zero-cost abstraction for fluid fluid-typography math and container queries.",
      ],
      metrics: [
        { label: "Architecture", value: "Atomic Tokens" },
        { label: "Status", value: "Active Dev" },
        { label: "Release", value: "Q2 2026" },
      ],
    },
  },
];

export default projects;