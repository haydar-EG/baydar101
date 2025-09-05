import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test('should load homepage and display hero section', async ({ page }) => {
    await page.goto('/')

    // Check if hero section loads
    await expect(page.getByRole('heading', { name: /high-impact web & ai solutions/i })).toBeVisible()
    
    // Check for CTA buttons
    await expect(page.getByRole('button', { name: /start your project/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /see our process/i })).toBeVisible()
  })

  test('should navigate to contact section when CTA is clicked', async ({ page }) => {
    await page.goto('/')

    // Click the primary CTA
    await page.getByRole('button', { name: /start your project/i }).click()

    // Should scroll to contact section
    await expect(page.locator('#contact')).toBeInViewport()
  })

  test('should show services section', async ({ page }) => {
    await page.goto('/')

    // Scroll to services section
    await page.locator('text=Services That Scale With You').scrollIntoViewIfNeeded()
    
    // Check services are displayed
    await expect(page.getByText('Web Engineering')).toBeVisible()
    await expect(page.getByText('AI Integration & Automation')).toBeVisible()
    await expect(page.getByText('Custom LLM & RAG Solutions')).toBeVisible()
  })

  test('should have working AI demo section', async ({ page }) => {
    await page.goto('/')

    // Navigate to AI demo
    await page.locator('text=Project Idea Assistant').scrollIntoViewIfNeeded()
    
    // Fill in the textarea
    await page.getByPlaceholder(/describe your project idea/i).fill('I want to build an e-commerce platform with AI recommendations')
    
    // Click analyze button
    await page.getByRole('button', { name: /analyze project/i }).click()
    
    // Wait for loading to complete and results to appear
    await expect(page.getByText('Problem Statement')).toBeVisible({ timeout: 10000 })
    await expect(page.getByText('Suggested Features')).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Hero should be visible on mobile
    await expect(page.getByRole('heading', { name: /high-impact web & ai solutions/i })).toBeVisible()
    
    // Navigation should work on mobile
    await page.getByRole('button', { name: /start your project/i }).click()
    await expect(page.locator('#contact')).toBeInViewport()
  })
})
