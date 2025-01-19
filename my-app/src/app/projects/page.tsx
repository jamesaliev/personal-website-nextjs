import { Metadata } from "next";
import ProjectClient from "./ProjectClient"; // Import the client component
import { JSX } from "react";

export const metadata: Metadata = {
  title: "James Aliev | projects",
  description: "James Aliev's personal website",
};

export default function Projects(): JSX.Element {
  return (
    <div>
      <ProjectClient /> {/* Render the client component */}
    </div>
  );
}
