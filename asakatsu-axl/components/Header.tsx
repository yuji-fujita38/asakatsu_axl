"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-foreground">BCC</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              HOME
            </a>
            <a href="#case" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              CASE
            </a>
            <a href="#company" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              COMPANY
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              CONTACT US
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                HOME
              </a>
              <a href="#case" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                CASE
              </a>
              <a href="#company" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                COMPANY
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                CONTACT US
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
