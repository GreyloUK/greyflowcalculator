'use client'

import { useState, useEffect } from 'react'

interface Service {
  id: string
  name: string
  price: number
  period: 'one-off' | 'monthly'
  tagline: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'kickoff',
    name: '30 Day Kick Off',
    price: 1000,
    period: 'one-off',
    tagline: 'Get the engine built',
    description: 'Complete foundation setup for your LinkedIn presence',
    features: ['Phases 1-3 included', 'Complete profile optimization', 'Strategy development']
  },
  {
    id: 'video',
    name: 'Video & Visuals',
    price: 950,
    period: 'monthly',
    tagline: 'Ongoing story fuel',
    description: 'Professional content creation to keep your audience engaged',
    features: ['1 shoot per quarter', '6-8 video clips', '4 carousel graphics monthly']
  },
  {
    id: 'ads',
    name: 'Ads Booster',
    price: 650,
    period: 'monthly',
    tagline: 'Need reach fast',
    description: 'Managed advertising campaigns with professional creative',
    features: ['Managed £1k-£5k ad spend', 'Creative development', 'Performance reporting']
  }
]

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [monthlyTotal, setMonthlyTotal] = useState(0)
  const [oneOffTotal, setOneOffTotal] = useState(0)
  const [hasDiscount, setHasDiscount] = useState(false)

  const calculateTotals = () => {
    const selected = services.filter(service => selectedServices.includes(service.id))
    const multipleServices = selected.length > 1
    setHasDiscount(multipleServices)

    let monthly = 0
    let oneOff = 0

    selected.forEach(service => {
      if (service.period === 'monthly') {
        monthly += service.price
      } else {
        oneOff += service.price
      }
    })

    // Apply 15% bundle discount if multiple services selected
    if (multipleServices) {
      monthly = monthly * 0.85
      oneOff = oneOff * 0.85
    }

    setMonthlyTotal(monthly)
    setOneOffTotal(oneOff)
    setTotalPrice(monthly + oneOff)
  }

  useEffect(() => {
    calculateTotals()
  }, [selectedServices])

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      const isCurrentlySelected = prev.includes(serviceId)
      const newSelected = isCurrentlySelected 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
      
      return newSelected
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(price))
  }

    return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-3 lg:p-4">
      {/* Service Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id)
          return (
            <div
              key={service.id}
              className={`
                relative rounded-xl p-4 border-2 transition-all duration-300 cursor-pointer
                hover:shadow-xl hover:scale-[1.02] transform z-10
                ${isSelected 
                  ? 'border-greyflow-primary bg-greyflow-card shadow-lg shadow-greyflow-primary/20' 
                  : 'border-greyflow-secondary-purple bg-greyflow-card hover:border-greyflow-primary/70'
                }
              `}
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                toggleService(service.id)
              }}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              aria-label={`Select ${service.name} service`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleService(service.id)
                }
              }}
            >
              {/* Selection Indicator */}
              <div className="absolute top-3 right-3" style={{ pointerEvents: 'none' }}>
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                  isSelected 
                    ? 'bg-greyflow-primary border-greyflow-primary text-white' 
                    : 'border-greyflow-secondary-purple bg-transparent'
                }`}>
                  {isSelected && <span className="text-xs">✓</span>}
                </div>
              </div>

              {/* Service Content */}
              <div className="pr-6" style={{ pointerEvents: 'none' }}>
                <h3 className="text-lg font-semibold text-greyflow-text mb-1">
                  {service.name}
                </h3>
                <p className="text-greyflow-text font-medium mb-2">
                  {service.tagline}
                </p>
                <p className="text-greyflow-secondary text-sm mb-3">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-greyflow-secondary">
                      <span className="text-greyflow-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-xl font-bold text-greyflow-text">
                  {formatPrice(service.price)}
                  <span className="text-sm font-normal text-greyflow-secondary ml-2">
                    {service.period === 'monthly' ? '/month' : 'one-off'}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pricing Summary */}
      {selectedServices.length > 0 && (
        <div className="bg-greyflow-card rounded-xl p-4 border border-greyflow-secondary-purple">
          <h2 className="text-xl font-semibold text-greyflow-text mb-4">
            Your Selected Services
          </h2>
          
          <div className="space-y-3 mb-4">
            {services
              .filter(service => selectedServices.includes(service.id))
              .map(service => {
                const discountedPrice = hasDiscount ? service.price * 0.85 : service.price
                return (
                  <div key={service.id} className="flex justify-between items-center py-1">
                    <div>
                      <span className="text-greyflow-text font-medium">{service.name}</span>
                      <span className="text-greyflow-secondary text-sm ml-2">
                        ({service.period === 'monthly' ? 'monthly' : 'one-off'})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-greyflow-text font-semibold">
                        {formatPrice(discountedPrice)}
                      </span>
                      {hasDiscount && (
                        <div className="text-sm text-greyflow-secondary line-through">
                          {formatPrice(service.price)}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>

          {hasDiscount && (
            <div className="bg-greyflow-primary/10 border border-greyflow-primary/30 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-center">
                <span className="text-greyflow-primary font-semibold">
                  🎉 Bundle and save 15%
                </span>
              </div>
            </div>
          )}

          {/* Totals */}
          <div className="border-t border-greyflow-secondary-purple pt-3 space-y-2">
            {oneOffTotal > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-greyflow-secondary">One-off total:</span>
                <span className="text-greyflow-text font-semibold">
                  {formatPrice(oneOffTotal)}
                </span>
              </div>
            )}
            {monthlyTotal > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-greyflow-secondary">Monthly total:</span>
                <span className="text-greyflow-text font-semibold">
                  {formatPrice(monthlyTotal)}/month
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-greyflow-secondary-purple">
              <span className="text-greyflow-text">Total investment:</span>
              <div className="text-right">
                <div className="text-greyflow-primary">
                  {oneOffTotal > 0 && monthlyTotal > 0 
                    ? `${formatPrice(oneOffTotal)} + ${formatPrice(monthlyTotal)}/month`
                    : oneOffTotal > 0 
                      ? formatPrice(oneOffTotal)
                      : `${formatPrice(monthlyTotal)}/month`
                  }
                </div>
                {hasDiscount && (
                  <div className="text-sm text-greyflow-secondary line-through">
                    {oneOffTotal > 0 && monthlyTotal > 0 
                      ? `${formatPrice(oneOffTotal / 0.85)} + ${formatPrice(monthlyTotal / 0.85)}/month`
                      : oneOffTotal > 0 
                        ? formatPrice(oneOffTotal / 0.85)
                        : `${formatPrice(monthlyTotal / 0.85)}/month`
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-6">
        <a
          href="https://calendly.com/elliot-greyflow/audit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-greyflow-primary hover:bg-greyflow-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-greyflow-primary/30 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-greyflow-primary/50"
          aria-label="Get started with GreyFlow services"
        >
          Get Started
        </a>
        <p className="text-greyflow-secondary text-sm mt-3">
          Ready to accelerate your machine shop&apos;s LinkedIn presence? 
          Get in touch to discuss your requirements.
        </p>
      </div>
    </div>
  )
} 