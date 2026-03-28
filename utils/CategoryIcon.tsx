import {
  Droplets,
  EyeClosed,
  Hand,
  Leaf,
  Pen,
  PenTool,
  Scissors,
  Shapes,
  Sparkles,
  Star,
  Zap,
} from "lucide-react-native";

export default function CategoryIcon({
  category,
  size,
  color,
}: {
  category: string;
  size: number;
  color: string;
}) {
  switch (category) {
    case "Hair":
      return <Scissors size={size} color={color} />;
    case "Makeup":
      return <Sparkles size={size} color={color} />;
    case "Skincare":
      return <Droplets size={size} color={color} />;
    case "Lashes & Brows":
      return <EyeClosed size={size} color={color} />;
    case "Nails":
      return <Hand size={size} color={color} />;
    case "Hair Removal":
      return <Zap size={size} color={color} />;
    case "PMU":
      return <Pen size={size} color={color} />;
    case "Tattoo & Piercing":
      return <PenTool size={size} color={color} />;
    case "Wellness":
      return <Leaf size={size} color={color} />;
    case "All":
      return <Shapes size={size} color={color} />;
    default:
      return <Shapes size={size} color={color} />;
  }
}
