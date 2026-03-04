import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "lucide-react";
import { navigationItems, currentUser } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-68 border-r border-border bg-card transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-8 p-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0CC8A8] text-primary-foreground font-bold">
                <Icons.ShieldPlus className="text-white" size={16} />
              </div>
              <span className="text-xl text-[#0CC8A8] font-bold">
                Security Ops
              </span>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = Icons[item.icon] || Icons.Circle;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant={active ? "secondary" : "ghost"}
                      className={cn(
                        "w-full rounded-4xl justify-start gap-3 hover:bg-cyan-100 hover:text-[#0CC8A8]",
                        active && "bg-cyan-100 text-[#0CC8A8]",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-border p-6 space-y-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <>
                  <Icons.Moon className="h-4 w-4" />
                  <span>Dark mode</span>
                </>
              ) : (
                <>
                  <Icons.Sun className="h-4 w-4" />
                  <span>Light mode</span>
                </>
              )}
            </Button>

            <div className="flex items-center gap-3 rounded-lg border border-border p-3">
              <img
                src={currentUser.avatar}
                alt={currentUser.firstName}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold truncate">
                  {currentUser.email}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {currentUser.role}
                </div>
              </div>
              <Link
                to="/login"
                onClick={() => toast.success("Logged out successfully")}
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Icons.LogOut className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
