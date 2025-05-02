"use client";

import { FaAws } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SstIcon } from "@/components/assets/icons/sst";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">StackForge</h2>
            <p className="text-muted-foreground max-w-md">
              A complete SST template for building and deploying full-stack
              applications to AWS.
            </p>
          </div>
          <div className="flex justify-start md:justify-end items-center gap-8">
            <a
              href="https://github.com/nitishxyz/stackforge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://sst.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="SST"
            >
              <SstIcon width={45} height={24} />
            </a>
            <a
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="AWS"
            >
              <FaAws size={30} />
            </a>
          </div>
        </div>
        <div className="border-t border-foreground/5 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} StackForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
