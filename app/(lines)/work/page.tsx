import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { clientWork } from "@/data/client-work";
import { ArrowUpRight, FileText } from "lucide-react";

const page = () => {
    return (
        <section className="py-20">
            <Container>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Client Work</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="mt-6 max-w-2xl">
                    <h1 className="text-4xl font-bold font-mono tracking-tight">Client Work</h1>
                    <p className="mt-3 text-lg text-muted-foreground">A few websites I designed and built through Buildory.</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8">
                    {clientWork.map((item) => {
                        return (
                            <article key={item.id} className="overflow-hidden rounded-2xl border bg-background/70 backdrop-blur">
                                <div className="grid gap-0 md:grid-cols-[1.15fr_0.95fr]">
                                    <div className="border-b md:border-r md:border-b-0">
                                        <Image src={item.image} alt={item.name} width={1200} height={900} className="h-full w-full object-cover" />
                                    </div>

                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold">{item.name}</h2>
                                        <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>

                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {item.liveLink && (
                                                <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                                                    <Button variant="outline" className="gap-2">
                                                        <ArrowUpRight size={16} />
                                                        Live Site
                                                    </Button>
                                                </a>
                                            )}

                                            {item.pdfLink && (
                                                <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">
                                                    <Button variant="outline" className="gap-2">
                                                        <FileText size={16} />
                                                        View PDF
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl border border-dashed p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">More client work and case studies can be added here as Buildory grows.</p>
                    <div className="mt-4">
                        <Link href="/#contact">
                            <Button variant="secondary">Need a website like this?</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default page;
