import NavBar from "../Components/NavBar/NavBar";
import ResumeProject from "../Components/ResumeProject/ResumeProject";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="resumeProject">
        <ResumeProject title={""} description={""} />
      </div>
      
    </div>
  );
}
