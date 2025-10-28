import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import * as ico from 'lucide-react';
import { useTheme } from './theme-provider';

export function CustomSidebarTrigger() {
  const { open, toggleSidebar } = useSidebar();
  const {setTheme, theme} = useTheme();
      
      const toggleTheme = () => {
        
        if(theme == "light"){
          setTheme("dark")
        }else{
          setTheme("light")
        }
        console.log(theme)
      }

    if (open) {
    return null; 
  }

  return (
    <Button size="icon" onClick={() => {
        toggleSidebar();
        toggleTheme();
      }} className='mt-3 ml-1 mr-1'>
      <ico.Printer className="h-5 w-5" />
    </Button>
  );
}