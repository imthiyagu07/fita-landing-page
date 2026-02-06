import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import CorePillars from './components/CorePillars';
import SectionBlock from './components/SectionBlock';
import HowWeWork from './components/HowWeWork';
import ContactCTA from './components/ContactCTA';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-background min-h-screen selection:bg-primary selection:text-white">
            <Header />

            <main>
                {/* 1. HOME */}
                <Hero />

                {/* 2. WHO WE ARE */}
                <WhoWeAre />

                {/* 3. WHAT ARE THE SERVICES WE PROVIDE */}
                <CorePillars />

                <SectionBlock
                    id="construction"
                    title="Construction"
                    description="We provide end-to-end construction services with strong technical and site management capability."
                    bullets={[
                        "General building construction works",
                        "Structural and steel construction works",
                        "Industrial and commercial projects",
                        "Site management, planning, and execution",
                        "Quality, safety, and regulatory compliance management"
                    ]}
                    ctaText="View Construction Capability"
                    bgGray={false}
                    icon="🏗️"
                />

                <SectionBlock
                    id="engineering"
                    title="Design & Engineering"
                    description="Our engineering services support both independent consultancy and construction delivery."
                    bullets={[
                        "Engineering design and consultancy services",
                        "Structural steel and welding engineering",
                        "Project engineering and QA/QC support",
                        "Technical audits and compliance assessments",
                        "Integration of quality, environmental, and safety requirements"
                    ]}
                    ctaText="View Engineering Services"
                    bgGray={true}
                    icon="⚙️"
                />

                <SectionBlock
                    id="training"
                    title="Training – FITA Future & Goal"
                    description="We deliver professional training programs designed to build industry-ready competence and certification-focused skills."
                    bullets={[
                        "ISO Lead Auditor and Internal Auditor training",
                        "EN 1090 and ISO 3834 related training",
                        "Welding engineering and IWE-based modules",
                        "Corporate and customized in-house training programs"
                    ]}
                    ctaText="View Training Programs"
                    bgGray={false}
                    icon="🎓"
                />

                {/* 4. HOW WE WORK */}
                <HowWeWork />

                {/* 5. LET'S WORK TOGETHER (WITH FORM) */}
                <ContactCTA />

                {/* 6. CAREERS PAGE */}
                <Careers />
                <div class="poper-55"></div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
