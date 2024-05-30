'use client'
import AllProjects from "../components/AllProjects";
import Menu from "../components/Menu";
import Footer from "../components/Footer";


export default function Page() {
    
    return (
      <>
        <Menu/>
        <main className="py-24">
        <AllProjects/>
      </main>

<Footer></Footer>
      </>
    );
  }