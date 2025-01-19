import { Metadata } from "next";
import ProjectClient from "./AboutClient"; // Import the client component
import { JSX } from "react";

export const metadata: Metadata = {
  title: "James Aliev | about",
  description: "James Aliev's personal website",
};

export default function Projects(): JSX.Element {
  return (
    <div>
      <ProjectClient /> {/* Render the client component */}
    </div>
  );
}
