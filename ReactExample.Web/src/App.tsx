import { Button } from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/Select";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-4 h-screen justify-center">
      <ThemeToggle />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Examples of every button variant</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="destructive">Error</Button>
          <Button variant="purple">Purple</Button>
          <Button variant="blue">Blue</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
