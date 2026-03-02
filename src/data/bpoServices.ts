import { 
  HeartHandshake, PhoneOutgoing, Target, HeadphonesIcon, 
  Wrench, CreditCard, Calculator, ShoppingCart, 
  Building2, Megaphone, FileText, Stethoscope, 
  Landmark, ShoppingBag, Cpu, Plane, Factory 
} from 'lucide-react';

export const bpoServicesContent: Record<string, any> = {
  'customer-retention': {
    title: 'Customer Retention',
    subtitle: 'Keep your most valuable customers loyal and satisfied.',
    description: 'Our proactive customer retention strategies are designed to reduce churn, increase customer lifetime value, and turn your existing customers into brand advocates. We use data-driven insights and personalized engagement to keep your audience connected to your brand.',
    icon: HeartHandshake,
    features: [
      'Proactive Outreach Campaigns',
      'Churn Prediction & Prevention',
      'Loyalty Program Management',
      'Customer Feedback & Surveys'
    ],
    benefits: [
      'Increase customer lifetime value (CLV)',
      'Reduce customer churn rates significantly',
      'Enhance brand loyalty and advocacy',
      'Identify and resolve pain points early'
    ],
    metrics: [
      { label: 'Average Churn Reduction', value: '25%' },
      { label: 'CSAT Improvement', value: '+15 pts' },
      { label: 'ROI on Retention', value: '300%' }
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'outbound-sales': {
    title: 'Outbound Sales',
    subtitle: 'Targeted outreach campaigns designed to convert prospects.',
    description: 'Accelerate your revenue growth with our expert outbound sales teams. We handle the entire sales cycle, from cold calling and email outreach to appointment setting and closing deals, acting as a seamless extension of your internal team.',
    icon: PhoneOutgoing,
    features: [
      'Cold Calling & Email Outreach',
      'Appointment Setting',
      'Account-Based Marketing (ABM)',
      'Sales Pipeline Management'
    ],
    benefits: [
      'Accelerate sales cycles',
      'Scale outreach without adding internal headcount',
      'Penetrate new markets quickly',
      'Consistent and predictable pipeline generation'
    ],
    metrics: [
      { label: 'Meetings Booked', value: '3x' },
      { label: 'Conversion Rate', value: '12%' },
      { label: 'Revenue Growth', value: '+40%' }
    ],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'lead-generation': {
    title: 'Lead Generation',
    subtitle: 'Build a robust pipeline of qualified opportunities.',
    description: 'Fuel your sales engine with high-quality, pre-qualified leads. Our lead generation specialists use advanced targeting and multi-channel strategies to identify and engage decision-makers who are ready to buy.',
    icon: Target,
    features: [
      'B2B & B2C Lead Generation',
      'Lead Qualification & Scoring',
      'Market Research & Profiling',
      'Multi-Channel Prospecting'
    ],
    benefits: [
      'Focus your sales team on closing, not prospecting',
      'Higher quality, sales-ready leads',
      'Data-driven targeting for better ROI',
      'Scalable lead volume based on your capacity'
    ],
    metrics: [
      { label: 'Lead Volume', value: '+150%' },
      { label: 'Cost Per Lead', value: '-30%' },
      { label: 'Sales Qualified Leads', value: '45%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'customer-service': {
    title: 'Customer Service',
    subtitle: 'Round-the-clock support delivering exceptional experiences.',
    description: 'Provide your customers with 24/7, omnichannel support. Our highly trained agents deliver empathetic, efficient, and personalized assistance across phone, email, live chat, and social media, ensuring every interaction strengthens your brand.',
    icon: HeadphonesIcon,
    features: [
      '24/7 Omnichannel Support',
      'Multilingual Capabilities',
      'Order Management & Tracking',
      'Issue Resolution & Escalation'
    ],
    benefits: [
      'Always-on support for global customers',
      'Consistent brand voice across all channels',
      'Reduced wait times and faster resolutions',
      'Scalable team sizes for seasonal peaks'
    ],
    metrics: [
      { label: 'First Call Resolution', value: '85%' },
      { label: 'Average Speed to Answer', value: '< 30s' },
      { label: 'Customer Satisfaction', value: '95%' }
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'technical-support': {
    title: 'Technical Support',
    subtitle: 'Expert troubleshooting and issue resolution.',
    description: 'Keep your users up and running with our tiered technical support services. From basic troubleshooting (Tier 1) to complex issue resolution (Tier 3), our tech-savvy agents provide fast and accurate solutions for software, hardware, and IT services.',
    icon: Wrench,
    features: [
      'Tier 1, 2, and 3 Support',
      'Helpdesk & Ticketing Management',
      'Remote Desktop Assistance',
      'Software & Hardware Troubleshooting'
    ],
    benefits: [
      'Reduce downtime for your users',
      'Free up your internal engineering resources',
      'Detailed issue tracking and reporting',
      'Continuous knowledge base improvement'
    ],
    metrics: [
      { label: 'Resolution Time', value: '-40%' },
      { label: 'Escalation Rate', value: '< 10%' },
      { label: 'User Satisfaction', value: '92%' }
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'payment-processing': {
    title: 'Payment Processing',
    subtitle: 'Secure and efficient handling of transactions.',
    description: 'Ensure smooth and secure financial transactions with our payment processing support. We handle billing inquiries, process refunds, manage subscriptions, and assist customers with payment-related issues, all while maintaining strict PCI compliance.',
    icon: CreditCard,
    features: [
      'Billing & Invoice Inquiries',
      'Refund & Dispute Management',
      'Subscription Management',
      'PCI Compliant Operations'
    ],
    benefits: [
      'Reduce payment disputes and chargebacks',
      'Ensure strict compliance and data security',
      'Improve cash flow with faster resolutions',
      'Enhance customer trust during transactions'
    ],
    metrics: [
      { label: 'Processing Accuracy', value: '99.9%' },
      { label: 'Dispute Resolution Time', value: '-50%' },
      { label: 'PCI Compliance', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'accounting-collections': {
    title: 'Accounting and Collections',
    subtitle: 'Professional financial management and debt recovery.',
    description: 'Improve your cash flow and maintain positive customer relationships with our professional accounting and collections services. We handle accounts receivable, accounts payable, and respectful debt recovery with a focus on compliance and brand protection.',
    icon: Calculator,
    features: [
      'Accounts Receivable & Payable',
      'First & Third-Party Collections',
      'Payment Plan Negotiation',
      'Financial Reporting & Reconciliation'
    ],
    benefits: [
      'Accelerate cash flow and reduce DSO',
      'Maintain positive customer relationships during recovery',
      'Reduce internal administrative burden',
      'Ensure compliance with collection regulations'
    ],
    metrics: [
      { label: 'Recovery Rate', value: '+35%' },
      { label: 'Days Sales Outstanding', value: '-20 Days' },
      { label: 'Compliance Rate', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'inbound-sales': {
    title: 'Inbound Sales',
    subtitle: 'Converting incoming inquiries into revenue.',
    description: 'Maximize the ROI of your marketing efforts by turning inbound calls, chats, and emails into sales. Our consultative sales agents are trained to cross-sell, up-sell, and guide prospects through the buying journey to close deals efficiently.',
    icon: ShoppingCart,
    features: [
      'Order Taking & Processing',
      'Cross-selling & Up-selling',
      'Product Information & Guidance',
      'Lead Conversion'
    ],
    benefits: [
      'Maximize ROI on marketing spend',
      'Increase average order value (AOV)',
      'Provide a seamless buying experience',
      'Capture sales opportunities 24/7'
    ],
    metrics: [
      { label: 'Conversion Rate', value: '28%' },
      { label: 'Average Order Value', value: '+22%' },
      { label: 'Abandoned Cart Recovery', value: '15%' }
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'facility-procurement': {
    title: 'Facility and Procurement',
    subtitle: 'Streamlined management of assets and vendors.',
    description: 'Optimize your operational efficiency with our facility and procurement support. We assist with vendor management, purchase order processing, inventory tracking, and facility maintenance coordination, allowing you to focus on your core business.',
    icon: Building2,
    features: [
      'Vendor & Supplier Management',
      'Purchase Order Processing',
      'Inventory & Asset Tracking',
      'Facility Maintenance Support'
    ],
    benefits: [
      'Reduce operational overhead',
      'Improve vendor relationships and terms',
      'Ensure accurate inventory levels',
      'Streamline procurement workflows'
    ],
    metrics: [
      { label: 'Procurement Cycle Time', value: '-30%' },
      { label: 'Cost Savings', value: '18%' },
      { label: 'Order Accuracy', value: '99%' }
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'direct-response-marketing': {
    title: 'Direct Response Marketing',
    subtitle: 'Handling high-volume responses with precision.',
    description: 'Ensure no lead is left behind during your marketing campaigns. Our scalable teams are equipped to handle high volumes of calls, emails, and messages generated by TV, radio, digital, and print direct response campaigns.',
    icon: Megaphone,
    features: [
      'Campaign Response Handling',
      'Scalable Staffing for Spikes',
      'Lead Capture & Qualification',
      'Campaign Performance Tracking'
    ],
    benefits: [
      'Never miss a lead during campaign spikes',
      'Real-time campaign performance data',
      'Seamless integration with your CRM',
      'Rapid scaling up or down as needed'
    ],
    metrics: [
      { label: 'Response Time', value: '< 15s' },
      { label: 'Lead Capture Rate', value: '98%' },
      { label: 'Campaign ROI', value: '+45%' }
    ],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'back-office-processing': {
    title: 'Back Office Processing',
    subtitle: 'Efficient administrative and operational support.',
    description: 'Streamline your operations and reduce overhead with our comprehensive back-office processing services. We handle data entry, document management, transcription, and other administrative tasks with high accuracy and quick turnaround times.',
    icon: FileText,
    features: [
      'Data Entry & Processing',
      'Document Management & Digitization',
      'Transcription Services',
      'Quality Assurance & Compliance'
    ],
    benefits: [
      'Reduce administrative bottlenecks',
      'Improve data accuracy and accessibility',
      'Lower operational costs significantly',
      'Free up core staff for strategic tasks'
    ],
    metrics: [
      { label: 'Processing Speed', value: '2x' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Cost Reduction', value: '40%' }
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'claims-processing': {
    title: 'Claims Processing',
    subtitle: 'Accurate and timely handling of claims.',
    description: 'Accelerate your claims processing cycle with our specialized back-office teams. We handle insurance, warranty, and rebate claims efficiently, ensuring accuracy, compliance, and a smooth experience for your customers.',
    icon: FileText,
    features: [
      'Insurance & Warranty Claims',
      'Rebate Processing',
      'Document Verification',
      'Fraud Detection Support'
    ],
    benefits: [
      'Faster claim resolution times',
      'Higher accuracy in claim adjudication',
      'Improved customer satisfaction during stressful times',
      'Robust fraud detection and prevention'
    ],
    metrics: [
      { label: 'Turnaround Time', value: '-60%' },
      { label: 'Processing Accuracy', value: '99.5%' },
      { label: 'Customer Satisfaction', value: '90%' }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600'
  },
  // Industries
  'healthcare': {
    title: 'Healthcare & Life Sciences',
    subtitle: 'Compliant and compassionate support.',
    description: 'Deliver exceptional patient experiences with our HIPAA-compliant healthcare BPO services. We provide patient scheduling, medical billing support, telehealth assistance, and compassionate customer service for healthcare providers and life sciences organizations.',
    icon: Stethoscope,
    features: [
      'Patient Scheduling & Registration',
      'Medical Billing & Claims Support',
      'Telehealth Technical Assistance',
      'HIPAA Compliant Operations'
    ],
    benefits: [
      'Ensure strict HIPAA compliance',
      'Improve patient satisfaction and care access',
      'Reduce administrative burden on medical staff',
      'Accelerate revenue cycle management'
    ],
    metrics: [
      { label: 'Billing Accuracy', value: '98%' },
      { label: 'Patient Satisfaction', value: '94%' },
      { label: 'Call Abandonment', value: '< 2%' }
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'finance': {
    title: 'Banking & Financial Services',
    subtitle: 'Secure, accurate, and highly regulated services.',
    description: 'Maintain trust and compliance with our specialized financial BPO services. We offer secure customer support, fraud detection assistance, loan processing support, and account management for banks, fintechs, and financial institutions.',
    icon: Landmark,
    features: [
      'Account Management & Support',
      'Fraud Detection & Prevention',
      'Loan Processing Assistance',
      'Regulatory Compliance Support'
    ],
    benefits: [
      'Maintain strict regulatory compliance',
      'Enhance fraud detection capabilities',
      'Provide secure and reliable customer support',
      'Streamline loan and account processing'
    ],
    metrics: [
      { label: 'Fraud Prevention', value: '+40%' },
      { label: 'Processing Time', value: '-35%' },
      { label: 'Compliance Rate', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'retail': {
    title: 'Retail & E-commerce',
    subtitle: 'Scalable solutions for seamless shopping experiences.',
    description: 'Enhance your customer journey from browsing to unboxing. Our retail BPO services handle order inquiries, returns management, omnichannel support, and seasonal volume spikes to ensure your e-commerce operations run smoothly year-round.',
    icon: ShoppingBag,
    features: [
      'Order & Returns Management',
      'Omnichannel Customer Support',
      'Seasonal Scalability',
      'Product Information Assistance'
    ],
    benefits: [
      'Handle seasonal volume spikes effortlessly',
      'Provide a unified omnichannel experience',
      'Reduce return rates through better support',
      'Increase customer lifetime value'
    ],
    metrics: [
      { label: 'CSAT Score', value: '92%' },
      { label: 'Response Time', value: '< 1 min' },
      { label: 'Resolution Rate', value: '88%' }
    ],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'technology': {
    title: 'Technology & Telecom',
    subtitle: 'Tech-savvy support for software and hardware.',
    description: 'Support your users with expert technical assistance. We provide Tier 1-3 tech support, customer onboarding, subscription management, and billing support for SaaS companies, hardware manufacturers, and telecommunications providers.',
    icon: Cpu,
    features: [
      'Tiered Technical Support',
      'Customer Onboarding & Success',
      'Subscription & Billing Management',
      'Hardware Troubleshooting'
    ],
    benefits: [
      'Improve user onboarding and adoption',
      'Reduce churn for SaaS products',
      'Provide expert technical troubleshooting',
      'Scale support alongside user growth'
    ],
    metrics: [
      { label: 'Onboarding Success', value: '95%' },
      { label: 'Churn Reduction', value: '20%' },
      { label: 'First Contact Resolution', value: '75%' }
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'travel': {
    title: 'Travel & Hospitality',
    subtitle: 'Multilingual, 24/7 assistance for travelers.',
    description: 'Provide world-class support for travelers around the globe. Our hospitality BPO services handle reservations, itinerary changes, loyalty program management, and disruption assistance with 24/7 multilingual capabilities.',
    icon: Plane,
    features: [
      'Reservations & Booking Support',
      'Itinerary Management & Changes',
      'Loyalty Program Support',
      '24/7 Multilingual Assistance'
    ],
    benefits: [
      'Provide 24/7 global support',
      'Handle travel disruptions efficiently',
      'Increase booking conversions',
      'Enhance loyalty program engagement'
    ],
    metrics: [
      { label: 'Booking Conversion', value: '+18%' },
      { label: 'Language Support', value: '15+' },
      { label: 'Customer Satisfaction', value: '93%' }
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=600'
  },
  'manufacturing': {
    title: 'Manufacturing & Logistics',
    subtitle: 'Supply chain support and B2B customer service.',
    description: 'Streamline your supply chain and improve B2B relationships. We offer order processing, logistics coordination, vendor management, and dedicated B2B customer support for manufacturing and logistics companies.',
    icon: Factory,
    features: [
      'B2B Order Processing',
      'Logistics & Tracking Support',
      'Vendor & Supplier Coordination',
      'Supply Chain Helpdesk'
    ],
    benefits: [
      'Streamline B2B order processing',
      'Improve supply chain visibility',
      'Enhance vendor and supplier relationships',
      'Reduce operational bottlenecks'
    ],
    metrics: [
      { label: 'Order Accuracy', value: '99.8%' },
      { label: 'Processing Time', value: '-40%' },
      { label: 'Vendor Satisfaction', value: '90%' }
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600'
  }
};
