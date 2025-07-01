import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Shield, Upload, X, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneModel: string;
  phoneBrand: string;
  purchaseDate: string;
  phoneValue: string;
  plan: string;
  terms: boolean;
  expressReplacement?: boolean;
  internationalCoverage?: boolean;
  accessoriesCoverage?: boolean;
}

const RegisterPage: React.FC = () => {
  const [phoneImages, setPhoneImages] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<RegisterForm>();

  const selectedPlan = watch('plan');
  const password = watch('password');

  const plans = {
  basic: {
    name: 'Basic Plan',
    price: '$9.99/month',
    features: [
      'Screen repair',
      'Basic protection',
      '24/7 support',
      '2 repairs per year' // 🆕 Added to balance the layout
    ]
  },
    premium: {
    name: 'Premium Plan',
    price: '$19.99/month',
    features: ['Complete protection', 'Theft coverage', 'Water damage', '2 claims per 12 months']
  },
  family: {
    name: 'Family Plan',
    price: '$34.99/month',
    features: ['Up to 5 devices', 'All Premium features', 'Family dashboard', 'Unlimited claims']
  }
};


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (phoneImages.length + files.length > 4) {
      toast.error('Maximum 4 images allowed');
      return;
    }
    setPhoneImages([...phoneImages, ...files]);
  };

  const removeImage = (index: number) => {
    setPhoneImages(phoneImages.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: RegisterForm) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const userData = {
        name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip_code: data.zipCode
      };

      const success = await registerUser(data.email, data.password, userData);

      if (success) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed');
    }
  };

  if (showSuccess) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
          >
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to CoverCell!</h2>
            <p className="text-gray-600 mb-6">
              Your registration is complete! Please check your email to verify your account, 
              then you can sign in and start protecting your device.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Go to Sign In
            </button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Get Protected Today</h1>
              <p className="text-gray-600 mt-2">Complete your registration to start your coverage</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
                      })}
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        {...register('password', { 
                          required: 'Password is required',
                          minLength: { value: 6, message: 'Password must be at least 6 characters' }
                        })}
                        type={showPassword ? 'text' : 'password'}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        {...register('confirmPassword', { 
                          required: 'Please confirm your password',
                          validate: value => value === password || 'Passwords do not match'
                        })}
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      {...register('address', { required: 'Address is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <select
                      {...register('state', { required: 'State is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      <option value="IL">Illinois</option>
                    </select>
                    {errors.state && (
                      <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code *
                    </label>
                    <input
                      {...register('zipCode', { required: 'ZIP code is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.zipCode && (
                      <p className="text-red-600 text-sm mt-1">{errors.zipCode.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Device Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Device Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Brand *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Model *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Purchase Date *
                    </label>
                    <input
                      {...register('purchaseDate', { required: 'Purchase date is required' })}
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.purchaseDate && (
                      <p className="text-red-600 text-sm mt-1">{errors.purchaseDate.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Device Value *
                    </label>
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
                </div>

                {/* Image Upload */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Device Photos (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <label className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">
                            Upload device photos
                          </span>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB each (max 4 photos)
                      </p>
                    </div>
                  </div>
                  
                  {phoneImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {phoneImages.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Phone ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>


<div className="mb-6">
  <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Plan</h2>

  {/* Info Box */}
  <div className="mb-5 text-sm text-gray-600 bg-blue-50 border border-blue-200 p-4 rounded-md">
    <p>
      <strong>Basic Plan Pricing:</strong> from <span className="font-bold text-blue-700">$5 – $12</span> depending on iPhone model.
    </p>
    <p>
      <strong>Deductible:</strong> <span className="font-bold text-blue-700">$29 – $99</span> based on the claim type.
    </p>
  </div>

  {/* Plan Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      {
        key: 'basic',
        name: 'Basic Plan',
        price: 'From $5 – $12',
        features: ['Screen repair', 'Battery cover', 'Crash cover', '2 claims/year']
      },
      {
        key: 'premium',
        name: 'Premium Plan',
        price: '$19.99/month',
        features: ['Full protection', 'Theft cover', 'Water damage', 'Fast claims']
      },
      {
        key: 'family',
        name: 'Family Plan',
        price: '$34.99/month',
        features: ['5 devices', 'Family portal', 'Group tracking']
      }
    ].map(plan => (
      <label key={plan.key} className="cursor-pointer">
        <input
          {...register('plan', { required: 'Please select a plan' })}
          type="radio"
          value={plan.key}
          className="sr-only"
        />
        <div className={`border-2 rounded-lg p-5 transition-colors ${
          selectedPlan === plan.key
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}>
          <h3 className="font-semibold text-gray-900 mb-1">{plan.name}</h3>
          <p className="text-base font-semibold text-blue-600 mb-2">{plan.price}</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </label>
    ))}
  </div>

  {/* Validation Error */}
  {errors.plan && (
    <p className="text-red-600 text-sm mt-2">{errors.plan.message}</p>
  )}
</div>
                
{/* Optional Add-ons */}
<div>
  <h2 className="text-xl font-semibold text-gray-900 mb-4">Optional Add-ons</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <label className="cursor-pointer">
      <input
        {...register('expressReplacement')}
        type="checkbox"
        className="sr-only"
      />
      <div className={`border-2 rounded-lg p-4 transition-colors ${
        watch('expressReplacement') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}>
        <h3 className="font-semibold text-gray-900">Express Replacement</h3>
        <p className="text-gray-600 text-sm mt-1">Next-day  replacement</p>
        <p className="text-blue-600 font-bold mt-2">+$4.99/month</p>
      </div>
    </label>

    <label className="cursor-pointer">
      <input
        {...register('internationalCoverage')}
        type="checkbox"
        className="sr-only"
      />
      <div className={`border-2 rounded-lg p-4 transition-colors ${
        watch('internationalCoverage') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}>
        <h3 className="font-semibold text-gray-900">International Coverage</h3>
        <p className="text-gray-600 text-sm mt-1">Worldwide protection</p>
        <p className="text-blue-600 font-bold mt-2">+$2.99/month</p>
      </div>
    </label>

    <label className="cursor-pointer">
      <input
        {...register('accessoriesCoverage')}
        type="checkbox"
        className="sr-only"
      />
      <div className={`border-2 rounded-lg p-4 transition-colors ${
        watch('accessoriesCoverage') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}>
        <h3 className="font-semibold text-gray-900">Accessories Coverage</h3>
        <p className="text-gray-600 text-sm mt-1">Cases, chargers, and more</p>
        <p className="text-blue-600 font-bold mt-2">+$1.99/month</p>
      </div>
    </label>
  </div>
</div>


              {/* Terms and Conditions */}
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    {...register('terms', { required: 'You must accept the terms and conditions' })}
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-600 text-sm mt-1">{errors.terms.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Creating Account...' : 'Complete Registration'}
                </button>
              </div>

              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;