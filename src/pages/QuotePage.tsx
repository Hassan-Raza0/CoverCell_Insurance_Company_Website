import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calculator, Smartphone, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

interface QuoteForm {
  deviceType: string;
  phoneBrand: string;
  phoneModel: string;
  phoneValue: string;
  purchaseDate: string;
  condition: string;
  plan: string;
  addOns: string[];
}

const QuotePage: React.FC = () => {
  const [quote, setQuote] = useState<number | null>(null);
  const [showQuote, setShowQuote] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<QuoteForm>();

  const selectedPlan = watch('plan');
  const selectedAddOns = watch('addOns') || [];

  const plans = {
  basic: {
    name: 'Basic Plan',
    basePrice: 9.99,
    features: [
      'Screen repair',
      'Battery cover',
      'Crash cover',
      '2 claims/year'
    ]
  },
  premium: {
    name: 'Premium Plan',
    basePrice: 19.99,
    features: [
      'Full protection',
      'Theft cover',
      'Water damage',
      'Fast claims'
    ]
  },
  family: {
    name: 'Family Plan',
    basePrice: 34.99,
    features: [
      '5 devices',
      'Family portal',
      'Group tracking',
    'Unlimited claim'
    ]
  }
};

  const addOns = [
    { id: 'express', name: 'Express Replacement', price: 4.99, description: 'Next-day device replacement' },
    { id: 'international', name: 'International Coverage', price: 2.99, description: 'Worldwide protection' },
    { id: 'accessories', name: 'Accessories Coverage', price: 1.99, description: 'Cases, chargers, and more' }
  ];

  const iphonePriceMap: { [key: string]: number } = {
    'iphone 6': 5, 'iphone 7': 5, 'iphone 8': 5,
    'iphone 7 plus': 8, 'iphone 8 plus': 8,
    'iphone x': 9, 'iphone xs': 9, 'iphone xr': 9,
    'iphone 11': 10, 'iphone 11 pro': 10, 'iphone 11 pro max': 10,
    'iphone 12': 10, 'iphone 13': 10,
    'iphone 13 pro max': 12, 'iphone 14 pro max': 12,
    'iphone 15 pro max': 12, 'iphone 16 pro max': 12
  };

  const calculateQuote = (data: QuoteForm) => {
    let basePrice = 0;

    const modelKey = data.phoneModel?.trim().toLowerCase();
    const isApple = data.phoneBrand === 'Apple';

    if (isApple && iphonePriceMap[modelKey]) {
      basePrice = iphonePriceMap[modelKey];
    } else if (data.plan && plans[data.plan as keyof typeof plans]) {
      basePrice = plans[data.plan as keyof typeof plans].basePrice;
    }

    const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    const deviceValue = parseFloat(data.phoneValue) || 0;
    let valueAdjustment = 0;
    if (deviceValue > 1000) valueAdjustment = 2;
    else if (deviceValue > 500) valueAdjustment = 1;

    let conditionAdjustment = 0;
    if (data.condition === 'fair') conditionAdjustment = 1;
    else if (data.condition === 'poor') conditionAdjustment = 2;

    const totalQuote = basePrice + addOnPrice + valueAdjustment + conditionAdjustment;
    setQuote(totalQuote);
    setShowQuote(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Instant Quote</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few quick questions about your device to get a personalized insurance quote in seconds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-lg shadow-xl p-8">
                <form onSubmit={handleSubmit(calculateQuote)} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Device Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Device Type *</label>
                        <select
                          {...register('deviceType', { required: 'Device type is required' })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Type</option>
                          <option value="phone">Phone</option>
                          <option value="tablet">Tablet</option>
                        </select>
                        {errors.deviceType && (
                          <p className="text-red-600 text-sm mt-1">{errors.deviceType.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Brand *</label>
                        <select
                          {...register('phoneBrand', { required: 'Phone brand is required' })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Brand</option>
                          <option value="Apple">Apple</option>
                          <option value="Samsung">Samsung</option>
                          <option value="Google">Google</option>
                          <option value="OnePlus">OnePlus</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.phoneBrand && (
                          <p className="text-red-600 text-sm mt-1">{errors.phoneBrand.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Model *</label>
                        <input
                          {...register('phoneModel', { required: 'Phone model is required' })}
                          placeholder="e.g., iPhone 15 Pro, Galaxy S24"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phoneModel && (
                          <p className="text-red-600 text-sm mt-1">{errors.phoneModel.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Device Value *</label>
                        <input
                          {...register('phoneValue', { required: 'Device value is required' })}
                          type="number"
                          placeholder="Current market value"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phoneValue && (
                          <p className="text-red-600 text-sm mt-1">{errors.phoneValue.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Date *</label>
                        <input
                          {...register('purchaseDate', { required: 'Purchase date is required' })}
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.purchaseDate && (
                          <p className="text-red-600 text-sm mt-1">{errors.purchaseDate.message}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Device Condition *</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { value: 'excellent', label: 'Excellent', description: 'Like new, no damage' },
                            { value: 'good', label: 'Good', description: 'Minor wear, fully functional' },
                            { value: 'fair', label: 'Fair', description: 'Some damage, works properly' }
                          ].map((condition) => (
                            <label key={condition.value} className="cursor-pointer">
                              <input
                                {...register('condition', { required: 'Please select device condition' })}
                                type="radio"
                                value={condition.value}
                                className="sr-only"
                              />
                              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                                <div className="font-semibold text-gray-900">{condition.label}</div>
                                <div className="text-sm text-gray-600">{condition.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.condition && (
                          <p className="text-red-600 text-sm mt-1">{errors.condition.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
{/* Plan Selection */}
<div>
  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Plan</h2>
{/* Info Box */}
<div className="mb-4 text-sm text-gray-600 bg-blue-50 border border-blue-200 p-3 rounded-md">
  <p>
    <strong>Basic Plan Pricing:</strong> from <span className="font-bold text-blue-700">$5 – $12</span> based on iPhone model.
  </p>
  <p>
    <strong>Deductible:</strong> <span className="font-bold text-blue-700">$29 – $99</span> depending on claim.
  </p>
</div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {Object.entries(plans).map(([key, plan]) => (
      <label key={key} className="cursor-pointer">
        <input
          {...register('plan', { required: 'Please select a plan' })}
          type="radio"
          value={key}
          className="sr-only"
        />
        <div className={`border-2 rounded-lg p-4 transition-colors ${
          selectedPlan === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
        }`}>
          <h3 className="font-semibold text-gray-900 mb-1">{plan.name}</h3>

          {/* ✅ Smaller font for basic plan */}
          {key === 'basic' ? (
            <p className="text-base font-semibold text-blue-600 mb-2 whitespace-nowrap">
              From $5 – $12
            </p>
          ) : (
            <p className="text-lg font-bold text-blue-600 mb-2">
              ${plan.basePrice}/month
            </p>
          )}

          <ul className="text-sm text-gray-600 space-y-1">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </label>
    ))}
  </div>

  {errors.plan && (
    <p className="text-red-600 text-sm mt-2">{errors.plan.message}</p>
  )}
</div>


                  {/* Add-ons */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Optional Add-ons</h2>
                    <div className="space-y-4">
                      {addOns.map((addOn) => (
                        <label key={addOn.id} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            {...register('addOns')}
                            type="checkbox"
                            value={addOn.id}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-gray-900">{addOn.name}</div>
                                <div className="text-sm text-gray-600">{addOn.description}</div>
                              </div>
                              <div className="text-lg font-semibold text-blue-600">
                                +${addOn.price}/month
                              </div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate My Quote
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Quote Result */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-xl p-6 sticky top-8"
              >
                {showQuote && quote ? (
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Quote</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      ${quote.toFixed(2)}
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      This quote is valid for 30 days and includes all selected coverage options.
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center mb-4">
                      Get Protected Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-6 rounded-lg font-medium transition-colors">
                      Save Quote
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Quote</h3>
                    <p className="text-gray-600">
                      Fill out the form to see your personalized insurance quote instantly.
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 rounded-lg p-6 mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose CoverCell?</h3>
                <ul className="space-y-3">
                  {[
                    'Instant coverage activation',
                    '24/7 customer support',
                    'No waiting periods',
                    'Authorized repair centers',
                    'Fast claim processing'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuotePage;