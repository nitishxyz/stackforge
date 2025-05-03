"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { login, logout } from "@/app/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Github, User } from "lucide-react";

const STAGE = process.env.NEXT_PUBLIC_STAGE;

const PORTAL_URL =
  STAGE === "prod"
    ? "https://polar.sh/slashforge/portal"
    : "https://sandbox.polar.sh/slashforge/portal";

export function Navbar() {
  const { user, isLoading, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* StackForge text removed */}
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <div className="flex items-center gap-4">
              {!isLoading ? (
                isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <User className="h-4 w-4" />
                        {user?.username}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href={PORTAL_URL} className="w-full text-left">
                          Manage Subscription
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <form action={logout}>
                          <button type="submit" className="w-full text-left">
                            Logout
                          </button>
                        </form>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <form action={login}>
                    <Button type="submit" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Login with GitHub
                    </Button>
                  </form>
                )
              ) : (
                <Button variant="outline" size="sm" disabled>
                  Loading...
                </Button>
              )}
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
