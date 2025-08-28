import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Globe, Award, BookOpen, Briefcase, Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCounter } from "@/components/animated-counter"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Charts */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-b-2 border-primary animate-pulse">
            <div className="w-full h-full relative">
              {/* Candlestick pattern */}
              <div className="absolute bottom-0 left-4 w-1 h-16 bg-primary"></div>
              <div className="absolute bottom-0 left-8 w-1 h-24 bg-secondary"></div>
              <div className="absolute bottom-0 left-12 w-1 h-12 bg-primary"></div>
              <div className="absolute bottom-0 left-16 w-1 h-20 bg-secondary"></div>
            </div>
          </div>
          <div className="absolute top-40 right-20 w-40 h-40 border-2 border-secondary rounded-full animate-spin-slow opacity-30"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-t-2 border-r-2 border-accent animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Badge variant="outline" className="mb-6 text-primary border-primary/50">
                Professional Financial Training Institute
              </Badge>
              <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Master the Markets with Finguru
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-sans">Equity · F&O · Forex · Crypto</p>
              <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
                Transform your financial future with expert-led training programs designed for the modern trader and
                investor.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/explore">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary/10 bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    Join as Intern
                    <Briefcase className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Finguru Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Choose Finguru?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine industry expertise with practical training to deliver unparalleled financial education
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Learn from Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Industry veterans with <AnimatedCounter end={15} suffix="+" className="font-bold text-primary" />{" "}
                    years of trading experience guide your learning journey
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="font-serif">Practical Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Real-world trading strategies tested in live markets with proven track records
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-serif">Global Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Comprehensive coverage of global markets including NSE, BSE, NYSE, NASDAQ, and Forex
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Career Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Structured career paths with internship opportunities and industry certifications
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Trading Courses</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive training programs designed to master different financial markets
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-blue-400" />
                  </div>
                  <CardTitle className="font-serif">Equity Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Master stock market fundamentals, technical analysis, and equity trading strategies for consistent
                    profits.
                  </CardDescription>
                  <Link href="/explore">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-green-400" />
                  </div>
                  <CardTitle className="font-serif">F&O Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Advanced futures and options strategies, risk management, and derivatives trading techniques.
                  </CardDescription>
                  <Link href="/explore">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-purple-400" />
                  </div>
                  <CardTitle className="font-serif">Forex Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Currency pair analysis, forex market dynamics, and international trading strategies.
                  </CardDescription>
                  <Link href="/explore">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg mb-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-orange-400" />
                  </div>
                  <CardTitle className="font-serif">Crypto Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Cryptocurrency fundamentals, blockchain analysis, and digital asset trading strategies.
                  </CardDescription>
                  <Link href="/explore">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Internship Opportunities Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Internship Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Launch your finance career with hands-on experience and mentorship from industry experts
            </p>
          </div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
  {/* Card 1 - Marketing Internship */}
  <Card className="group relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col h-full overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <CardHeader className="flex-shrink-0 pb-4 relative z-10">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Users className="h-7 w-7 text-green-600" />
        </div>
        <div className="flex-1">
          <CardTitle className="font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            MBA Marketing Internship
          </CardTitle>
          <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20 hover:bg-green-500/20 transition-colors duration-300">
            Client Acquisition
          </Badge>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="flex flex-col flex-grow relative z-10 pt-2">
      <CardDescription className="text-base leading-relaxed mb-8 flex-shrink-0 text-muted-foreground">
        Join our marketing team to develop client acquisition strategies, build relationships with potential
        traders, and grow our community of financial learners.
      </CardDescription>
      
      <div className="flex-grow mb-8">
        <h4 className="font-semibold text-sm text-foreground mb-4 opacity-80">Key Responsibilities</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Lead generation and client outreach</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Digital marketing campaigns</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Market research and analysis</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Brand development initiatives</span>
          </li>
        </ul>
      </div>
      
      <Link href="/contact" className="mt-auto flex-shrink-0">
        <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-300">
          Apply Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
    </CardContent>
  </Card>

  {/* Card 2 - Finance Internship */}
  <Card className="group relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col h-full overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <CardHeader className="flex-shrink-0 pb-4 relative z-10">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="h-7 w-7 text-blue-600" />
        </div>
        <div className="flex-1">
          <CardTitle className="font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            MBA Finance Internship
          </CardTitle>
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-700 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300">
            Training & Advisory
          </Badge>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="flex flex-col flex-grow relative z-10 pt-2">
      <CardDescription className="text-base leading-relaxed mb-8 flex-shrink-0 text-muted-foreground">
        Work directly with our training team to develop course content, assist in student mentoring, and 
        provide financial advisory services to our clients.
      </CardDescription>
      
      <div className="flex-grow mb-8">
        <h4 className="font-semibold text-sm text-foreground mb-4 opacity-80">Key Responsibilities</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Course content development</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Student mentoring and support</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Financial analysis and research</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Advisory service delivery</span>
          </li>
        </ul>
      </div>
      
      <Link href="/contact" className="mt-auto flex-shrink-0">
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-300">
          Apply Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
    </CardContent>
  </Card>
</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Students Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Success stories from traders and interns who transformed their careers with Finguru
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">RK</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Rahul Kumar</CardTitle>
                      <CardDescription>Equity Trading Graduate</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    "Finguru's practical approach to equity trading changed my perspective completely. The mentors are
                    incredibly knowledgeable and the strategies actually work in real markets."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold">PS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Priya Sharma</CardTitle>
                      <CardDescription>Marketing Intern</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    "The internship program at Finguru gave me hands-on experience in fintech marketing. I learned
                    client acquisition strategies that I now use in my full-time role."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold">AM</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Arjun Mehta</CardTitle>
                      <CardDescription>Forex Trading Student</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    "The forex course at Finguru is comprehensive and well-structured. I went from zero knowledge to
                    consistently profitable trading in just 6 months."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Start Your Financial Journey Today</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join <AnimatedCounter end={5000} suffix="+" className="font-bold text-primary" /> successful traders and
                investors who chose Finguru to transform their financial future
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
