import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      LandingPage
      <Link to="/buttons">
        <Button>Go to Buttons Page</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
