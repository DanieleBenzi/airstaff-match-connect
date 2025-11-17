import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import GradientButton from './GradientButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu size={24} className="text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-col gap-3">
                    <span className="text-lg font-semibold text-gray-900">Soluzioni</span>
                    <Link 
                      to="/vendor-management" 
                      className="text-base text-gray-700 hover:text-airstaff-pink transition-colors pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      VMS - Vendor Management
                    </Link>
                    <Link 
                      to="/workforce-management" 
                      className="text-base text-gray-700 hover:text-airstaff-pink transition-colors pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      WMS - Workforce Management
                    </Link>
                    <Link 
                      to="/tender" 
                      className="text-base text-gray-700 hover:text-airstaff-pink transition-colors pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      Tender
                    </Link>
                   </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Desktop menu - navigation links and CTA */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-airstaff-pink font-medium bg-transparent">
                  Soluzioni
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/vendor-management"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">VMS - Vendor Management</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Gestisci le agenzie del lavoro in modo efficiente
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/workforce-management"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">WMS - Workforce Management</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Ottimizza la gestione della forza lavoro
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tender"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Tender</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Trova le migliori staffing agencies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a href="https://app.airstaff.it/guest/search-talents" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Accedi
            </GradientButton>
          </a>
        </div>

        {/* Mobile - CTA only */}
        <div className="md:hidden">
          <a href="https://app.airstaff.it/guest/search-talents" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Accedi
            </GradientButton>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
