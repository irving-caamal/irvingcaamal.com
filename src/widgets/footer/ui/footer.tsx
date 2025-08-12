"use client"

import { useUnit } from "effector-react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "~/shared/ui/button"
import { $profile } from "~/entities/profile/model/profile"

/**
 * Footer widget
 * Contains copyright and social links
 */
export function Footer() {
  const profile = useUnit($profile)

  return (
    <footer className="border-t border-white/10 elegant-card">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 <span className="text-gradient font-semibold">{profile.name}</span>. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="elegant-card" asChild>
              <a href={profile.social.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="elegant-card" asChild>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="elegant-card" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
