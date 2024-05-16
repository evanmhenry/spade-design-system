import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

const DashboardPage = () => {
  return (
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
  );
};

export default DashboardPage;
