import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'

// Initialize Stripe.js on the client side
export const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!)

// Initialize Stripe on the server side
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})

// Product configuration
export const PRODUCTS = {
  starter: {
    priceId: process.env.STRIPE_PRICE_STARTER!,
    price: 29,
    name: 'Starter',
    features: [
      'Basic Dashboard Access',
      'Core Analytics Tools',
      '5 Projects Limit',
      'Email Support',
      'Mobile App Access'
    ]
  },
  professional: {
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL!,
    price: 79,
    name: 'Professional',
    features: [
      'Advanced Dashboard Suite',
      'Real-time Analytics',
      'Unlimited Projects',
      'Priority Support',
      'Custom Integrations',
      'Team Collaboration',
      'API Access'
    ]
  },
  enterprise: {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE!,
    price: 199,
    name: 'Enterprise',
    features: [
      'Full Platform Access',
      'AI-Powered Insights',
      'White-label Solution',
      'Dedicated Account Manager',
      'Custom Development',
      'SLA Guarantee',
      'On-premise Deployment',
      '24/7 Phone Support'
    ]
  }
}