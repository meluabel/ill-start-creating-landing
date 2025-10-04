import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin, Twitter, Send, Code, Eye, Menu } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter">Dala.</a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-muted-foreground/80 transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-muted-foreground/80 transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="container max-w-screen-2xl">
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-57px)] text-center py-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-2/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
            Software Engineer & Creative Developer
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
            I build beautiful, functional, and user-centric web applications. Currently based in Addis Ababa, Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 flex justify-center">
              <div className="glowing-border p-1">
                <Avatar className="h-64 w-64">
                  <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dala" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
              <p className="text-muted-foreground text-lg mb-6">
                I am a passionate software engineer with a love for creating elegant and efficient solutions. With a background in both design and development, I strive to build products that not only work well but also look amazing. My journey in tech started with a curiosity for how things work, and it has evolved into a career where I can build meaningful applications that impact people's lives.
              </p>
              <p className="text-muted-foreground text-lg">
                When I'm not coding, you can find me exploring the vibrant city of Nairobi, hiking in the Ngong Hills, or contributing to open-source projects.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 sm:py-32">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/20 transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1555066931-4365d1469c98?w=800&h=450&fit=crop`} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Project {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">A brief description of the project goes here. It highlights the key features and technologies used.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm"><Code className="h-4 w-4 mr-2" />Source</Button>
                      <Button variant="outline" size="sm"><Eye className="h-4 w-4 mr-2" />Live</Button>
                    </div>
                    <div className="flex space-x-2 text-muted-foreground">
                      <span className="text-xs font-mono">React</span>
                      <span className="text-xs font-mono">Node.js</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-32">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            <form className="space-y-4">
              <Input type="text" placeholder="Name" className="bg-background/80" />
              <Input type="email" placeholder="Email" className="bg-background/80" />
              <Textarea placeholder="Message" className="bg-background/80" />
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40">
        <div className="container max-w-screen-2xl py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Dala. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;

// Add animation styles to a style tag or a css file
const style = document.createElement('style');
style.innerHTML = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;
document.head.appendChild(style);
