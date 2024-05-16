import { Button } from "./components/button";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-4 h-screen justify-center">
      <div className="flex flex-col items-center gap-4 border p-6 rounded-md bg-background">
        <h1>Light Mode Button Variants</h1>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="destructive">Error</Button>
        <Button variant='purple'>Purple</Button>
        <Button variant='blue'>Blue</Button>
      </div>
    </div>
  );
};

export default App;
