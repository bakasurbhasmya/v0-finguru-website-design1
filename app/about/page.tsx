import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Award, TrendingUp, Globe, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      expertise: "15+ years in Equity & F&O Trading",
      description: "Former investment banker with expertise in derivatives and risk management.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Forex Training",
      expertise: "12+ years in Currency Markets",
      description: "International forex trader specializing in major currency pairs and market analysis.",
    },
    {
      name: "Arjun Patel",
      role: "Crypto Trading Expert",
      expertise: "8+ years in Digital Assets",
      description: "Blockchain technology expert and cryptocurrency trading strategist.",
    },
    {
      name: "Meera Singh",
      role: "Head of Internships",
      expertise: "10+ years in Finance Education",
      description: "MBA from IIM with extensive experience in financial training and career development.",
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/50">
            About Finguru
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Empowering Financial Excellence</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to transforming aspiring traders and investors into market professionals through
            comprehensive training and hands-on experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To democratize financial education by providing world-class trading and investment training that
                  empowers individuals to achieve financial independence through informed market participation. We
                  believe everyone deserves access to professional-grade financial knowledge.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To become the leading financial education institute that bridges the gap between academic theory and
                  real-world trading. We envision a future where every graduate becomes a confident, ethical, and
                  successful participant in global financial markets.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Teaching Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in practical, industry-focused education that prepares students for real market conditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif">Practical Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every concept is taught with real market examples and live trading scenarios to ensure practical
                  understanding and immediate application.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif">Mentorship Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Personal mentorship from industry experts ensures each student receives individual attention and
                  guidance throughout their learning journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-serif">Global Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive coverage of global markets ensures students understand international trading dynamics
                  and cross-market opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry veterans with decades of combined experience in financial markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary mb-2">{member.expertise}</p>
                  <CardDescription className="text-sm">{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Philosophy */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Shaping Next-Gen Finance Professionals</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our internship program is designed to bridge the gap between academic learning and industry practice
            </p>

            <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg text-left">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-4 flex items-center">
                      <Award className="h-6 w-6 text-primary mr-2" />
                      Real-World Experience
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Interns work on live projects, interact with real clients, and contribute to actual business
                      outcomes from day one.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-4 flex items-center">
                      <Users className="h-6 w-6 text-secondary mr-2" />
                      Career Development
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Structured career paths with clear progression opportunities and industry certifications to
                      accelerate professional growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <Button size="lg" className="px-8">
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
