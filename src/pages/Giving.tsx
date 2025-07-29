import React, { useState } from 'react';
import { Heart, CreditCard, Banknote, Gift, Users, Church, TrendingUp } from 'lucide-react';

const Giving: React.FC = () => {
  const [donationType, setDonationType] = useState('general');
  const [amount, setAmount] = useState('');

  const donationTypes = [
    { id: 'general', name: 'General Fund', description: 'Support our general ministry operations' },
    { id: 'making-history', name: 'Making History Campaign', description: 'Help us purchase our new building' },
    { id: 'missions', name: 'Missions', description: 'Support local and global mission work' },
    { id: 'youth', name: 'Youth Ministry', description: 'Invest in the next generation' }
  ];

  const quickAmounts = [25, 50, 100, 250, 500];

  const handlePayPalDonation = () => {
    // This would integrate with PayPal's donation system
    // For demo purposes, we'll show an alert
    alert(`Thank you for your generous donation of $${amount} to ${donationTypes.find(t => t.id === donationType)?.name}! 
    
In a real implementation, this would redirect to PayPal's secure donation page.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Generous Giving
        </h1>
        <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
          Your generosity enables us to share God's love, support our community, and advance His kingdom. 
          Thank you for partnering with us in ministry!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Donation Form */}
        <div className="lg:col-span-2">
          <div className="bg-cream rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">Make a Donation</h2>
            
            {/* Donation Type Selection */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-navy mb-3">
                Choose Donation Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {donationTypes.map((type) => (
                  <label key={type.id} className="cursor-pointer">
                    <input
                      type="radio"
                      name="donationType"
                      value={type.id}
                      checked={donationType === type.id}
                      onChange={(e) => setDonationType(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === type.id
                        ? 'border-navy bg-beige'
                        : 'border-gray-200 hover:border-navy'
                    }`}>
                      <div className="font-semibold text-navy">{type.name}</div>
                      <div className="text-sm text-charcoal-gray">{type.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-navy mb-3">
                Donation Amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount.toString())}
                    className={`p-3 rounded-lg border-2 font-semibold transition-colors duration-200 ${
                      amount === quickAmount.toString()
                        ? 'border-navy bg-navy text-cream'
                        : 'border-gray-200 text-navy hover:border-navy'
                    }`}
                  >
                    ${quickAmount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-gray text-lg">
                  $
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-navy focus:outline-none text-lg"
                />
              </div>
            </div>

            {/* PayPal Donation Button */}
            <div className="text-center">
              <button
                onClick={handlePayPalDonation}
                disabled={!amount || parseFloat(amount) <= 0}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto"
              >
                <CreditCard className="h-6 w-6 mr-2" />
                Donate with PayPal
              </button>
              <p className="text-sm text-charcoal-gray mt-3">
                Secure donation processing through PayPal
              </p>
            </div>
          </div>

          {/* Alternative Giving Methods */}
          <div className="mt-8 bg-beige rounded-lg p-8">
            <h3 className="text-xl font-bold text-navy mb-4">Other Ways to Give</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Banknote className="h-6 w-6 text-navy mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">Cash or Check</h4>
                  <p className="text-charcoal-gray">
                    Bring your donation to any Sunday service or mail to our church address.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="h-6 w-6 text-navy mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">Planned Giving</h4>
                  <p className="text-charcoal-gray">
                    Consider including Windsor Gospel Assembly in your estate planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Giving Impact */}
        <div className="space-y-8">
          <div className="bg-navy text-cream rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Your Impact</h3>
            <p className="text-beige mb-4">
              Every donation, regardless of size, makes a difference in advancing God's kingdom through our ministry.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Church className="h-5 w-5 text-beige" />
                <span className="text-sm">Supports weekly worship services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-beige" />
                <span className="text-sm">Funds community outreach programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-beige" />
                <span className="text-sm">Enables church growth and expansion</span>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-lg p-6">
            <h3 className="text-xl font-bold text-navy mb-4">Biblical Giving</h3>
            <blockquote className="text-charcoal-gray italic mb-3">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver."
            </blockquote>
            <p className="text-sm text-charcoal-gray">— 2 Corinthians 9:7</p>
          </div>

          <div className="bg-beige rounded-lg p-6">
            <h3 className="text-xl font-bold text-navy mb-4">Questions About Giving?</h3>
            <p className="text-charcoal-gray mb-4">
              We're here to help! Contact our office if you have questions about donations, tax receipts, or planned giving.
            </p>
            <a
              href="mailto:info@windsorgospel.org"
              className="text-navy font-semibold hover:text-charcoal-gray transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Making History Campaign Highlight */}
      <div className="mt-16 bg-gradient-to-r from-navy to-charcoal-gray text-cream rounded-lg p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Support Making History Campaign</h2>
          <p className="text-xl text-beige mb-8 max-w-3xl mx-auto">
            Help us secure a permanent home for our church family. Every donation to our 
            "Making History" campaign brings us closer to purchasing our new building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setDonationType('making-history');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-beige text-navy px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200"
            >
              Donate to Campaign
            </button>
            <a
              href="/making-history"
              className="border-2 border-beige text-beige px-8 py-3 rounded-lg font-semibold hover:bg-beige hover:text-navy transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving;