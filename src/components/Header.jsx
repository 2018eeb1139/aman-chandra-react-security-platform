import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = ({ title, breadcrumbs, actions, isOpen, setIsOpen }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mb-1 text-xs text-muted-foreground">
                {breadcrumbs.join(" / ")}
              </div>
            )}
            {title && (
              <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
            )}
          </div>
        </div>

        {actions && actions.length > 0 && (
          <div className="flex items-center gap-2 md:gap-3">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                size={action.size || "default"}
                onClick={action.onClick}
                className={`${action.className} cursor-pointer`}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
