import { describe, it, expect } from 'vitest'
import { generateProjectOutline } from '@/lib/ai/generateProjectOutline'

describe('generateProjectOutline', () => {
  it('generates outline for e-commerce project', async () => {
    const result = await generateProjectOutline({
      idea: 'I want to build an online store with shopping cart and payment processing'
    })

    expect(result).toMatchObject({
      problem: expect.any(String),
      features: expect.arrayContaining([expect.any(String)]),
      suggestedStack: expect.arrayContaining([expect.any(String)]),
      estimatedComplexity: expect.stringMatching(/^(Simple|Moderate|Complex|Enterprise)$/),
      estimatedTimeline: expect.any(String),
      keyConsiderations: expect.arrayContaining([expect.any(String)]),
    })

    expect(result.features).toContain('Shopping Cart')
    expect(result.estimatedComplexity).toBe('Complex')
  })

  it('generates outline for AI project', async () => {
    const result = await generateProjectOutline({
      idea: 'A chatbot with artificial intelligence for customer support'
    })

    expect(result.features).toContain('AI Integration')
    expect(result.suggestedStack).toContain('OpenAI API')
    expect(result.estimatedComplexity).toBe('Complex')
  })

  it('generates outline for simple dashboard', async () => {
    const result = await generateProjectOutline({
      idea: 'Simple analytics dashboard with charts'
    })

    expect(result.features).toContain('Data Visualization')
    expect(result.suggestedStack).toContain('Chart.js/D3.js')
  })

  it('handles minimal input', async () => {
    const result = await generateProjectOutline({
      idea: 'A simple website'
    })

    expect(result.estimatedComplexity).toBe('Simple')
    expect(result.features).toContain('User Interface')
    expect(result.suggestedStack).toContain('Next.js')
  })
})
