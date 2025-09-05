import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  
  budget: z.enum([
    "under-10k",
    "10k-25k", 
    "25k-50k",
    "50k-100k",
    "100k-plus",
    "not-sure"
  ], {
    message: "Please select a budget range"
  }),
  
  timeline: z.enum([
    "asap",
    "1-month",
    "2-3-months",
    "3-6-months",
    "6-plus-months",
    "flexible"
  ], {
    message: "Please select a timeline"
  }),
  
  projectGoals: z
    .string()
    .min(20, "Please provide more details about your project goals (at least 20 characters)")
    .max(2000, "Project description must be less than 2000 characters"),
  
  needsAI: z.boolean().default(false),
  
  referralSource: z
    .string()
    .max(100, "Referral source must be less than 100 characters")
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const budgetRanges = [
  { value: "under-10k", label: "Under $10,000", description: "Small projects & MVPs" },
  { value: "10k-25k", label: "$10,000 - $25,000", description: "Standard web applications" },
  { value: "25k-50k", label: "$25,000 - $50,000", description: "Complex applications" },
  { value: "50k-100k", label: "$50,000 - $100,000", description: "Enterprise solutions" },
  { value: "100k-plus", label: "$100,000+", description: "Large-scale platforms" },
  { value: "not-sure", label: "Not sure yet", description: "Let's discuss your needs" },
] as const

export const timelineOptions = [
  { value: "asap", label: "ASAP", description: "Rush project" },
  { value: "1-month", label: "Within 1 month", description: "Quick turnaround" },
  { value: "2-3-months", label: "2-3 months", description: "Standard timeline" },
  { value: "3-6-months", label: "3-6 months", description: "Complex project" },
  { value: "6-plus-months", label: "6+ months", description: "Long-term project" },
  { value: "flexible", label: "Flexible", description: "Quality over speed" },
] as const

export const projectIdeaSchema = z.object({
  idea: z
    .string()
    .min(10, "Please describe your idea in more detail")
    .max(1000, "Description must be less than 1000 characters"),
})

export type ProjectIdeaData = z.infer<typeof projectIdeaSchema>
