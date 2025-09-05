"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Loader2, Lightbulb, Wrench, Clock, AlertCircle } from "lucide-react"
import { generateProjectOutline, type ProjectOutline } from "@/lib/ai/generateProjectOutline"
import { projectIdeaSchema } from "@/lib/validation/contactSchema"

export function ProjectIdeaAssistant() {
  const [idea, setIdea] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<ProjectOutline | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!idea.trim()) return

    const validation = projectIdeaSchema.safeParse({ idea })
    if (!validation.success) {
      setError(validation.error.issues[0].message)
      return
    }

    setIsLoading(true)
    setError(null)
    
    try {
      const outline = await generateProjectOutline({ idea })
      setResult(outline)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const complexityColors = {
    Simple: "bg-green-500/10 text-green-400 border-green-500/20",
    Moderate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Complex: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Enterprise: "bg-red-500/10 text-red-400 border-red-500/20",
  }

  return (
    <section className="section-padding bg-background-base">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-text-primary mb-4">
              Project Idea Assistant
            </h2>
            <p className="text-lg text-text-secondary">
              Describe your project idea and get an instant technical breakdown powered by AI
            </p>
          </div>

          <Card className="bg-surface-base border-border-base">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent-base" />
                Describe Your Project Idea
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., I want to build an e-commerce platform with AI-powered product recommendations..."
                className="min-h-[120px] resize-none"
                maxLength={1000}
              />
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-tertiary">
                  {idea.length}/1000 characters
                </p>
                <Button 
                  onClick={handleSubmit}
                  disabled={isLoading || !idea.trim() || idea.length < 10}
                  className="min-w-[120px]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Project"
                  )}
                </Button>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <div className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-surface-base border-border-base">
                  <CardHeader>
                    <CardTitle className="text-lg">Problem Statement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary">{result.problem}</p>
                  </CardContent>
                </Card>

                <Card className="bg-surface-base border-border-base">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Project Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-text-tertiary text-sm">Complexity:</span>
                      <Badge className={complexityColors[result.estimatedComplexity]}>
                        {result.estimatedComplexity}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-tertiary text-sm">Timeline:</span>
                      <span className="text-text-secondary">{result.estimatedTimeline}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-surface-base border-border-base">
                <CardHeader>
                  <CardTitle className="text-lg">Suggested Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {result.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded bg-surface-elevated">
                        <div className="w-2 h-2 rounded-full bg-accent-base" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-surface-base border-border-base">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wrench className="w-4 h-4" />
                      Suggested Tech Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {result.suggestedStack.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-surface-base border-border-base">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.keyConsiderations.map((consideration, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                          <div className="w-1 h-1 rounded-full bg-accent-base mt-2 flex-shrink-0" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center p-6 bg-surface-base rounded-lg border border-border-base">
                <p className="text-text-secondary mb-4">
                  Ready to turn this idea into reality?
                </p>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
