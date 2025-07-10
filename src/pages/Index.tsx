import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Award, 
  Target, 
  Briefcase,
  CheckCircle,
  Star,
  Zap,
  ArrowRight,
  BookOpen,
  Globe,
  TrendingUp,
  Shield
} from "lucide-react";

const Index = () => {
  const learningTracks = [
    "Salesforce Platform Developer I",
    "Salesforce JavaScript Developer I", 
    "Certified System Administrator",
    "Certified Application Developer",
    "AWS Cloud Practitioner",
    "AWS Solution Architect Associate",
    "Backend Developer – Java",
    "Backend Developer – Node.js"
  ];

  const benefits = [
    "Access to pre-screened, job-ready talent pool",
    "Reduced onboarding and training costs", 
    "Low-risk hiring model with aligned curriculum",
    "Alignment with project-based hiring needs",
    "Students trained in global certifications",
    "Enterprise technology expertise"
  ];

  const keyComponents = [
    { icon: Target, title: "Role-specific Skilling Tracks", desc: "Aligned with in-demand job roles in TCS projects" },
    { icon: Briefcase, title: "Capstone Projects", desc: "Real-world problem-solving experience" },
    { icon: Award, title: "Certification Preparation", desc: "Globally recognized credentials" },
    { icon: Users, title: "Mock Interviews", desc: "Soft skills development and interview preparation" },
    { icon: Star, title: "TCS Expert Sessions", desc: "Direct industry exposure and mentoring" },
    { icon: BookOpen, title: "Blended Learning", desc: "VILT, self-paced content, and mentoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero border-b shadow-elegant">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-accent rounded-lg p-3">
                <GraduationCap className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground">SmartBridge</h1>
                <p className="text-primary-foreground/80">TCS LastMile Talent Accelerator</p>
              </div>
            </div>
            <Button variant="secondary" className="shadow-lg">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            12 Weeks • 120 Hours • Industry-Ready Skills
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Bridge the Gap Between
            <span className="block text-salesforce-accent">Education & Industry</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Equip yourself with job-specific technical and employability skills that meet TCS's current and future talent demands through our comprehensive 12-week accelerator program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">5,000+</div>
              <div className="text-muted-foreground">Students in Pilot Program</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">12 Weeks</div>
              <div className="text-muted-foreground">Intensive Training</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">8+</div>
              <div className="text-muted-foreground">Learning Tracks</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">120 Hours</div>
              <div className="text-muted-foreground">Comprehensive Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who Can Apply?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This program is designed for ambitious students and graduates ready to accelerate their careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-elegant border-salesforce-blue-dark/20">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Final-Year Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Undergraduate students in their final year from B.Tech/B.E programs in Computer Science, IT, ECE, or related disciplines
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant border-salesforce-blue-dark/20">
              <CardHeader className="text-center">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Recent Graduates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Fresh graduates from TCS-preferred colleges across India looking to enhance their employability
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant border-salesforce-blue-dark/20">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Career Switchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Professionals looking to transition into high-demand technical roles with industry-aligned skills
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Program Components</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive learning experience designed to make you industry-ready
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyComponents.map((component, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow border-salesforce-blue-dark/20">
                <CardHeader>
                  <component.icon className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-lg">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{component.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learning Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from industry-relevant tracks aligned with current market demands
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningTracks.map((track, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-lg transition-all hover:-translate-y-1 border-salesforce-blue-dark/20">
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">{track}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits to TCS */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Why TCS Partners With Us</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Strategic advantages that make this partnership valuable for TCS
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-salesforce-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Program Investment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable pricing with comprehensive support and placement assistance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-elegant border-2 border-salesforce-blue-dark/30">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-accent text-accent-foreground">Year 1 - Pilot</Badge>
                <CardTitle className="text-2xl">No Cost Pilot</CardTitle>
                <CardDescription>For up to 5,000 students</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-accent mb-4">FREE</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full training program</li>
                  <li>• Project work included</li>
                  <li>• Certification prep</li>
                  <li>• Placement support</li>
                  <li>• Students pay certification fees only</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-elegant border-2 border-accent">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-accent text-accent-foreground">Post-Pilot</Badge>
                <CardTitle className="text-2xl">Commercial Model</CardTitle>
                <CardDescription>Minimum 60 students per batch</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-accent mb-4">₹15,000</div>
                <p className="text-sm text-muted-foreground mb-4">per learner + taxes</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete training delivery</li>
                  <li>• Capstone project work</li>
                  <li>• Certification preparation</li>
                  <li>• Soft skills development</li>
                  <li>• Full placement support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of students who are transforming their careers with industry-relevant skills and direct pathways to TCS opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-accent rounded-lg p-2">
                  <GraduationCap className="h-6 w-6 text-accent-foreground" />
                </div>
                <span className="text-xl font-bold">SmartBridge</span>
              </div>
              <p className="text-background/70">
                Bridging the gap between education and industry with comprehensive talent development programs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background">Program Details</a></li>
                <li><a href="#" className="hover:text-background">Learning Tracks</a></li>
                <li><a href="#" className="hover:text-background">Apply Now</a></li>
                <li><a href="#" className="hover:text-background">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-background/70">
                <p>Email: info@smartbridge.com</p>
                <p>Phone: +91 XXXXX XXXXX</p>
                <p>Partnership with TCS</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 SmartBridge. All rights reserved. In collaboration with Tata Consultancy Services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
