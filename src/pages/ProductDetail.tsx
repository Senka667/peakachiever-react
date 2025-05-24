import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { slug } = useParams();
  
  // In a real application, you would fetch the product data based on the slug
  // For now, we'll use a simple mapping of slugs to content
  const products = {
    "productivity-planner": {
      name: "Productivity Planner",
      price: 29.99,
      description: "A daily planner designed to help you prioritize tasks and track your productivity.",
      longDescription: `
        <p>The Productivity Planner is a powerful tool designed to help you prioritize your most important tasks, minimize distractions, and track your productivity over time.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Morning and evening reflection prompts</li>
          <li>Priority-based task organization</li>
          <li>Pomodoro tracking sections</li>
          <li>Weekly and monthly review templates</li>
          <li>High-quality paper and binding</li>
        </ul>
        
        <p>Each planner includes 6 months of daily planning pages, making it the perfect companion for achieving your goals and maximizing your productivity.</p>
      `,
      images: ["planner1.jpg", "planner2.jpg", "planner3.jpg"]
    },
    "focus-timer": {
      name: "Focus Timer",
      price: 39.99,
      description: "A specialized timer that helps you implement the Pomodoro Technique for maximum focus.",
      longDescription: `
        <p>The Focus Timer is a beautifully designed physical timer specifically created to help you implement the Pomodoro Technique and achieve deep focus states.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Simple one-twist operation</li>
          <li>Distraction-free design (no screens, no apps)</li>
          <li>Adjustable time settings (25, 45, or 60 minutes)</li>
          <li>Gentle acoustic timer (no harsh alarms)</li>
          <li>Portable and battery-free</li>
        </ul>
        
        <p>Unlike digital alternatives, the Focus Timer helps you stay away from screens while working, eliminating a major source of distraction.</p>
      `,
      images: ["timer1.jpg", "timer2.jpg", "timer3.jpg"]
    },
    "digital-detox-guide": {
      name: "Digital Detox Guide",
      price: 19.99,
      description: "A comprehensive guide to reducing digital distractions and reclaiming your attention.",
      longDescription: `
        <p>The Digital Detox Guide is a comprehensive resource that helps you identify digital distractions, implement practical strategies to reduce them, and reclaim your attention and focus.</p>
        
        <h3>What's Included:</h3>
        <ul>
          <li>120-page printed guide with actionable strategies</li>
          <li>30-day digital detox program</li>
          <li>Screen time tracking templates</li>
          <li>Technology usage assessment tools</li>
          <li>Access to online companion resources</li>
        </ul>
        
        <p>This guide isn't about eliminating technology—it's about developing a healthier, more intentional relationship with your digital tools.</p>
      `,
      images: ["guide1.jpg", "guide2.jpg", "guide3.jpg"]
    },
    "peak-performance-course": {
      name: "Peak Performance Course",
      price: 149.99,
      description: "A 6-week online course teaching you how to achieve peak performance in your work.",
      longDescription: `
        <p>The Peak Performance Course is a comprehensive 6-week online program designed to help you optimize your work habits, mental state, and environment for maximum productivity and achievement.</p>
        
        <h3>Course Curriculum:</h3>
        <ul>
          <li>Week 1: Performance Foundations & Assessment</li>
          <li>Week 2: Cognitive Optimization Strategies</li>
          <li>Week 3: Energy Management & Physical Optimization</li>
          <li>Week 4: Deep Work & Flow State Mastery</li>
          <li>Week 5: Environmental Design for Performance</li>
          <li>Week 6: Sustainable High Performance Systems</li>
        </ul>
        
        <p>Each module includes video lessons, workbooks, implementation guides, and access to our community of high performers.</p>
      `,
      images: ["course1.jpg", "course2.jpg", "course3.jpg"]
    },
    "habit-tracker": {
      name: "Habit Tracker",
      price: 24.99,
      description: "A beautiful habit tracking journal to help you build consistent productive habits.",
      longDescription: `
        <p>The Habit Tracker is a specialized journal designed to help you build and maintain productive habits through consistent tracking and reflection.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>12 months of habit tracking pages</li>
          <li>Space for tracking up to 10 daily habits</li>
          <li>Weekly and monthly reflection prompts</li>
          <li>Habit science education sections</li>
          <li>Durable, lay-flat binding</li>
        </ul>
        
        <p>Research shows that tracking habits significantly increases your chances of maintaining them long-term. This tracker makes the process simple and satisfying.</p>
      `,
      images: ["tracker1.jpg", "tracker2.jpg", "tracker3.jpg"]
    },
    "mindfulness-app": {
      name: "Mindfulness Meditation App",
      price: 59.99,
      description: "A premium app subscription with guided meditations for improved focus and productivity.",
      longDescription: `
        <p>The Mindfulness Meditation App is a premium annual subscription that gives you access to hundreds of guided meditations specifically designed to improve focus, reduce stress, and enhance productivity.</p>
        
        <h3>Subscription Includes:</h3>
        <ul>
          <li>200+ focus-enhancing guided meditations</li>
          <li>Productivity meditation programs (7-21 days)</li>
          <li>Work break meditation timers</li>
          <li>Focus music and soundscapes</li>
          <li>Progress tracking and insights</li>
        </ul>
        
        <p>Regular mindfulness practice has been shown to improve attention span, reduce stress, and enhance cognitive flexibility—all critical factors for productivity.</p>
      `,
      images: ["app1.jpg", "app2.jpg", "app3.jpg"]
    }
  };

  const product = products[slug as keyof typeof products] || {
    name: "Product Not Found",
    price: 0,
    description: "",
    longDescription: "<p>The requested product could not be found.</p>",
    images: []
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="h-64 md:h-full bg-gray-200"></div>
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</div>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div 
              className="prose mb-6"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
