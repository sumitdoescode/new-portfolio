import Container from "./Container";
import { Code2, Server, Globe, Palette } from "lucide-react";

const About = () => {
    return (
        <section className="py-20 relative">
            <div className="" />

            <Container>
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground mt-2 text-lg">Building scalable full-stack applications with strong backend foundations.</p>

                {/* content */}
                <div className="mt-10 max-w-3xl space-y-4 text-lg leading-8">
                    <p className="text-foreground">
                        I started with UI design and frontend development, which later pushed me deeper into full-stack engineering. After learning
                        <span className="font-mono font-semibold text-white"> HTML, CSS, and JavaScript,</span> I focused on building clean, interactive, and responsive user interfaces.
                    </p>

                    <p className="text-muted-foreground">
                        To build complete applications, I expanded into backend development using <span className="font-mono font-semibold text-white">Node.js, Express, and MongoDB,</span> gaining a strong understanding of APIs, databases,
                        authentication, and application architecture.
                    </p>

                    <p className="text-muted-foreground">
                        Now I build full-stack applications with <span className="font-mono font-semibold text-white">React and Next.js,</span> focusing on performance, scalability, and clean design.
                    </p>
                </div>

                {/* visual row */}
                <div className="flex gap-2 sm:gap-4 mt-8 flex-wrap">
                    <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
                        <Palette size={16} />
                        <span className="text-sm font-mono">Design</span>
                    </div>

                    <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
                        <Code2 size={16} />
                        <span className="text-sm font-mono">Frontend</span>
                    </div>

                    <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
                        <Server size={16} />
                        <span className="text-sm font-mono">Backend</span>
                    </div>

                    <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
                        <Globe size={16} />
                        <span className="text-sm font-mono">Deployment</span>
                    </div>
                </div>

                {/* stats */}
                <div className="mt-10 max-w-md relative rounded-xl p-px bg-linear-to-r from-orange-400/20 to-red-500/20">
                    <div className="flex justify-between bg-muted/40 border border-white/5 rounded-xl p-5">
                        <div>
                            <p className="text-2xl font-semibold">10+</p>
                            <p className="text-muted-foreground text-sm">Projects</p>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold">15+</p>
                            <p className="text-muted-foreground text-sm">Technologies</p>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold font-mono">2000+</p>
                            <p className="text-muted-foreground text-sm">Learning Hours</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
