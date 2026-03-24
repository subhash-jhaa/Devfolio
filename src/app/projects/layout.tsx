import { ThemeProvider } from "@/components/layout/ThemeProvider";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
