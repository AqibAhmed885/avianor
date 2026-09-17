/**
 * IconRenderer — resolves a Lucide icon name string to the JSX element.
 * This avoids importing all of lucide-react statically.
 * Add new icons to the map as needed.
 */
import {
  MoonStar,
  Database,
  HeartPulse,
  CircuitBoard,
  Cable,
  Radar,
  Navigation,
  Gauge,
  Factory,
  MonitorCog,
  BadgeCheck,
  FileCheck2,
  DraftingCompass,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Zap,
  BarChart3,
  Server,
  Settings,
  Network,
  Radio,
  ScanEye,
  GitMerge,
  SearchCode,
  FlaskConical,
  CheckSquare,
  LifeBuoy,
  BookOpen,
  ClipboardList,
  ClipboardCheck,
  Share2,
  Scissors,
  ArrowLeftRight,
  PackageOpen,
  Shapes,
  Grid,
  CheckCircle,
  AlertCircle,
  Antenna,
  SearchX,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = string;

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  MoonStar,
  Database,
  HeartPulse,
  CircuitBoard,
  Cable,
  Radar,
  Navigation,
  Gauge,
  Factory,
  MonitorCog,
  BadgeCheck,
  FileCheck2,
  DraftingCompass,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Zap,
  BarChart3,
  Server,
  Settings,
  Network,
  Radio,
  ScanEye,
  GitMerge,
  SearchCode,
  FlaskConical,
  CheckSquare,
  LifeBuoy,
  BookOpen,
  ClipboardList,
  ClipboardCheck,
  Share2,
  Scissors,
  ArrowLeftRight,
  PackageOpen,
  Shapes,
  Grid,
  CheckCircle,
  AlertCircle,
  Antenna,
  SearchX,
};

interface IconRendererProps extends LucideProps {
  name: IconName;
}

export function IconRenderer({ name, ...props }: IconRendererProps) {
  const Icon = iconMap[name];
  if (!Icon) {
    // Fail silently with a safe fallback
    return <Settings {...props} />;
  }
  return <Icon {...props} />;
}

