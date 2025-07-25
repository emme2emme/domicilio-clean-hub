import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Instaclean
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#come-funziona" className="text-foreground hover:text-primary transition-colors">
              Come funziona
            </a>
            <a href="#chi-siamo" className="text-foreground hover:text-primary transition-colors">
              Chi siamo
            </a>
            <a href="#prezzi" className="text-foreground hover:text-primary transition-colors">
              Prezzi
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Accedi
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
              Inizia ora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#come-funziona" className="text-foreground hover:text-primary transition-colors">
                Come funziona
              </a>
              <a href="#chi-siamo" className="text-foreground hover:text-primary transition-colors">
                Chi siamo
              </a>
              <a href="#prezzi" className="text-foreground hover:text-primary transition-colors">
                Prezzi
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="w-full">
                  Accedi
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  Inizia ora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;